import React, { useState } from "react";

import { Search, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ handleSearch }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();

    if (input.trim()) {
      handleSearch(input.trim());
      navigate(`search/${input}`);
      setInput("");
    }
  };

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-gray-950/90 backdrop-blur-md
        shadow-xl shadow-black/40
        border-b border-blue-900/50
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-3 sm:px-5 md:px-6 lg:px-8 xl:px-10
        "
      >
        <div
          className="
            flex items-center justify-between

            h-14 sm:h-16 md:h-18 lg:h-20

            gap-2 sm:gap-4
          "
        >
          {/* Logo */}
          <Link
            to="/"
            className="
              flex items-center
              text-lg sm:text-xl md:text-2xl lg:text-3xl
              font-black text-white
              hover:text-blue-400
              transition duration-300
              tracking-wide sm:tracking-widest
              whitespace-nowrap
            "
          >
            <Zap
              className="
                w-5 h-5
                sm:w-6 sm:h-6
                md:w-7 md:h-7
                mr-1 sm:mr-2
                text-yellow-400 fill-yellow-400/20
              "
            />

            <span className="text-blue-400">Pro</span>Chef
          </Link>

          {/* Desktop / Tablet Search */}
          <form
            onSubmit={searchHandler}
            className="
              hidden sm:flex
              flex-1
              max-w-md md:max-w-lg lg:max-w-xl
              mx-2 sm:mx-4
            "
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search recipes..."
              className="
                w-full

                px-3 sm:px-4 md:px-5
                py-1.5 sm:py-2 md:py-2.5

                text-sm sm:text-base

                border border-gray-700
                bg-gray-900 text-gray-50

                rounded-l-full

                focus:outline-none
                focus:ring-2 sm:focus:ring-4
                focus:ring-blue-600/50

                transition

                placeholder-gray-500
              "
            />

            <button
              type="submit"
              className="
                bg-gradient-to-r
                from-blue-600 to-cyan-500

                px-3 sm:px-4 md:px-5

                rounded-r-full

                hover:from-blue-700
                hover:to-cyan-600

                transition duration-300

                flex items-center justify-center
              "
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </form>

          {/* Mobile Search Icon */}
          <button
            onClick={() => navigate("/search")}
            className="
              sm:hidden

              p-2

              bg-gray-800
              rounded-full

              hover:bg-gray-700

              transition
            "
          >
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
