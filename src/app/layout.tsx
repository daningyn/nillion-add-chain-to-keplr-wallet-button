import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Add NilChain to Keplr example",
  description: "Add NilChain to Keplr example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="https://nillion.com/wp-content/themes/nillion/assets/images/favicon.png" />
      </Head>
      <body className={inter.className}>
          <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover={false}
            pauseOnFocusLoss={false}
            theme='light'
          />
          {children}
      </body>
    </html>
  );
}
