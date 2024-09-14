import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-black">
      <div className=" text-lg xl:text-xl   rounded-t-3xl -mt-4 max-w-screen-xl m-auto flex flex-wrap space-x-5 px-5 justify-evenly  ">
        <div className="flex gap-5  sm:gap-20 pt-10">
          <Link to="/">
            <img src="/logo.jpg" className="w-20 h-16"></img>
          </Link>
          <p className="text-gray-300 text-3xl font-medium">
            N°1 de la rénovation énergétique en ligne
          </p>
        </div>
        <div className="-mt-4 max-w-screen-xl m-auto flex flex-wrap space-x-5 px-5 justify-evenly">
          <div className="flex flex-col space-y-4 pt-10 w-64">
            <h4 className="text-white  font-medium text-xl   px-2">
              {" "}
              Suivez nous{" "}
            </h4>
            <div className="flex gap-2">
              <Link>
                <img
                  className="w-10 h-10 text-white"
                  src="/instagram.png"
                ></img>
              </Link>
              <Link>
                <img className="w-10 h-10" src="/facebook.png"></img>
              </Link>
              <Link>
                <img className="w-10 h-10" src="/linkedin.png"></img>
              </Link>
            </div>
            <div className="pt-3">
              <h4 className="text-xl font-bold text-white">Un Projet?</h4>
              <Link to="/simulation">
                <button className="font-medium mt-2 px-4 py-3 rounded-xl bg-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all duration-300">
                  Demander un devis
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <Link className="text-xl font-medium text-white">Nos guides</Link>
            <Link to="/">Les chaudières bois</Link>
            <Link to="/simulation">MaPrimeRenov'</Link>
            <Link to="/">Rénovation globale</Link>
            <Link to="/">Prix de l'énergie</Link>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <Link className="text-xl font-medium text-white">L'isolation</Link>
            <Link to="/simulation">Isolation des combles</Link>
            <Link to="/">Isolation des murs</Link>
            <Link to="/">Isolation du sol</Link>
            <Link to="/">Isolation du toit</Link>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <Link to="/" className="text-xl text-white font-medium">
              Le chauffage
            </Link>
            <Link to="/">Chauffage au gaz</Link>
            <Link to="/">Chauffage au bois</Link>
            <Link to="/">Chauffage solaire</Link>
            <Link to="/">Chauffage électrique</Link>
            <Link to="/">Pompe à chaleur</Link>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <Link to="/" className="text-xl text-white font-medium">
              L'énergie solaire
            </Link>
            <Link to="/">Panneaux photovoltaïques</Link>
            <Link to="/">Panneaux thermiques</Link>
            <Link to="/">Panneaux hybrides</Link>
            <Link to="/">Chauffe-eau solaire</Link>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <Link to="/" className="text-xl text-white font-medium">
              La ventilation
            </Link>
            <Link to="/">VMC double flux</Link>
            <Link to="/">VMC simple flux</Link>
            <Link to="/">Ventilation naturelle</Link>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <Link to="/" className="text-xl text-white font-medium">
              Qui sommes-nous
            </Link>
            <Link to="/">Nous connaître</Link>
            <Link to="/">Notre mission</Link>
            <Link to="/">Nos engagements</Link>
            <Link to="/">Notre équipe</Link>
            <Link to="/">Ils parlent de nous</Link>
            <Link to="/">Nous rejoindre !</Link>
          </div>
        </div>
        <div className=" flex flex-wrap gap-4 text-center text-gray-300 py-6">
          <Link to="/">Mentions légales</Link>
          <Link to="/">CG Partenaires</Link>
          <Link to="/">CGV</Link>
          <Link to="/">CGU</Link>
          <Link to="/"> Vie Privée</Link>
          <Link to="/">Politique des cookies</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
