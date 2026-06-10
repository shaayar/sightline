// app/fonts.ts

import localFont from "next/font/local";

export const theSeasons = localFont({
  src: [
    {
      path: "../public/fonts/theseasons-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/theseasons-reg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/theseasons-bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/theseasons-boldItalic.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-seasons",
});