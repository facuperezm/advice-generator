import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "@next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-manrope",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${manrope.variable}`}>
      <Head>
        <title>Advice Generator</title>
        <link rel="shortchut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
