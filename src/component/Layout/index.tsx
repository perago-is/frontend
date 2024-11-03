import React from "react";
import Sidebar from "../Sidebar";

const Layout = ({ children }: any) => {
  return (
    <section className="container mx-auto">
      <div className="flex h-full w-full relative">
        <Sidebar />
        <div className="flex flex-col w-full relative">
        <div className="h-16 w-full font-semibold text-lg text-white bg-secondary">
        <ul className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-10 mt-4 lg:mt-5">
              <li>
                <a
                  href="/"
                  className="block py-2 px-4 hover:bg-primary transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-4 hover:bg-primary transition duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-4 hover:bg-primary transition duration-200"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-4 hover:bg-primary transition duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <main className=" flex-1 relative">{children}</main>
        </div>
      </div>
    </section>
  );
};

export default Layout;
