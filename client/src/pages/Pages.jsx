import React from "react";
import { useParams } from "react-router-dom";
import EstimezPrix from "../components/EstimezPrix";
import pagesData from "../services/pagesData";

const Pages = () => {
  const { param } = useParams();
  console.log("name", pagesData);
  console.log("param", param);

  return (
    <div>
      {pagesData.map((name, i) => {
        // Make sure to return the JSX inside map
        return (
          <div key={i}>
            {name.page.toLowerCase() === param.toLowerCase() && (
              <div className="flex m-10 gap-5">
                <div className=" gap-10 flex flex-col items-center justify-center">
                  <h1 className="text-4xl text-gray-800 font-extrabold">
                    {name.h1}
                  </h1>
                  <img className="w-56 h-56" src={name.image} alt={name.h1} />
                  <p>{name.content}</p>
                </div>
                {/* Ensure sideBox exists and pass props correctly */}
                {name.sideBox && (
                  <EstimezPrix
                  className=""
                    heading={name.sideBox.heading}
                    content={name.sideBox.content}
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Pages;
