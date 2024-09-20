import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-black">
      <div className=" text-lg xl:text-xl   rounded-t-3xl -mt-4 max-w-screen-xl m-auto flex flex-wrap space-x-5 px-5 justify-evenly  ">
        <div className="flex gap-5  sm:gap-20 pt-10">
          <div className="bg-white p-1">
          <Link to="/">
            <img src="/logo.png" className="w-32 h-9"></img>
          </Link>
          </div>
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
                <button className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium mt-2 px-6 py-3 rounded-full bg-sky-500 text-white transition-all duration-300">
                  Demander un devis
                </button>
              </Link>
            </div>
          </div>
          {/*grid columns   */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 ">
            <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
              <Link className="text-xl font-medium text-white">Nos guides</Link>
              <Link to="/">Les chaudières bois</Link>
              <Link to="/simulation">MaPrimeRenov'</Link>
              <Link to="/">Rénovation globale</Link>
              <Link to="/">Prix de l'énergie</Link>
            </div>
            <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
              <Link className="text-xl font-medium text-white">
                L'isolation
              </Link>
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
        </div>
        {/* Les sites du groupe Effy */}
        <div className="flex flex-col justify-evenly my-4  gap-5 ">
          <div className="text-white gap-2 items-center  flex flex-col sm:flex-row">
            <h4>Les sites du groupe Effy</h4>
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <Link className="flex gap-2">
                <img className="w-7 h-7" src="/assets/maison.png"></img>
                <h5>Logo Quelle Énergie</h5>
              </Link>
              <Link className="flex gap-2">
                <img className="w-7 h-7" src="/assets/maison.png"></img>
                <h5>Logo La Prime Énergie</h5>
              </Link>
              <Link className="flex gap-2">
                <img className="w-7 h-7" src="/assets/maison.png"></img>
                <h5>Logo Calculeo</h5>
              </Link>
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
      {/* Footer banner */}
      <div className="flex justify-around bg-blue-400 w-full h-fit p-4">
        <div>
          <h5 className="font-bold text-xl">Vous êtes un artisan RGE ?</h5>
          <p>
            Devenez partenaire Effy, visitez notre espace dédié aux artisans
          </p>
        </div>
        <Link to="/simulation">
          <button className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium text-xl px-6 py-3 rounded-full bg-sky-500 text-white transition-all duration-300">
            Demander un devis
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
