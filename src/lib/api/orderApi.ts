import type { MockOrderReceipt } from "@/types/order";

const MOCK_LATENCY_MS = 900;

interface SubmitOrderPayload {
  subtotal: number;
  tax: number;
  total: number;
}

export const orderApi = {
  async submitPickupOrder(payload: SubmitOrderPayload): Promise<MockOrderReceipt> {
    // TODO(api): send payload to secure backend endpoint for order creation and kitchen ticket generation.
    // TODO(payment): integrate Stripe and/or Square payment intents before marking orders as submitted.
    // TODO(auth): attach customer account token or support guest checkout tokenization.
    await new Promise((resolve) => setTimeout(resolve, MOCK_LATENCY_MS));

    return {
      orderId: `TM-${Math.floor(Math.random() * 90000 + 10000)}`,
      status: "enviado",
      submittedAt: new Date().toISOString(),
      subtotal: payload.subtotal,
      tax: payload.tax,
      total: payload.total
    };
  }
};
