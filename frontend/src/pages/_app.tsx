import type { AppProps } from "next/app";
import QueryProvider from "@/providers/QueryClient";
import "@/styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Component {...pageProps} />
    </QueryProvider>
  );
}
