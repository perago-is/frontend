import React from "react";

const NavBar = () => {
  return (
    <nav className=" flex flex-row justify-between bg-cyan-800 px-8 py-3 background-blend-mode: screen text-white">
      <img src="/log1.png" alt="Logo" width={100} height={100} />
      <div className="text-opacity-45 p-2 text-5xl font-extrabold text-white">
        TIRA Trading PLC
      </div>
      <img src="/logo.png" alt="Logo" width={100} height={100} />
    </nav>
  );
};

export default NavBar;
