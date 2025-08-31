import "./globals.css";

export const metadata = {
  title: "VodkaTrade - TON’s Fastest Trading Bot",
  description:
    "Discover VodkaTrade: the ultimate sniper trading bot on TON. Private nodes, lightning speed, Telegram-native. Trade faster, smarter, and dominate every launch.",
  icons: {
    icon: "/brand/logo.png",
  },
  openGraph: {
    title: "VodkaTrade - TON’s Fastest Trading Bot",
    description:
      "Discover VodkaTrade: the ultimate sniper trading bot on TON. Private nodes, lightning speed, Telegram-native. Trade faster, smarter, and dominate every launch.",
    url: "https://vodkatrade.io",
    images: [
      {
        url: "https://vodkatrade.io/vodkatrade-preview.png",
        alt: "VodkaTrade - TON’s Fastest Trading Bot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VodkaTrade - TON’s Fastest Trading Bot",
    description:
      "Discover VodkaTrade: the ultimate sniper trading bot on TON. Private nodes, lightning speed, Telegram-native. Trade faster, smarter, and dominate every launch.",
    images: ["https://vodkatrade.io/vodkatrade-preview.png"],
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
