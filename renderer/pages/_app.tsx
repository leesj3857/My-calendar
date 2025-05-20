// renderer/pages/_app.tsx
import '../styles/globals.css';
import GraphQLProviderWrapper from './GraphQLProviderWrapper';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphQLProviderWrapper>
      <Component {...pageProps} />
    </GraphQLProviderWrapper>
  );
}