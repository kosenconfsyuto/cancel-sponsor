import React from "react";
import {
  Container,
  Heading,
  Img,
  Link,
  Text,
} from "@react-email/components";
import InfoTable from "./components/infoTable";
import "dotenv/config";

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

const Mail = (props: MailProps) => {
  return (
    <Container style={{
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      margin: "auto",
      maxWidth: "600px",
      textAlign: "center",
      color: "#333",
    }}>
      <Img
        src={`${process.env.CDN_DOMAIN}/kosenconfsyuto/images/logo/logo.png`}
        alt="logo"
        width={400}
        height={400}
        style={{
          width: "5rem",
          height: "5rem",
          marginBottom: "10px",
        }}
      />
      <Heading>返金対応についてのお知らせ</Heading>
      <Text>{props.username} 様</Text>
      <Text>先日は高専カンファレンス in 首都にご協賛いただき、ありがとうございました。</Text>
      <Text>残念ではありますが、1月にお知らせしました通り、高専カンファレンス in 首都は開催中止となりました。</Text>
      <Text>楽しみにしてくださっていた皆様に、深くお詫び申し上げます。</Text>
      <br />
      <Text>協賛いただいた皆様に返金手続きを行います。</Text>
      <Text>これに伴い、原則として新たに手続きをいただく必要はありません。</Text>
      <Text>また、銀行口座に振り込む形で協賛の申し込みをしていただいた方で、現在までに振り込みいただいていない場合には、入金いただく必要はありませんので、ご了承ください。</Text>
      <br />
      <Text>協賛いただいた全額をクレジットカード、または銀行口座に入金いたしますので、今しばらくお待ちください。</Text>
      <Text>なお、クレジットカード会社によって、返金処理に時間を要する場合があります。ご了承ください。</Text>
      <InfoTable
        title="協賛についての情報"
        rows={[
          {
            title: "お支払いID",
            value: props.paymentId,
          },
          {
            title: "協賛日時",
            value: props.date,
          },
          {
            title: "お名前",
            value: props.username,
          },
          {
            title: "住所",
            value: props.address,
          },
          {
            title: "ニックネーム",
            value: props.nickname,
          },
          {
            title: "メールアドレス",
            value: props.email,
          },
          {
            title: "金額",
            value: props.amount + "円",
          },
          {
            title: "お支払い方法",
            value: props.paymentMethod,
          },
        ]}
      />
      <Container style={{
        textAlign: "left",
        width: "100%",
        marginTop: "24px",
      }}>
        <Img
          src={`${process.env.CDN_DOMAIN}/kosenconfsyuto/images/logo/logo.png`}
          alt="logo"
          width={400}
          height={400}
          style={{
            width: "3rem",
            height: "3rem",
            marginBottom: "10px",
          }}
        />

        <Link href="https://kosenconfsyuto.com" style={footerLink}>高専カンファレンスin首都</Link>
        <br />
        <Link href="https://kosenconfsyuto.com/contact" style={footerLink}>お問い合わせ</Link>
        <br />
        <Link href="https://kosenconfsyuto.com/privacy-policy" style={footerLink}>プライバシーポリシー</Link>
        <br />
        <Link href="https://sponsor.kosenconfsyuto.com" style={footerLink}>スポンサーサイト</Link>
        <br />
        <Link href="https://kosenconf.jp" style={footerLink}>高専カンファレンス</Link>
        <br />
        <Text>主催: 高専カンファレンスin首都実行委員会</Text>
      </Container>
    </Container>
  );
};

export default Mail;

const footerLink = {
  color: "#a0a0a0",
  textDecoration: "none",
  marginBottom: "16px",
};