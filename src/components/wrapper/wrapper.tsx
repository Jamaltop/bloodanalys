"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "../header/header";
import Footer from "../footer/footer";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideHeader = pathname === "/login" || pathname === "/register";

  return (
    <div className={`flex flex-col min-h-screen overflow-x-clip`}>
      {!hideHeader && <Header />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
