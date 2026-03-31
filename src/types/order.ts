import type { MenuItem } from "@/types/menu";

export type MockOrderStatus = "borrador" | "enviado" | "en-preparacion" | "listo";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface CheckoutFormValues {
  fullName: string;
  phone: string;
  email: string;
  pickupNote: string;
}

export interface MockOrderReceipt {
  orderId: string;
  status: MockOrderStatus;
  submittedAt: string;
  subtotal: number;
  tax: number;
  total: number;
}
