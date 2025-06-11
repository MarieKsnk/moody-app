import type { AppProps } from "next/app";
import Header from "@/components/organisms/Header";
import QueryProvider from "@/providers/QueryClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Header />
      <Component {...pageProps} />
    </QueryProvider>
  );
}
