import './globals.css';
import GraphQLProviderWrapper from './GraphQLProviderWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <GraphQLProviderWrapper>
          {children}
        </GraphQLProviderWrapper>
      </body>
    </html>
  );
}