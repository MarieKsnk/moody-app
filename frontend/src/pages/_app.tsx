import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Header from '@/components/organisms/Header';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
    </>
  );
}
