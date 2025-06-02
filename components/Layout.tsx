import React from "react";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <Header />
      <main className="px-6 py-12 max-w-6xl mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
