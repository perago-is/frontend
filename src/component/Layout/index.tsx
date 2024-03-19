import React from "react";
import Sidebar from "../Sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex h-full w-full relative">
      <Sidebar />
      <div className="flex flex-col w-full relative">
        <div
          className="h-16 bg-cyan-900 w-full flex items-center 
        justify-center font-semibold text-2xl text-white z-20"
        >
          Roles Management in Tira Trading PLC
        </div>
        <main className=" bg-gray-200 flex-1 relative">
          {children}
          <img
            src="/logo1.png"
            alt="Overlay Logo"
            className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-10 pointer-events-none"
          />
        </main>
      </div>
    </div>
  );
};

export default Layout;
