import "./globals.css";
import 'swiper/css';


export const viewport = {
  themeColor: '#FE936B',
}
export const metadata = {
  title: "Fox Web - Cryptocurrency Prices by Market Cap",
  description: "FoxWeb provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, FoxWeb tracks community growth, open-source code development, major events and on-chain metrics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-hat">{children}</body>
    </html>
  );
}
