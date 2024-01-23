/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          "100": "#374832",
          "200": "#333",
          "300": "rgba(51, 51, 51, 0.09)",
        },
        white: "#fff",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        "neutral-dark-gray": "#505050",
        black: "#000",
        gray: "#8d8d8d",
        dimgray: {
          "100": "#5e6e59",
          "200": "rgba(94, 110, 89, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        "text-regular-normal": "Roboto",
        manrope: "Manrope",
        italiana: "Italiana",
        "kyivtype-sans": "'KyivType Sans'",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      lg: "18px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      xl: "20px",
      "45xl": "64px",
      "32xl": "51px",
      "mid-1": "17.1px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
