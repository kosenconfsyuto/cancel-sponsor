import mysql, { RowDataPacket } from "mysql2/promise";
import Mail from "./emails/mail";
import { Resend } from "resend";
import "dotenv/config";

const {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  RESEND_API_KEY,
  FROM_EMAIL,
} = process.env;

const table = "clients_copy";

if (!DATABASE_HOST || !DATABASE_USER || !DATABASE_PASSWORD || !DATABASE_NAME || !RESEND_API_KEY || !FROM_EMAIL) {
  throw new Error("Missing required environment variables.");
}

const pool = mysql.createPool({
  host: DATABASE_HOST,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const resend = new Resend(RESEND_API_KEY);

interface MailProps {
  username: string;
  address: string;
  paymentId: string;
  date: string;
  nickname: string;
  email: string;
  amount: string;
  paymentMethod: string;
}

const sendEmail = async (props: MailProps): Promise<void> => {
  try {
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: props.email,
      subject: "返金対応についてのお知らせ",
      react: Mail(props),
    });
    console.log(`Email sent to ${props.email}:`, response);
  } catch (error) {
    console.error(`Failed to send email to ${props.email}:`, error);
  }
};

const processEmails = async (): Promise<void> => {
  try {
    const [rows] = await pool.execute<RowDataPacket[]>(
      `SELECT * FROM ${table} WHERE status = 'success'`
    );

    for (const row of rows) {
      await sendEmail({
        username: row.name,
        address: row.address,
        paymentId: row.payment_id,
        date: row.created_at.toISOString(),
        nickname: row.nickname,
        email: row.email,
        amount: row.amount,
        paymentMethod: row.payment_method,
      });

      await pool.execute(`UPDATE ${table} SET is_sent_cancel_email = TRUE WHERE payment_id = ?`, [row.payment_id]);

      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    process.exit(0);
  } catch (error) {
    console.error("Error processing emails:", error);
    process.exit(1);
  }
};

processEmails();