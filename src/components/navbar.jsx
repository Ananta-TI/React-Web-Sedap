import { IoWallet } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ListMenu from "./ListMenu";
import Logo from "./logo";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 
      bg-white/40 dark:bg-gray-900/40 backdrop-blur-md shadow-lg text-black dark:text-white transition duration-300">
      <Logo />
      <div className="hidden md:flex items-center space-x-6">
        <ListMenu />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
        </div>
        <div className="space-x-2">
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md font-semibold">
            <a href="/login">Login</a>
          </button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md font-semibold">
            <a href="/register">Register</a>
          </button>
        </div>
        <button onClick={toggleDarkMode} className="text-xl focus:outline-none">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
