// External Imports
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  darkMode: ["class"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1536px",
      },
    },

    screens: {
      xs: "356px",
      sm: "400px",
      smd: "532px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },

    extend: {
      fontSize: {
        rs: ["13px", "18px"],
      },

      colors: {
        background: "#111111",
        foreground: "#EEEEEE",
        brand: {
          // Accessible Text
          100: "#ACF4B9",
          200: "#08DB64",

          // Solid Colors
          300: "#00D25B",
          400: "#11DD66",

          // Borders and Separators
          500: "#277E41",
          600: "#236A37",
          700: "#1C592D",

          // Interactive Components
          800: "#144A24",
          900: "#0F3C1C",
          1000: "#122D19",

          // Backgrounds
          1100: "#121B13",
          1200: "#0C130D",
        },
      },

      keyframes: {
        load: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0.15" },
        },
        pulse: {
          "50%": { opacity: "0.5" },
        },
      },

      animation: {
        load: "load 1.2s linear infinite",
        skeleton: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [
    // tailwindcssAnimate,
    plugin(function ({ addVariant }) {
      addVariant("trigger", [
        "@media (min-width: 976px) { &:hover }",
        "&:active",
      ]);
      addVariant("group-trigger", [
        ":merge(.group):active &",
        "@media (min-width: 976px) { :merge(.group):hover & }",
      ]);
      addVariant("peer-trigger", [
        ":merge(.peer):active ~ &",
        "@media (min-width: 976px) { :merge(.peer):lg:hover ~ & }",
      ]);
    }),
  ],
};

export default config;
