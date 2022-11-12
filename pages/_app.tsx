import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DarkModeProvider } from "../src/providers/DarkMode";
import { VideoProvider } from "../src/providers/Videos";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VideoProvider>
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </VideoProvider>
  );
}
