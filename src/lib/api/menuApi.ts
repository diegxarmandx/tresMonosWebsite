import menuData from "@/data/menu.json";
import type { MenuItem } from "@/types/menu";

const MOCK_LATENCY_MS = 550;

export const menuApi = {
  async getMenuItems() {
    // TODO(api): replace mock JSON with fetch from backend endpoint (Node/Express or Next.js API route).
    // TODO(auth): include user/session token in request headers when customer accounts are enabled.
    await new Promise((resolve) => setTimeout(resolve, MOCK_LATENCY_MS));
    return menuData as MenuItem[];
  }
};
