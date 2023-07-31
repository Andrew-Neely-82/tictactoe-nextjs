import { DarkModeProvider } from "@/context/DarkModeContext";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}
