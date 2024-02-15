import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const $ = window.$;
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {};

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <ThemeProvider defaultTheme="light" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
