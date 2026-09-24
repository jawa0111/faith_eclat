import { createHash } from "crypto";

function md5(input: string) {
  return createHash("md5").update(input).digest("hex");
}

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

export function getPayhereCheckoutUrl() {
  return process.env.PAYHERE_MODE === "live"
    ? "https://www.payhere.lk/pay/checkout"
    : "https://sandbox.payhere.lk/pay/checkout";
}

export function buildPayhereHash(orderId: string, amount: number, currency: string) {
  const merchantId = requireEnv("PAYHERE_MERCHANT_ID");
  const merchantSecret = requireEnv("PAYHERE_MERCHANT_SECRET");
  const amountFormatted = amount.toFixed(2);
  const secretHash = md5(merchantSecret).toUpperCase();
  return md5(`${merchantId}${orderId}${amountFormatted}${currency}${secretHash}`).toUpperCase();
}

export function verifyPayhereNotification(params: {
  merchantId: string;
  orderId: string;
  payhereAmount: string;
  payhereCurrency: string;
  statusCode: string;
  md5sig: string;
}) {
  const merchantSecret = requireEnv("PAYHERE_MERCHANT_SECRET");
  const secretHash = md5(merchantSecret).toUpperCase();
  const localSig = md5(
    `${params.merchantId}${params.orderId}${params.payhereAmount}${params.payhereCurrency}${params.statusCode}${secretHash}`
  ).toUpperCase();
  return localSig === params.md5sig.toUpperCase();
}
