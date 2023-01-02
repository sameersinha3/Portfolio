import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-black mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Sameer Sinha
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-gray-400">
            Portfolio
          </a>
          <a href="#skills" className="mr-5 hover:text-gray-400">
            Skills
          </a>
          <a href="#about" className="mr-5 hover:text-gray-400">
            About Me
          </a>
        </nav>
      </div>
    </header>
  );
}
