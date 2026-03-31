"use client";

import { useEffect, useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";

import { CartSidebar } from "@/components/order/CartSidebar";
import { CategoryTabs } from "@/components/shared/CategoryTabs";
import { Container } from "@/components/shared/Container";
import { DishCard } from "@/components/shared/DishCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { menuApi } from "@/lib/api/menuApi";
import { orderApi } from "@/lib/api/orderApi";
import { menuCategories, type MenuCategory, type MenuItem } from "@/types/menu";
import type { CheckoutFormValues, MockOrderReceipt } from "@/types/order";

const initialCheckoutValues: CheckoutFormValues = {
  fullName: "",
  phone: "",
  email: "",
  pickupNote: ""
};

export const OrderPageClient = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "All">("All");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutValues, setCheckoutValues] = useState(initialCheckoutValues);
  const [submittedOrder, setSubmittedOrder] = useState<MockOrderReceipt | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { items: cartItems, totals, addItem, updateQuantity, clearCart } = useCart();

  useEffect(() => {
    let mounted = true;

    const loadMenu = async () => {
      const result = await menuApi.getMenuItems();
      if (!mounted) return;
      setItems(result);
      setLoading(false);
    };

    void loadMenu();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  const handleSubmitOrder = async () => {
    setIsSubmitting(true);
    try {
      const receipt = await orderApi.submitPickupOrder({
        subtotal: totals.subtotal,
        tax: totals.tax,
        total: totals.total
      });

      setSubmittedOrder(receipt);
      clearCart();
      setCheckoutValues(initialCheckoutValues);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-14 sm:py-20">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Ordena en línea"
          title="Arma tu pedido para recoger en pocos toques"
          description="Experiencia de orden simulada con carrito, totales y checkout listos para backend."
        />

        <div className="rounded-2xl border border-brand-night/10 bg-brand-sand/50 p-4 text-sm text-brand-night/75">
          Por ahora solo ofrecemos recogido. La hora de recogido, el pago y el rastreo en cocina se conectarán en la fase de backend.
        </div>

        <div className="lg:hidden">
          <Button variant="secondary" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={16} /> Carrito ({cartItems.length})
          </Button>
        </div>

        <CategoryTabs
          categories={[...menuCategories]}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr]">
          <section className="space-y-5">
            {loading ? (
              <div className="grid gap-5 md:grid-cols-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="rounded-3xl border border-brand-night/10 bg-white p-5">
                    <div className="h-40 animate-pulse rounded-2xl bg-brand-sand" />
                    <div className="mt-4 h-4 w-2/3 animate-pulse rounded bg-brand-sand" />
                    <div className="mt-2 h-3 w-full animate-pulse rounded bg-brand-sand" />
                  </div>
                ))}
              </div>
            ) : null}

            {!loading && filteredItems.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-brand-night/25 bg-white p-8 text-center text-sm text-brand-night/70">
                No hay platos disponibles en esta categoría.
              </div>
            ) : null}

            {!loading ? (
              <div className="grid gap-5 md:grid-cols-2">
                {filteredItems.map((item) => (
                  <DishCard
                    key={item.id}
                    item={item}
                    action={
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-brand-night/15 p-1">
                          <button
                            className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-full text-brand-night transition hover:bg-brand-sand"
                            onClick={() => {
                              const found = cartItems.find((entry) => entry.item.id === item.id);
                              updateQuantity(item.id, (found?.quantity ?? 0) - 1);
                            }}
                            type="button"
                            aria-label={`Bajar cantidad de ${item.name}`}
                          >
                            -
                          </button>
                          <span className="min-w-6 text-center text-sm font-semibold text-brand-night">
                            {cartItems.find((entry) => entry.item.id === item.id)?.quantity ?? 0}
                          </span>
                          <button
                            className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-full text-brand-night transition hover:bg-brand-sand"
                            onClick={() => addItem(item, 1)}
                            type="button"
                            aria-label={`Subir cantidad de ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                        <Button variant="ghost" onClick={() => addItem(item, 1)}>
                          Añadir
                        </Button>
                      </div>
                    }
                  />
                ))}
              </div>
            ) : null}
          </section>

          <div className="hidden lg:block">
            <div className="sticky top-24">
              <CartSidebar
                items={cartItems}
                subtotal={totals.subtotal}
                tax={totals.tax}
                total={totals.total}
                isSubmitting={isSubmitting}
                checkoutValues={checkoutValues}
                submittedOrder={submittedOrder}
                onQuantityChange={updateQuantity}
                onCheckoutChange={setCheckoutValues}
                onSubmit={handleSubmitOrder}
              />
            </div>
          </div>
        </div>
      </Container>

      {isCartOpen ? (
        <div className="fixed inset-0 z-50 grid bg-black/45 p-4 lg:hidden" role="dialog" aria-modal="true">
          <div className="ml-auto h-full w-full max-w-md animate-slide-up">
            <CartSidebar
              items={cartItems}
              subtotal={totals.subtotal}
              tax={totals.tax}
              total={totals.total}
              isSubmitting={isSubmitting}
              checkoutValues={checkoutValues}
              submittedOrder={submittedOrder}
              onClose={() => setIsCartOpen(false)}
              onQuantityChange={updateQuantity}
              onCheckoutChange={setCheckoutValues}
              onSubmit={handleSubmitOrder}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
