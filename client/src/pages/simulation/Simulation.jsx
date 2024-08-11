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
                <h3 className="bg-gray-500 rounded-full">
                  Rénovation énergétique
                </h3>
                <p>
                  Réduire ma facture d'énergie ou améliorer le confort de mon
                  logement - Rénovation énergétique.
                </p>
              </div>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">
                  Sécurité / Salubrité
                </h3>
                <p>
                  Mettre mon logement aux normes de sécurité et de salubrité -
                  Sécurité, salubrité.
                </p>
              </div>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">
                  Autonomie de la personne
                </h3>
                <p>
                  Adapter mon logement au vieillissement ou à une situation de
                  handicap - Autonomie.
                </p>
              </div>
              <image src="" />
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Vous etes?</h2>
          <div className="grid grid-cols-2">
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">
                  Propriétaire occupant
                </h3>
              </div>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">
                  Propriétaire bailleur
                </h3>
              </div>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">
                  Syndicat de copropriétaires
                </h3>
              </div>
              <image src="" />
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
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">Appartement</h3>
              </div>
              <image src="" />
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">
            Occupez vous votre logement à titre de résidence principale ou
            secondaire ?
          </h2>
          <div className="grid grid-cols-2">
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">
                  Résidence principale
                </h3>
              </div>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">
                  Résidence secondaire
                </h3>
              </div>
              <image src="" />
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Votre logement a été construit il y a:</h2>
          <div className="grid grid-cols-2">
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">Maison de 2 ans</h3>
              </div>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">Entre 2 et 15 ans</h3>
              </div>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <div>
                <h3 className="bg-gray-500 rounded-full">Plus de 15 ans</h3>
              </div>
              <image src="" />
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">
            Merci, quelle est l'addresse du logement pour votre projet?
          </h2>
          <p>Tous les champs sont obligatories</p>
          <div className="grid grid-cols-2">
            <div className=" gap-5 flex flex-col m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input placeholder="Addresse" />
              <input placeholder="Ville" />
              <input placeholder="Code postral" />
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">
            Quelle est la note DPE de votre logement?
          </h2>
          <p>
            Cette information nous permettra d'estimer plus précisement les
            aides pour votre projet.{" "}
          </p>
          <div className="grid grid-cols-4">
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <label className="font-bold text-4xl">A</label>
              <p>Etiquette A</p>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <label className="font-bold text-4xl">B</label>
              <p>Etiquette B</p>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <label className="font-bold text-4xl">C</label>
              <p>Etiquette C</p>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <label className="font-bold text-4xl">D</label>
              <p>Etiquette D</p>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <label className="font-bold text-4xl">E</label>
              <p>Etiquette E</p>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <label className="font-bold text-4xl">F</label>
              <p>Etiquette F</p>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <label className="font-bold text-4xl">G</label>
              <p>Etiquette G</p>
              <image src="" />
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" />
              <label className="font-bold text-4xl">?</label>
              <p>Je ne sais pas</p>
              <image src="" />
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Quelle est votre situation financiére?</h2>
          <p>
            Ces information vous sont demandées pour définir votre éligibilité
            aux aides France Rénov
          </p>
          <div className="grid grid-cols-1">
            <div className=" gap-5 flex flex-col m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <label>Revenu fiscal de référence du foyer :*</label>
              <p>Saisissez votre revenu fiscal de référence du foyer</p>
              <input placeholder="Addresse" />
              <label>Nombre de personnes composant le foyer :*</label>
              <p>Saisissez le nombre de personnes composant le foyer</p>
              <input placeholder="Ville" />
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <div className="grid grid-cols-1">
            <div className=" gap-5 flex flex-col m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <label>
                Quel est le nombre de logements constituant votre copropriété ?
              </label>
              <input placeholder="Addresse" />
              <label>
                Quel est le nombre de logements dédiés à l’usage de l’habitation
                principale ?
              </label>
              <input placeholder="Ville" />
              <div>
                <label>
                  La copropriété est immatriculée et à jour annuellement au
                  registre national des copropriétés
                </label>
                <input type="radio" />
                <label>Oui</label>
                <input type="radio" />
                <label>No</label>
              </div>
              <div>
                <label>
                  Le taux d’impayés par rapport au budget de l’année N-2 est
                  supérieur à 8%
                </label>
                <input type="radio" />
                <label>Oui</label>
                <input type="radio" />
                <label>No</label>
              </div>
              <div>
                <label>
                  La copropriété est-elle située dans un quartier NPNRU*
                </label>
                <label>
                  : Nouveau Programme National de Renouvellement Urbain
                </label>
                <input type="radio" />
                <label>Oui</label>
                <input type="radio" />
                <label>No</label>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Vous etes?</h2>
          <div className="grid grid-cols-1 gap-2">
            <div>
              <input type="radio" />
              <label>
                Je m'engage à louer votre logement à des locataires aux revenus
                modestes (pas un membre de ma famille ou de mon foyer fiscal)
              </label>
            </div>
            <div>
              <input type="radio" />
              <label>
                Je suis prêt à louer mon bien avec un niveau de loyer plafonné
              </label>
            </div>
            <div>
              <input type="radio" />
              <label>
                Mon logement sera loué à usage de résidence principal de
                locataire
              </label>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">
            L'un des membres de votre foyer correspond-il aux critères suivantes
            ?*
          </h2>
          <p>Plusieurs réponses possibles</p>
          <div className="grid grid-cols-1 gap-2">
            <div>
              <input type="radio" />
              <label>
                Ågé de 60 à 69 ans sur conditions de GIR (groupe iso-ressources
                de 1 à 6)
              </label>
            </div>
            <div>
              <input type="radio" />
              <label>Ågé de 70 ans ou plus</label>
            </div>
            <div>
              <input type="radio" />
              <label>
                A un taux d'incapacité égal ou supérieur à 50% ou bénéficie de
                la Prestation de Compensation du Handicap (PCH)
              </label>
            </div>
            <div>
              <input type="radio" />
              <label>Aucune de ces situations</label>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Isolation?</h2>
          <div className="grid grid-cols-2">
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" value="isolation des combles" id="isolation des combles" />
              <label htmlFor="isolation des combles">
                <h3 className="bg-gray-500 rounded-full">Isolation des combles</h3>
                <img src="/maison.png" />
              </label>
            </div>
            <div className="flex flex-row m-10 p-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <input type="radio" value="Isolation des murs" id="Isolation des murs" />
              <label htmlFor="Isolation des murs">
                <h3 className="bg-gray-500 rounded-full">Isolation des combles</h3>
                <img src="/maison.png" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
