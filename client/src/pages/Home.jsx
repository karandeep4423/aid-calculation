import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <section
        className="relative h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url('/bg-earth.jpg')` }} // Image from the public folder
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-5xl px-2 text-center font-bold mb-4">
            Redécouvrons l'énergie au meilleur prix
          </h1>
          <p className="text-lg">Néogies votre courtier en énergie.</p>
          <button className="mt-6 px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </section>
      {/* Second section */}
      <div className="flex flex-col justify-center items-center mx-4 pt-10">
        <h2 className="font-bold text-4xl text-center">
          Qu'est-ce que vous voulez faire?
        </h2>
        <p className="text-xl text-center">Complètement dématérialisée.</p>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            className="rounded-3xl p-5 m-5 flex flex-col items-center shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
            to="/simulation"
          >
            <img className="w-16 h-16" src="/assets/maison.png"></img>
            <h3 className="text-2xl text-center font-bold">Isoler ma maison</h3>
          </Link>
          <Link
            className="rounded-3xl p-5 m-5 flex flex-col items-center shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
            to="/simulation"
          >
            <img
              className="w-16 h-16"
              src="/assets/Système-solaire-combiné.png"
            ></img>
            <h3 className="text-2xl text-center font-bold">
              Passer au solaire
            </h3>
          </Link>
          <Link
            className="rounded-3xl p-5 m-5 justify-center flex flex-col items-center shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
            to="/simulation"
          >
            <img className="w-16 h-16" src="/assets/calculate-aid.png"></img>
            <h3 className="text-2xl text-center font-bold">
              Calculer prime & aides
            </h3>
          </Link>
          <Link
            className="rounded-3xl p-5 m-5 flex flex-col items-center shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
            to="/simulation"
          >
            <img
              className="w-16 h-16"
              src="/assets/Poêle-à-bûches-ou-granulés.png"
            ></img>
            <h3 className="text-2xl text-center font-bold">
              Changer mon chauffage
            </h3>
          </Link>
        </div>
      </div>
      <div className="bg-gray-300 rounded-3xl m-auto w-fit h-fit p-5 mt-10 ">
        <p className="text-xl text-center font-semibold text-slate-600">
          Ils nous font confiance :
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-center">
          <img className="w-40 h-40" src="cetelem.svg"></img>
          <img className="w-40 h-40" src="leclerc.svg"></img>
          <img className="w-40 h-40" src="airbnb.svg"></img>
          <img className="w-40 h-40" src="manomano.svg"></img>
        </div>
      </div>
      {/* Third section */}
      <div className="flex flex-col justify-center items-center mx-4 py-10">
        <h2 className="font-bold text-4xl text-center">
          Une démarche en 5 étapes !
        </h2>
        <p className="text-xl text-center">Complètement dématérialisée.</p>
        {/* First row: steps 1 to 4 */}
        <div className="grid gap-5  sm:grid-cols-2 md:grid-cols-3 justify-center items-center ">
          {/* Step 1 */}
          <div className="relative text-center m-4">
            <div
              className="bg-teal-200 p-8 w-60 h-72 flex justify-center items-center"
              style={{
                clipPath: "ellipse(70% 100% at 50% 0%)",
              }}
            >
              <div>
                <div className="text-4xl font-bold mb-4">1</div>
                <p className="text-lg font-semibold">
                  Je crée mon compte et je dépose ma demande avec les devis.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative text-center m-4">
            <div
              className="bg-teal-200 p-8 w-60 h-72 flex justify-center items-center"
              style={{
                clipPath: "ellipse(70% 100% at 50% 0%)",
              }}
            >
              <div>
                <div className="text-4xl font-bold mb-4">2</div>
                <p className="text-lg font-semibold">
                  Je reçois par mail la confirmation de l’attribution de la
                  prime et de son montant prévisionnel.
                </p>
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="relative text-center m-4">
            <div
              className="bg-teal-200 p-8 w-60 h-72 flex justify-center items-center"
              style={{
                clipPath: "ellipse(70% 100% at 50% 0%)",
              }}
            >
              <div>
                <div className="text-4xl font-bold mb-4">3</div>
                <p className="text-lg font-semibold">
                  Je réalise mes travaux et réceptionne mes factures que je
                  règle à l'entreprise.
                </p>
              </div>
            </div>
          </div>
          {/* Step 4 */}
          <div className="relative text-center m-4">
            <div
              className="bg-teal-200 p-8 w-60 h-72 flex justify-center items-center"
              style={{
                clipPath: "ellipse(70% 100% at 50% 0%)",
              }}
            >
              <div>
                <div className="text-4xl font-bold mb-4">4</div>
                <p className="text-lg font-semibold">
                  Je demande le solde de ma prime en déposant mes factures dans
                  mon dossier.
                </p>
              </div>
            </div>
          </div>
          {/* Step 5 */}
          <div className="relative text-center m-4">
            <div
              className="bg-teal-200 p-8 w-60 h-72 flex justify-center items-center"
              style={{
                clipPath: "ellipse(70% 100% at 50% 0%)",
              }}
            >
              <div>
                <div className="text-4xl font-bold mb-4">5</div>
                <p className="text-lg font-semibold">
                  Je perçois le versement de ma prime définitive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
