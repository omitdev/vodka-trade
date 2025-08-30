import "./globals.css";

export const metadata = {
  title: "MM Tool VodkaTrade - TON’s Fastest Trading Bot",
  description:
    "Discover VodkaTrade: the ultimate sniper trading bot on TON. Private nodes, lightning speed, Telegram-native. Trade faster, smarter, and dominate every launch.",
  icons: {
    icon: "/brand/logo.png",
  },
  openGraph: {
    title: "VodkaTrade - TON’s Fastest Trading Bot",
    description:
      "Discover VodkaTrade: the ultimate sniper trading bot on TON. Private nodes, lightning speed, Telegram-native. Trade faster, smarter, and dominate every launch.",
    url: "https://tools.tontrade.fun",
    images: [
      {
        url: "https://tools.tontrade.fun/vodkatrade-preview.jpg",
        alt: "VodkaTrade - TON’s Fastest Trading Bot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VodkaTrade - TON’s Fastest Trading Bot",
    description:
      "Discover VodkaTrade: the ultimate sniper trading bot on TON. Private nodes, lightning speed, Telegram-native. Trade faster, smarter, and dominate every launch.",
    images: ["https://tools.tontrade.fun/vodkatrade-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
