"use client";

import NavBar from "@/src/components/organisms/Navbar";
import { Colors } from "@Coronation-ArchTouch/cor-ui";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: Colors.primary.gray.neutral25 }}
    >
      {/* Navbar */}
      <NavBar />

      {/* Main Dashboard content */}
      <main className="flex-1 flex flex-col justify-start items-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
