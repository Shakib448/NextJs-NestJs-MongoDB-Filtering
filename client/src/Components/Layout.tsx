import * as React from "react";
import Head from "next/head";
interface LayoutInterface {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ title, children }: LayoutInterface) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
