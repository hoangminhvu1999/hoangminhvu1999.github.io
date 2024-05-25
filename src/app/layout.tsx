import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hoàng Minh Vũ",
  description: "Home page",
};

type Props = {
  children: React.ReactNode,
}

const RootLayout: React.FC<Props> = ({
  children,
}) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
