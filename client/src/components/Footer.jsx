import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="bg-black text-lg xl:text-xl   rounded-t-3xl  ">
        <div className="-mt-4 max-w-screen-xl m-auto flex flex-wrap space-x-5 px-5 justify-evenly">
          <div className="flex flex-col space-y-4 pt-10 w-64">
            <h2 className="text-white font-medium text-xl border-4 border-white w-fit px-1">
              {" "}
              Aid Calculation
            </h2>
            <p className="text-gray-300 font-medium">
              Notre objectif : vous aider à retrouver un confort thermique
              optimal grâce à des solutions énergétiques efficaces et durables.
            </p>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-medium text-white">Navigation</h2>
            <Link to="/">Home</Link>
            <Link to="/simulation">Simulation</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/contact-us">Contactez nous</Link>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-medium text-white">Services</h2>
            <Link to="/simulation">Simulation</Link>
            <Link to="/">Aid calculation</Link>
            {/* <Link to="/choose-your-lesson#buy-hours">Buy Hours Pack</Link>
            <Link to="/choose-your-lesson#subscription">Get Subscription</Link> */}
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <h2 className="text-xl text-white font-medium">Contactez nous</h2>
            <p>Paris, France</p>
            <a to="mailto:bachiwind3@gmail.com">aidcalculation@gmail.com</a>
            <a to="tel:+918727989814">+33602528775</a>
          </div>
        </div>
        <p className="text-center text-gray-300 py-6">
          Copyright ©2024 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
