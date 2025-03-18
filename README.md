# cancel-sponsor
This is script for explain about refund of sponsor amount to sponsor, because kosen conference in syuto was canceled.

To run this script:
```
git clone https://github.com/kosenconfsyuto/cancel-sponsor.git  #on your prefer dir
```
after set .env: 
```
npm i
```
```
npx ts-node index.ts
```
or, you can preview email via React Email:
```
npm run email:dev
```

If you want to run this script, you have to create DB and table using MySQL.
Table will be like this:
```
CREATE TABLE `YOUR_TABLE_NAME` (
  `payment_id` bigint unsigned NOT NULL,
  `sponsor_type` enum('person','company') NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `nickname` text NOT NULL,
  `email` varchar(256) NOT NULL,
  `amount` int unsigned NOT NULL,
  `payment_method` enum('credit','bank') NOT NULL,
  `status` enum('pending','success','failed') NOT NULL,
  `stripe_session_id` text,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_sent_cancel_email` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
```
