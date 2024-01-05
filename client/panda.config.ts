import { defineConfig, defineRecipe, defineGlobalStyles } from "@pandacss/dev";

const buttonRecipe = defineRecipe({
  className: "button",

  base: {
    cursor: "pointer",
    borderRadius: "100px",
    color: "#fff",
    transition: "background-color 0.3s,border-color 0.3s",
  },

  variants: {
    buttonStyle: {
      BRAND: {
        backgroundColor: "#191919",
        border: "1px solid #191919",

        _hover: {
          backgroundColor: "#000",
          borderColor: "#000",
        },
      },

      BRAND_GRAY: {
        backgroundColor: "#f2f2f2",
        border: "1px solid #f2f2f2",
        color: "#000",

        _hover: {
          backgroundColor: "#e9e9e9",
          borderColor: "#e9e9e9",
        },
      },

      STRONG: {
        backgroundColor: "brand",
        border: "1px solid",
        borderColor: "brand",

        _hover: {
          backgroundColor: "brand.hover",
          borderColor: "brand.hover",
        },
      },

      TEXT_STRONG: {
        backgroundColor: "transparent",
        color: "brand",

        _hover: {
          color: "brand.hover",
        },
      },

      OBVIOUS: {
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: "brand",
        color: "brand",

        _hover: {
          borderColor: "brand.hover",
          color: "brand.hover",
        },
      },

      SUBTLE: {
        backgroundColor: "transparent",
        border: "1px solid #242424",
        color: "#242424",

        _hover: {
          borderColor: "#000",
          color: "#000",
        },
      },
    },

    size: {
      SM: { padding: "5px 12px", fontSize: 14 },
      MD: { padding: "7px 16px", fontSize: 14 },
      LG: { padding: "9px 20px", fontSize: 16 },
    },

    disabled: {
      true: { opacity: 0.5, pointerEvents: "none", userSelect: "none" },
    },
  },

  defaultVariants: { buttonStyle: "BRAND", size: "MD" },
  compoundVariants: [{ buttonStyle: "TEXT_STRONG", css: { padding: "0" } }],
});

const avatarRecipe = defineRecipe({
  className: "avatar",

  base: { cursor: "pointer", borderRadius: "100px", objectFit: "cover" },

  variants: {
    size: {
      SM: { width: 24, height: 24 },
      MD: { width: 32, height: 32 },
      LG: { width: 44, height: 44 },
      XLG: { width: 64, height: 64 },
      "2XLG": { width: 88, height: 88 },
    },
  },

  defaultVariants: { size: "MD" },
});

const globalCss = defineGlobalStyles({
  "*": {
    fontFamily: "sohne",
    outline: "none",
    userSelect: "none",
    WebkitTapHighlightColor: "transparent",
  },
});

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],

  theme: {
    tokens: {
      colors: {
        brand: { DEFAULT: { value: "#1a8917" }, hover: { value: "#156d12" } },
        black: { DEFAULT: { value: "#000" } },
        grey: { DEFAULT: { value: "#f2f2f2" } },
        "dark-grey": { DEFAULT: { value: "#6b6b6b" } },
      },

      radii: { default: { value: "4px" } },
      borders: { primary: { value: "1px solid {colors.neutral}" } },
      fonts: { sohne: { value: "sohne" }, "gt-super": { value: "gt-super" } },
    },

    recipes: {
      button: buttonRecipe,
      avatar: avatarRecipe,
    },
  },

  globalCss,
  outdir: "styled-system",
  hash: true,
  jsxFramework: "react",
  minify: true,
  watch: true,
});
