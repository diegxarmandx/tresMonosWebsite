"use client";

import { X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { formatCurrency } from "@/lib/currency";
import type { CartItem, CheckoutFormValues, MockOrderReceipt } from "@/types/order";

interface CartSidebarProps {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  isSubmitting: boolean;
  checkoutValues: CheckoutFormValues;
  submittedOrder: MockOrderReceipt | null;
  onClose?: () => void;
  onQuantityChange: (itemId: string, quantity: number) => void;
  onCheckoutChange: (values: CheckoutFormValues) => void;
  onSubmit: () => Promise<void>;
}

const statusLabel: Record<MockOrderReceipt["status"], string> = {
  borrador: "Borrador",
  enviado: "Enviado",
  "en-preparacion": "En preparación",
  listo: "Listo"
};

export const CartSidebar = ({
  items,
  subtotal,
  tax,
  total,
  isSubmitting,
  checkoutValues,
  submittedOrder,
  onClose,
  onQuantityChange,
  onCheckoutChange,
  onSubmit
}: CartSidebarProps) => {
  const isEmpty = items.length === 0;

  return (
    <aside className="h-full min-h-0 overflow-y-auto overscroll-contain touch-pan-y rounded-3xl border border-brand-night/10 bg-white p-5 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-heading text-3xl text-brand-night">Tu carrito</h2>
        {onClose ? (
          <button
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-brand-night/15 text-brand-night lg:hidden"
            onClick={onClose}
            type="button"
            aria-label="Cerrar carrito"
          >
            <X size={18} />
          </button>
        ) : null}
      </div>

      <p className="mt-2 text-sm text-brand-night/70">Recogido en tienda.</p>

      {submittedOrder ? (
        <div className="mt-5 rounded-2xl bg-brand-palm/10 p-4 text-sm text-brand-night">
          <p className="font-semibold">Orden recibida</p>
          <p className="mt-1">Número de orden: {submittedOrder.orderId}</p>
          <p>Estado: {statusLabel[submittedOrder.status]}</p>
          <p className="mt-2 text-brand-night/75">Gracias por ordenar con nosotros.</p>
        </div>
      ) : null}

      {isEmpty ? (
        <div className="mt-6 rounded-2xl border border-dashed border-brand-night/20 p-6 text-center text-sm text-brand-night/70">
          Tu carrito está vacío. Añade platos del menú para comenzar tu orden.
        </div>
      ) : (
        <ul className="mt-6 space-y-3">
          {items.map((entry) => (
            <li key={entry.item.id} className="rounded-2xl border border-brand-night/10 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-brand-night">{entry.item.name}</p>
                  <p className="text-sm text-brand-night/65">{formatCurrency(entry.item.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-full border border-brand-night/20"
                    onClick={() => onQuantityChange(entry.item.id, entry.quantity - 1)}
                    type="button"
                    aria-label={`Reducir cantidad de ${entry.item.name}`}
                  >
                    -
                  </button>
                  <span className="min-w-6 text-center text-sm font-semibold">{entry.quantity}</span>
                  <button
                    className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-full border border-brand-night/20"
                    onClick={() => onQuantityChange(entry.item.id, entry.quantity + 1)}
                    type="button"
                    aria-label={`Aumentar cantidad de ${entry.item.name}`}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 space-y-2 rounded-2xl bg-brand-sand/45 p-4 text-sm text-brand-night">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>IVU (11.5%)</span>
          <span>{formatCurrency(tax)}</span>
        </div>
        <div className="mt-1 flex items-center justify-between border-t border-brand-night/15 pt-2 text-base font-semibold">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>

      <form
        className="mt-6 space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
          void onSubmit();
        }}
      >
        <h3 className="font-semibold text-brand-night">Datos para completar tu pedido</h3>
        <Input
          id="checkout-name"
          label="Nombre completo"
          value={checkoutValues.fullName}
          onChange={(event) => onCheckoutChange({ ...checkoutValues, fullName: event.target.value })}
          required
        />
        <Input
          id="checkout-phone"
          label="Teléfono"
          type="tel"
          value={checkoutValues.phone}
          onChange={(event) => onCheckoutChange({ ...checkoutValues, phone: event.target.value })}
          required
        />
        <Input
          id="checkout-email"
          label="Correo electrónico"
          type="email"
          value={checkoutValues.email}
          onChange={(event) => onCheckoutChange({ ...checkoutValues, email: event.target.value })}
          required
        />
        <Textarea
          id="checkout-note"
          label="Nota para recogido"
          placeholder="¿Alguna instrucción para tu pedido?"
          value={checkoutValues.pickupNote}
          onChange={(event) => onCheckoutChange({ ...checkoutValues, pickupNote: event.target.value })}
        />

        <Button className="w-full" isLoading={isSubmitting} disabled={isEmpty}>
          Enviar orden
        </Button>
      </form>
    </aside>
  );
};
