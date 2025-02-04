import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const items = [
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-red-500" : "text-gray-700"
      }
      key={`/`}
      to={`/`}
    >
      Home
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-red-500" : "text-gray-700"
      }
      key={`/allVisa`}
      to={`/allVisa`}
    >
      All Visa
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-red-500" : "text-gray-700"
      }
      key={`/addVisa`}
      to={`/addVisa`}
    >
      Add Visa
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-red-500" : "text-gray-700"
      }
      key={`/addedVisas`}
      to={`/addedVisas`}
    >
      My Added Visas
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-red-500" : "text-gray-700"
      }
      key={`/visaApplications`}
      to={`/visaApplications`}
    >
      My Visa Applications
    </NavLink>,
  ];

  return (
    <div className="container mx-auto">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center gap-14 my-4 text-black font-semibold">
        <div className="flex gap-14">
          <Link to={`/`}>
            <img
              src="https://evisa.xpressbuddy.com/wp-content/uploads/2023/12/logo.svg"
              alt=""
            />
          </Link>
          <ul className="flex items-center gap-8 text-lg">
            {items.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="text-lg">Login</button>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="lg:hidden flex p-4 relative text-[#499DEC]">
        <Link to={`/`}>
          <img src="https://evisa.xpressbuddy.com/wp-content/uploads/2023/12/logo.svg" alt="" />
        </Link>
        <div className="relative justify-end">
          {/* Menu Button (Hamburger or Close Icon) */}
          <div
            className="cursor-pointer text-black text-4xl font-semibold fixed top-4 right-4 z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <IoCloseSharp className="w-10 h-10" />
            ) : (
              <GiHamburgerMenu className="w-10 h-10" />
            )}
          </div>

          {/* Sidebar */}
          <ul
            className={`bg-[#499DEC] text-white text-xl font-semibold pl-8 fixed top-0 h-full w-[30%] py-4 transition-all duration-700 ${
              open ? "right-0" : "-right-[520px]"
            } z-40`}
          >
            {items.map((item, index) => (
              <li key={index} className="hover:text-gray-200 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
