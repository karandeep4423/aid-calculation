import React, { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [value, setValue] = useState("Changer mon chauffage");

  const ValueFun = (value) => {
    setValue(value);
  };

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
          <button className="mt-6 px-8 py-3bg-sky-500 text-white font-semibold rounded-lg hover:bg-blue-700">
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
      {/* Third Section */}
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
      {/* Fourth section */}
      <div className="flex flex-col justify-center items-center mx-4 py-10">
        <h2 className="font-bold text-4xl text-center">
          Vous voulez faire des économies d'énergie ?
        </h2>
        <p className="text-xl text-center">
          Nos travaux pour répondre à vos besoins :
        </p>
        {/* Top navigation section */}
        <div className="flex justify-center my-5">
          <button
            onClick={() => ValueFun("Changer mon chauffage")}
            className={
              value == "Changer mon chauffage"
                ? "bg-orange-200   text-orange-700 text-xl font-bold px-5 py-8 shadow-md flex flex-col sm:flex-row items-center space-x-2"
                : " text-orange-700 text-xl font-bold px-5 py-8 shadow-md flex flex-col sm:flex-row items-center space-x-2"
            }
          >
            <img
              className="w-10 h-10"
              src="/assets/Poêle-à-bûches-ou-granulés.png"
              alt="Heating Icon"
            />
            <span>Changer mon chauffage</span>
          </button>
          <button
            onClick={() => ValueFun("Isoler ma maison")}
            className={
              value == "Isoler ma maison"
                ? "bg-green-200  text-green-700 text-xl font-bold px-5 py-8 shadow-md flex flex-col sm:flex-row items-center space-x-2"
                : " text-orange-700 text-xl font-bold px-5 py-8 shadow-md flex flex-col sm:flex-row items-center space-x-2"
            }
          >
            <img
              className="w-10 h-10"
              src="/assets/maison.png"
              alt="Insulation Icon"
            />
            <span>Isoler ma maison</span>
          </button>
          <button
            onClick={() => ValueFun("Passer au solaire")}
            className={
              value == "Passer au solaire"
                ? "bg-blue-200  text-blue-700 text-xl font-bold px-5 py-8 shadow-md flex flex-col sm:flex-row items-center space-x-2"
                : " text-orange-700 text-xl font-bold px-5 py-8 shadow-md flex flex-col sm:flex-row items-center space-x-2"
            }
          >
            <img
              className="w-10 h-10"
              src="/assets/Système-solaire-combiné.png"
              alt="Solar Icon"
            />
            <span>Passer au solaire</span>
          </button>
        </div>

        {/* Cards section pour Changer mon chauffage */}
        <div
          className={
            value == "Changer mon chauffage"
              ? "mx-10 md:mx-44 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-screen-lg "
              : "hidden"
          }
        >
          {/* Pompe à chaleur card */}
          <div className="p-3 rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
            <img
              className="w-full h-48 rounded-lg object-cover mb-4"
              src="/assets/changer.webp"
              alt="Pompe à chaleur"
            />
            <h2 className="w-full p-2 text-center text-orange-600 bg-orange-200 font-semibold">
              Jusqu'à 1000€ d'économies par an
            </h2>
            <h3 className="text-xl font-bold text-center mt-2 mb-4">
              Pompe à chaleur
            </h3>
            <ul className="text-gray-600 pl-6  mb-4">
              <li>• Chaleur douce et homogène</li>
              <li>• Énergie renouvelable</li>
            </ul>
            <div className="flex justify-center">
              <button className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg">
                J'installe une PAC
              </button>
            </div>
          </div>
          {/*Isolation des combles card */}
          <div className="p-3 rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
            <img
              className="w-full h-48 rounded-lg object-cover mb-4"
              src="/assets/changer.webp"
              alt="Pompe à chaleur"
            />
            <h2 className="w-full text-center p-2 bg-gray-200  font-semibold">
              Jusqu'à 30% d'économies d'énergie
            </h2>
            <h3 className="text-xl font-bold text-center mt-2 mb-4">
              Chaudière à Gaz
            </h3>
            <ul className="text-gray-600 pl-6  mb-4">
              <li>• Simple à installer et à entretenir</li>
              <li>• Chaleur douce et homogène</li>
            </ul>
            <div className="flex justify-center">
              <button className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg">
                J'installe une PAC
              </button>
            </div>
          </div>
          {/* Chauffage d’appoint */}
          <div className="p-3 rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
            <img
              className="w-full h-48 rounded-lg object-cover mb-4"
              src="/assets/changer.webp"
              alt="Pompe à chaleur"
            />
            <h2 className="w-full text-center p-2 bg-gray-200  font-semibold">
              Jusqu’à 3 800€ d’aides
            </h2>
            <h3 className="text-xl font-bold text-center mt-2 mb-4">
              Chauffage d’appoint
            </h3>
            <p className="text-gray-600 pl-6  mb-4">
              Gagnez en confort en installant un poêle à bûches, à granulés ou
              un insert cheminée.
            </p>
            <div className="flex justify-center">
              <button className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg">
                Je chosis mon Chauffage
              </button>
            </div>
          </div>
          {/* Chauffe-eau thermodynamique*/}
          <div className="p-3 rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
            <img
              className="w-full h-48 rounded-lg object-cover mb-4"
              src="/assets/changer.webp"
              alt="Pompe à chaleur"
            />
            <h2 className="w-full text-center p-2 bg-gray-200  font-semibold">
              Des factures divisées par trois
            </h2>
            <h3 className="text-xl font-bold text-center mt-2 mb-4">
              Chauffe-eau thermodynamique
            </h3>
            <ul className="text-gray-600 pl-6  mb-4">
              <li>• Réactivité sur l’eau chaude</li>
              <li>•Energie renouvelable</li>
            </ul>
            <div className="flex justify-center">
              <button className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg">
                J'installe un Chauffe-eau
              </button>
            </div>
          </div>
        </div>
        {/* Cards section pour Isoler ma maison */}
        <div
          className={
            value == "Isoler ma maison"
              ? "mx-10 md:mx-44 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-screen-lg "
              : "hidden"
          }
        >
          {/* Isolation des murs */}
          <div className="p-3 rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
            <img
              className="w-full h-48 rounded-lg object-cover mb-4"
              src="/assets/changer.webp"
              alt="Pompe à chaleur"
            />
            <h2 className="w-full p-2 text-center text-green-600 bg-green-200 font-semibold">
              Jusqu'à 25% d'économies d'énergie
            </h2>
            <h3 className="text-xl font-bold text-center mt-2 mb-4">
              Isolation des murs
            </h3>
            <p className="text-gray-600 pl-6  mb-4">
              Votre maison est plus belle et gagne en valeur.
            </p>
            <div className="flex justify-center">
              <button className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg">
                J'isole mes murs
              </button>
            </div>
          </div>
          {/* Isolation des combles*/}
          <div className="p-3 rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
            <img
              className="w-full h-48 rounded-lg object-cover mb-4"
              src="/assets/changer.webp"
              alt="Pompe à chaleur"
            />
            <h2 className="w-full text-center p-2 bg-gray-200  font-semibold">
              Jusqu'à 500€ d'économies par an
            </h2>
            <h3 className="text-xl font-bold text-center mt-2 mb-4">
              Isolation des combles
            </h3>
            <p className="text-gray-600 pl-6  mb-4">
              Plus de confort chez vous, été comme hiver.
            </p>
            <div className="flex justify-center">
              <button className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg">
                J'isole mes combles
              </button>
            </div>
          </div>
          {/* Isolation des sous-sols */}
          <div className="p-3 rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
            <img
              className="w-full h-48 rounded-lg object-cover mb-4"
              src="/assets/changer.webp"
              alt="Pompe à chaleur"
            />
            <h2 className="w-full text-center p-2 bg-gray-200  font-semibold">
              Jusqu'à 10% d'économies d'énergie
            </h2>
            <h3 className="text-xl font-bold text-center mt-2 mb-4">
              Isolation des sous-sols
            </h3>
            <p className="text-gray-600 pl-6  mb-4">
              Une température homogène du sol au plafond : fini les pieds froids
              !
            </p>
            <div className="flex justify-center">
              <button className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg">
                J'isole mes planchers bas
              </button>
            </div>
          </div>
          {/* Passez au double vitrage*/}
          <div className="p-3 rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
            <img
              className="w-full h-48 rounded-lg object-cover mb-4"
              src="/assets/changer.webp"
              alt="Pompe à chaleur"
            />
            <h2 className="w-full text-center p-2 bg-gray-200  font-semibold">
              Jusqu'à 255€ d'économies par an
            </h2>
            <h3 className="text-xl font-bold text-center mt-2 mb-4">
              Passez au double vitrage
            </h3>
            <p className="text-gray-600 pl-6  mb-4">
              Réduisez vos factures et protégez-vous du bruit.
            </p>
            <div className="flex justify-center">
              <button className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg">
                Je passe au double vitrage
              </button>
            </div>
          </div>
        </div>
        {/* Cards section pour Passer au solaire */}
        <div
          className={
            value == "Passer au solaire"
              ? "mx-10 md:mx-44 max-w-screen-lg flex items-center justify-center "
              : "hidden"
          }
        >
          {/* Panneaux solaires */}
          <div className="lg:w-1/2 p-3 rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
            <img
              className="w-full h-48 rounded-lg object-cover mb-4"
              src="/assets/changer.webp"
              alt="Pompe à chaleur"
            />
            <h2 className="w-full p-2 text-center text-blue-600 bg-blue-200 font-semibold">
              Jusqu'à 1 400€ d'économies par an
            </h2>
            <h3 className="text-xl font-bold text-center mt-2 mb-4">
              Panneaux solaires
            </h3>
            <p className="text-gray-600 pl-6  mb-4">
              En installant des panneaux photovoltaïques sur votre toiture, vous
              :
            </p>
            <ul className="text-gray-600 pl-6  mb-4">
              <li>• Chaleur douce et homogène</li>
              <li>• Énergie renouvelable</li>
            </ul>
            <p>
              Pensez au solaire hybride ! Une offre 2 en 1 pour produire votre
              électricité et votre eau chaude et économiser jusqu'à 80% sur
              votre facture.
            </p>
            <div className="flex justify-center">
              <button className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg">
                J'isole mes murs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
