import Head from "next/head";
import { Inter } from "next/font/google";

import "nextra-theme-blog/style.css";
import "../styles.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function Nextra({ Component, pageProps }) {
    return (
        <>
            <Head></Head>
            <Component className={inter.className} {...pageProps} />
        </>
    );
}
