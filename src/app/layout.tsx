import "./globals.css";
import { TOKEN_CONFIG } from "@/lib/config";

export const metadata = {
  title: `${TOKEN_CONFIG.symbol} - ${TOKEN_CONFIG.name}`,
  description: TOKEN_CONFIG.description,
  keywords: "STD, Solana, memecoin, crypto, token, PumpFun",
  openGraph: {
    title: `${TOKEN_CONFIG.symbol} - ${TOKEN_CONFIG.name}`,
    description: TOKEN_CONFIG.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TOKEN_CONFIG.symbol} - ${TOKEN_CONFIG.name}`,
    description: TOKEN_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico?v=1" />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00ffff" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
