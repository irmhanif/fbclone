import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
