import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(true);

  const handleShow = () => {
    setOpen(!open);
  };

  return (
    <div className=" ">
      <nav className=" flex justify-between h-20 px-4 xl:px-0 max-w-screen-xl m-auto     ">
        <Link to="/">
          <div className="my-5 text-2xl font-medium w-fit h-fit px-2 border-4 text-center border-black">
            <h2>SOLULEC</h2>
          </div>
        </Link>
        <div className="flex items-center lg:hidden">
          <button onClick={handleShow}>
            {open ? (
              <img alt="icon" width={35} height={35} src="/menu.png"></img>
            ) : (
              <img
                alt="close icon"
                width={35}
                height={35}
                src="/close.png"
              ></img>
            )}
          </button>
        </div>
        <div
          className={`lg:space-x-6 gap-y-4 text-lg  absolute  justify-between flex flex-col items-center lg:flex-row  z-50  lg:static  lg:w-auto lg:py-0 pb-6  w-full left-0 ${
            open
              ? "hidden lg:flex "
              : "top-[64px] bg-indigo-100 md:bg-white pt-6"
          }`}
        >
          <Link onClick={handleShow} to="/">
            Home
          </Link>
          <Link onClick={handleShow} to="/simulation">
            Simulation
          </Link>
          <Link onClick={handleShow} to="/about-us">
            About us
          </Link>
          <Link onClick={handleShow} to="/contact-us">
            Contact us
          </Link>
          <div className="flex gap-4 flex-col lg:flex-row ">
            <Link to="/login">
              <button className=" font-medium px-4 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Espace client
              </button>
            </Link>
            <Link to="/simulation">
              <button className=" font-medium px-4 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Demander un devis
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
