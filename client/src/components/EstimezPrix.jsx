import React from "react";
import { Link } from "react-router-dom";

const EstimezPrix = ({ heading, content }) => {
  return (
    <div className="bg-blue-400 w-fit	 h-fit rounded-2xl  p-5 items-center flex flex-col gap-3">
      <p className="font-bold text-2xl text-center">{heading}</p>
      <div className="bg-white rounded-2xl p-5">
        <p className="text-gray-400 text-xl text-center">
          {content}
        </p>
      </div>
      <Link to="/simulation">
        <button className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium px-4 py-3 rounded-full bg-sky-500 text-white transition-all duration-300">
          JE DÉCOUVRE MES PRIMES
        </button>
      </Link>
      <p className="text-sm">Simulation gratuite en 2 minutes</p>
    </div>
  );
};

export default EstimezPrix;

