module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      height: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
      },
      width: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
      },
      colors: {
        neutral: {
          50: "#fafafa",
          100: "#f7f7f7",
          200: "#eaeaea",
          300: "#dadada",
          400: "#a8a8a8",
          500: "#787878",
          600: "#585858",
          700: "#454545",
          800: "#2b2b2b",
          900: "#1b1b1b",
        },
        primary: {
          50: "#f0f9ff",
          100: "#e4f4ff",
          200: "#c2e9ff",
          300: "#89d8ff",
          400: "#49c3fe",
          500: "#2facef",
          600: "#258bcd",
          700: "#176da4",
          800: "#115a87",
          900: "#0e4a6e",
        },
        secondary: {
          50: "#F8F5FF",
          100: "#EFE7FE",
          200: "#E4D7FE",
          300: "#CCB4FD",
          400: "#AF89FA",
          500: "#9E70FA",
          600: "#8B54F7",
          700: "#6D35DE",
          800: "#5221B5",
          900: "#451D95",
        },
        success: {
          50: "#f0fcf0",
          100: "#dbf7d9",
          200: "#bdedbc",
          300: "#9add9b",
          400: "#7ec77b",
          500: "#68af63",
          600: "#518f4f",
          700: "#3c7341",
          800: "#2d5c34",
          900: "#224c2c",
        },
        warning: {
          50: "#fffaef",
          100: "#fff3d6",
          200: "#ffe7ab",
          300: "#ffd67f",
          400: "#ffc463",
          500: "#f9a550",
          600: "#db7c3d",
          700: "#b5562d",
          800: "#934022",
          900: "#79331a",
        },
        danger: {
          50: "#fef2f2",
          100: "#fadcdc",
          200: "#f7bfbd",
          300: "#f69391",
          400: "#f65e5c",
          500: "#ef2a2b",
          600: "#dd0000",
          700: "#b90903",
          800: "#991611",
          900: "#7f1e19",
        },
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [],
};
