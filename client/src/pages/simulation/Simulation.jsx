import React from "react";

const Simulation = () => {
  return (
    <div>
      <div className="max-w-screen-md m-auto w-full my-10 ">
        <h1 className="font-bold text-xl">
          Réalisons ensemble votre devis assurance habitation sur mesure en
          quelques minutes. C’est parti !
        </h1>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold"> Quel est votre besoin?</h2>
          <p>
            Si le besoin est multiple alors il faudra réaliser 2 simulations.
            Avant de vous lancer dans des projets de travaux de rénovation,
            contactez le conseiller France Rénov’ le plus proche de chez vous et
            profitez gratuitement de ses conseils personnalisés pour mener à
            bien votre projet.
          </p>
          <div className="grid grid-cols-2">
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">Rénovation énergétique</h3>
                <p>
                  Réduire ma facture d'énergie ou améliorer le confort de mon
                  logement - Rénovation énergétique.
                </p>
              </div>
              <image src=""/>
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">Sécurité / Salubrité</h3>
                <p>
                Mettre mon logement aux normes de sécurité et de salubrité - Sécurité, salubrité.
                </p>
              </div>
              <image src=""/>
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">Autonomie de la personne</h3>
                <p>
                Adapter mon logement au vieillissement ou à une situation de handicap - Autonomie.
                </p>
              </div>
              <image src=""/>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Vous etes?</h2>
          <div className="grid grid-cols-2">
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">Propriétaire occupant</h3>
              </div>
              <image src=""/>
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">Propriétaire bailleur</h3>
              </div>
              <image src=""/>
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">Syndicat de copropriétaires</h3>
              </div>
              <image src=""/>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Avez-vous une maison ou un appartement?</h2>
          <div className="grid grid-cols-2">
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">Maison</h3>
              </div>
              <image src=""/>
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">Appartement</h3>
              </div>
              <image src=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
