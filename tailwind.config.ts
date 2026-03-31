import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#fffdf8",
        foreground: "#2a1a10",
        brand: {
          sand: "#f8eee0",
          clay: "#dd8a4f",
          coral: "#cc5c3f",
          palm: "#2f6a57",
          night: "#2c1d17"
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px -18px rgba(45, 24, 14, 0.4)"
      },
      backgroundImage: {
        "tropical-mesh":
          "radial-gradient(at 5% 10%, rgba(221,138,79,0.2) 0px, transparent 45%), radial-gradient(at 95% 90%, rgba(47,106,87,0.18) 0px, transparent 50%), linear-gradient(120deg, #fffaf2 0%, #fff4e5 50%, #fffaf4 100%)"
      }
    }
  },
  plugins: []
};

export default config;
