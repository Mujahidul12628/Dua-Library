// import React from "react";

// const NavBar = () => {
//   return (
//     <header className="bg-gray-100  p-4">
//       <h1 className="text-2xl font-bold">Dua Page</h1>
//     </header>
//   );
// };

// export default NavBar;

import React from "react";
import Image from "next/image";
import { FaSearch, FaCog } from "react-icons/fa";

const NavBar = () => {
  return (
    <header className="bg-gray-100 p-4 flex justify-between items-center shadow-md">
      {/* Logo and Title */}
      <div className=" flex items-center space-x-3">
        <Image
          src="/image/handRise.png"
          alt="Dua & Ruqyah Logo"
          width={36}
          height={36}
          className="block xl:hidden rounded"
        />
        <h1 className="block xl:hidden text-lg font-semibold text-gray-700">
          Dua & Ruqyah
        </h1>
        <h1 className="hidden xl:block text-lg font-semibold text-gray-700">
          Duas Page
        </h1>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center border-2 border-gray-500 rounded-md bg-gray-100 p-2 w-64">
        <input
          type="text"
          placeholder="Search by Dua Name"
          className="bg-gray-100 flex-grow focus:outline-none text-gray-600"
        />
        <FaSearch
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
          size={18}
        />
      </div>

      <div className="flex items-center space-x-8">
        <div className="block xl:hidden">
          <FaCog
            className="text-green-600 hover:text-green-800 cursor-pointer"
            size={20}
          />
        </div>

        <div className="relative">
          <Image
            src="/image/profile.png" // Update with your profile image path
            alt="Profile"
            width={36}
            height={36}
            className="rounded-full cursor-pointer"
          />
          <div className="absolute -bottom-1 right-0 w-2.5 h-2.5 bg-green-600 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
