"use client";

import { useMemo, useState } from "react";

import type { CartItem } from "@/types/order";
import type { MenuItem } from "@/types/menu";

const TAX_RATE = 0.115;

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (menuItem: MenuItem, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((entry) => entry.item.id === menuItem.id);

      if (existing) {
        return prev.map((entry) =>
          entry.item.id === menuItem.id
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry
        );
      }

      return [...prev, { item: menuItem, quantity }];
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((entry) =>
          entry.item.id === itemId ? { ...entry, quantity: Math.max(0, quantity) } : entry
        )
        .filter((entry) => entry.quantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    return { subtotal, tax, total };
  }, [items]);

  return {
    items,
    totals,
    addItem,
    updateQuantity,
    clearCart
  };
};
