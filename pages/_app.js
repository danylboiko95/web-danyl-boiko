import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import Chakra from "../components/chakra";
import "../styles/main.css";
import Script from "next/script";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <div className="container">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.MEASUREMENT_ID}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.MEASUREMENT_ID}');
            `}
        </Script>
      </div>
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default Website;
