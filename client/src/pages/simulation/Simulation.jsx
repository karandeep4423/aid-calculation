import React from "react";
import RegisterForm from "../../components/auth/RegisterForm";
const Simulation = () => {
  return (
    <div>
      <div className="max-w-screen-md m-auto w-full my-10 ">
        <h1 className="font-bold text-xl">
          Réalisons ensemble votre devis assurance habitation sur mesure en
          quelques minutes. C’est parti !
        </h1>
        <div className="my-10 p-5 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold"> Quel est votre besoin?</h2>
          <p>
            Si le besoin est multiple alors il faudra réaliser 2 simulations.
            Avant de vous lancer dans des projets de travaux de rénovation,
            contactez le conseiller France Rénov’ le plus proche de chez vous et
            profitez gratuitement de ses conseils personnalisés pour mener à
            bien votre projet.
          </p>
          <div className="grid grid-cols-2">
            <div className="p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Rénovation énergétique"
                    name="options"
                    type="radio"
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Rénovation énergétique
                  </h3>
                </div>
                <p>
                  Réduire ma facture d'énergie ou améliorer le confort de mon
                  logement - Rénovation énergétique.
                </p>
                <img className="w-24 h-24" src="/maison.png" />
              </label>
            </div>
            <div className="p-5 m-5 shadow-[inset_-12px_-8px_40px_#46464620]">
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value=" Sécurité / Salubrité"
                    name="options"
                    type="radio"
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Sécurité / Salubrité
                  </h3>
                </div>
                <p>
                  Mettre mon logement aux normes de sécurité et de salubrité -
                  Sécurité, salubrité.
                </p>
                <img className="w-24 h-24" src="/maison.png" />
              </label>
            </div>
            <div className="p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Autonomie de la personne"
                    name="options"
                    type="radio"
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Autonomie de la personne
                  </h3>
                </div>
                <p>
                  Adapter mon logement au vieillissement ou à une situation de
                  handicap - Autonomie.
                </p>
                <img className="w-24 h-24" src="/maison.png" />
              </label>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Vous etes?</h2>
          <div className="grid grid-cols-2">
            <div className="p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Propriétaire occupant"
                    name="options"
                    type="radio"
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Propriétaire occupant
                  </h3>
                </div>
                <img className="w-24 h-24" src="/maison.png" />
              </label>
            </div>
            <div className="p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Propriétaire bailleur"
                    name="options"
                    type="radio"
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Propriétaire bailleur
                  </h3>
                </div>
                <img className="w-24 h-24" src="/maison.png" />
              </label>
            </div>
            <div className="p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Syndicat de copropriétaires"
                    name="options"
                    type="radio"
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Syndicat de copropriétaires
                  </h3>
                </div>
                <img className="w-24 h-24" src="/maison.png" />
              </label>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Avez-vous une maison ou un appartement?</h2>
          <div className="grid grid-cols-2">
            <div className=" p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6 "
                    value="Maison"
                    name="options"
                    type="radio"
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Maison
                  </h3>
                </div>
                <img className="w-24 h-24" src="/maison.png" />
              </label>
            </div>
            <div className=" p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Appartement"
                    name="options"
                    type="radio"
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Appartement
                  </h3>
                </div>
                <img className="w-24 h-24" src="/maison.png" />
              </label>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">
            Occupez vous votre logement à titre de résidence principale ou
            secondaire ?
          </h2>
          <div className="grid grid-cols-2">
            <div className=" p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6 "
                    value="Résidence principale"
                    name="options"
                    type="radio"
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Résidence principale
                  </h3>
                </div>
                <img className="w-24 h-24" src="/maison.png" />
              </label>
            </div>
            <div className=" p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Résidence secondaire"
                    name="options"
                    type="radio"
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Résidence secondaire
                  </h3>
                </div>
                <img className="w-24 h-24" src="/maison.png" />
              </label>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Votre logement a été construit il y a:</h2>
          <div className="grid grid-cols-2">
            <div className=" p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6 "
                    value="Maison de 2 ans"
                    name="options"
                    type="radio"
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Maison de 2 ans
                  </h3>
                </div>
                <img className="w-24 h-24" src="/maison.png" />
              </label>
            </div>
            <div className=" p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6 "
                    value="Entre 2 et 15 ans"
                    name="options"
                    type="radio"
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Entre 2 et 15 ans
                  </h3>
                </div>
                <img className="w-24 h-24" src="/maison.png" />
              </label>
            </div>
            <div className=" p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6 "
                    value="Plus de 15 ans"
                    name="options"
                    type="radio"
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Plus de 15 ans
                  </h3>
                </div>
                <img className="w-24 h-24" src="/maison.png" />
              </label>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <h2 className="font-bold">
            Merci, quelle est l'addresse du logement pour votre projet?
          </h2>
          <p>Tous les champs sont obligatories</p>
          <div className="w-full mt-2 gap-5 flex flex-col  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <input
              className="border-2 p-2 rounded-md border-gray-500"
              placeholder="Addresse"
            />
            <input
              className="border-2 p-2 rounded-md border-gray-500"
              placeholder="Ville"
            />
            <input
              className="border-2 p-2 rounded-md border-gray-500"
              placeholder="Code postral"
            />
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
            <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="w-6 h-6 "
                value="Etiquette A"
                name="options"
                type="radio"
              />
              <p className="font-bold text-white p-2 rounded-md text-center bg-green-600 text-4xl">
                A
              </p>
              <p>Etiquette A</p>
            </label>
            <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="w-6 h-6 "
                value="Etiquette B"
                name="options"
                type="radio"
              />
              <p className="font-bold text-white p-2 rounded-md text-center bg-green-400 text-4xl">
                B
              </p>
              <p>Etiquette B</p>
            </label>
            <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="w-6 h-6 "
                value="Etiquette C"
                name="options"
                type="radio"
              />
              <p className="font-bold text-white p-2 rounded-md text-center bg-green-300 text-4xl">
                C
              </p>
              <p>Etiquette C</p>
            </label>
            <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="w-6 h-6 "
                value="Etiquette D"
                name="options"
                type="radio"
              />
              <p className="font-bold text-white p-2 rounded-md text-center bg-yellow-300	 text-4xl">
                D
              </p>
              <p>Etiquette D</p>
            </label>
            <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="w-6 h-6 "
                value="Etiquette E"
                name="options"
                type="radio"
              />
              <p className="font-bold text-white p-2 rounded-md text-center bg-amber-300	 text-4xl">
                E
              </p>
              <p>Etiquette E</p>
            </label>
            <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="w-6 h-6 "
                value="Etiquette F"
                name="options"
                type="radio"
              />
              <p className="font-bold text-white p-2 rounded-md text-center bg-orange-400	 text-4xl">
                F
              </p>
              <p>Etiquette F</p>
            </label>
            <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="w-6 h-6 "
                value="Etiquette G"
                name="options"
                type="radio"
              />
              <p className="font-bold text-white p-2 rounded-md text-center bg-red-500 text-4xl">
                G
              </p>
              <p>Etiquette G</p>
            </label>
            <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="w-6 h-6 "
                value="Je ne sais pas"
                name="options"
                type="radio"
              />
              <p className="font-bold text-white p-2 rounded-md text-center bg-blue-500 text-4xl">
                ?
              </p>
              <p>Je ne sais pas</p>
            </label>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Quelle est votre situation financiére?</h2>
          <p>
            Ces information vous sont demandées pour définir votre éligibilité
            aux aides France Rénov
          </p>
          <div className="grid grid-cols-1">
            <div className=" gap-5 flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <div>
                <label>Revenu fiscal de référence du foyer :*</label>
                <p className="text-xs">
                  Saisissez votre revenu fiscal de référence du foyer
                </p>
              </div>
              <input
                className="border-2 p-2 rounded-md border-gray-500"
                placeholder="Addresse"
              />{" "}
              <div>
                <label>Nombre de personnes composant le foyer :*</label>
                <p className="text-xs">
                  Saisissez le nombre de personnes composant le foyer
                </p>
              </div>
              <input
                className="border-2 p-2 rounded-md border-gray-500"
                placeholder="ville"
              />{" "}
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <div className="grid grid-cols-1">
            <div className=" gap-5 flex flex-col m-10 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <label>
                Quel est le nombre de logements constituant votre copropriété ?
              </label>
              <input
                className="border-2 p-2 rounded-md border-gray-500"
                type="number"
              />
              <label>
                Quel est le nombre de logements dédiés à l’usage de l’habitation
                principale ?
              </label>
              <input
                className="border-2 p-2 rounded-md border-gray-500"
                type="number"
              />
              <div className="flex flex-col gap-2">
                <p>
                  La copropriété est immatriculée et à jour annuellement au
                  registre national des copropriétés:
                </p>
                <div>
                  <input value="oui" name="options" type="radio" />
                  <label className="pl-3">Oui</label>
                </div>
                <div>
                  <input value="Non" name="options" type="radio" />
                  <label className="pl-3">Non</label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Le taux d’impayés par rapport au budget de l’année N-2 est
                  supérieur à 8%:
                </p>
                <div>
                  <input value="oui" name="options" type="radio" />
                  <label className="pl-3">Oui</label>
                </div>
                <div>
                  <input value="Non" name="options" type="radio" />
                  <label className="pl-3">Non</label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  La copropriété est-elle située dans un quartier NPNRU*:{" "}
                  <span className="text-xs">
                    Nouveau Programme National de Renouvellement Urbain
                  </span>
                </p>
                <div>
                  <input value="oui" name="options" type="radio" />
                  <label className="pl-3">Oui</label>
                </div>
                <div>
                  <input value="Non" name="options" type="radio" />
                  <label className="pl-3">Non</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Vous etes?</h2>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center">
              <input className="w-5 h-5" name="louer" type="radio" />
              <label className="pl-5">
                Je m'engage à louer votre logement à des locataires aux revenus
                modestes (pas un membre de ma famille ou de mon foyer fiscal).
              </label>
            </div>
            <div className="flex items-center">
              <input className="w-5 h-5" name="louer" type="radio" />
              <label className="pl-5">
                Je suis prêt à louer mon bien avec un niveau de loyer plafonné.
              </label>
            </div>
            <div className="flex items-center">
              <input className="w-5 h-5" name="louer" type="radio" />
              <label className="pl-5">
                Mon logement sera loué à usage de résidence principal de
                locataire.
              </label>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">
            L'un des membres de votre foyer correspond-il aux critères suivantes
            ?*
          </h2>
          <p className="py-2">Plusieurs réponses possibles</p>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center">
              <input className="w-5 h-5" name="" type="radio" />
              <label className="pl-5">
                Ågé de 60 à 69 ans sur conditions de GIR (groupe iso-ressources
                de 1 à 6)
              </label>
            </div>
            <div className="flex items-center">
              <input className="w-5 h-5" name="" type="radio" />
              <label className="pl-5">Ågé de 70 ans ou plus</label>
            </div>
            <div className="flex items-center">
              <input className="w-5 h-5" name="" type="radio" />
              <label className="pl-5">
                A un taux d'incapacité égal ou supérieur à 50% ou bénéficie de
                la Prestation de Compensation du Handicap (PCH)
              </label>
            </div>
            <div className="flex items-center">
              <input className="w-5 h-5" type="radio" />
              <label className="pl-5">Aucune de ces situations</label>
            </div>
          </div>
        </div>
        <div className="my-10 p-5 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Isolation?</h2>
          <div className="grid grid-cols-3">
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="isolation des combles"
                id="isolation des combles"
              />
              <label htmlFor="isolation des combles">
                <img className="w-32 h-32" src="/maison.png" />
                <p className="">isolation des combles</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="isolation des murs"
                id="isolation des murs"
              />
              <label htmlFor="isolation des murs">
                <img className="w-32 h-32" src="/maison.png" />
                <p className="">isolation des murs</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Isolation des sol"
                id="Isolation des sol"
              />
              <label htmlFor="Isolation des sol">
                <img className="w-32 h-32" src="/maison.png" />
                <p className="">Isolation des sol</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Fenêtres/Porte-fenêtres"
                id="Fenêtres/Porte-fenêtres"
              />
              <label htmlFor="Fenêtres/Porte-fenêtres">
                <img className="w-32 h-32" src="/maison.png" />
                <p className="">Fenêtres/Porte-fenêtres</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Isolation d'une Toiture-Terrasse"
                id="Isolation d'une Toiture-Terrasse"
              />
              <label htmlFor="Isolation d'une Toiture-Terrasse">
                <img className="w-32 h-32" src="/maison.png" />
                <p className="">Isolation d'une Toiture-Terrasse</p>
              </label>
            </div>
          </div>
          <h2 className="font-bold">Pompe à chaleur / chauffage sanitaire</h2>
          <div className="grid grid-cols-3">
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Pompe à chaleur Air/eau"
                id="Pompe à chaleur Air/eau"
              />
              <label htmlFor="Pompe à chaleur Air/eau">
                <img className="w-32 h-32" src="/maison.png" />
                <p className="">Pompe à chaleur Air/eau</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Pompe à chaleur Air/eau"
                id="Pompe à chaleur Air/eau"
              />
              <label htmlFor="Pompe à chaleur Air/eau">
                <img className="w-32 h-32" src="/maison.png" />
                <p className="">Pompe à chaleur Air/eau</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Pompe à chaleur géothermique"
                id="Pompe à chaleur géothermique"
              />
              <label htmlFor="Pompe à chaleur géothermique">
                <img className="w-32 h-32" src="/maison.png" />
                <p className="">Pompe à chaleur géothermique</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Pompe à chaleur hybride"
                id="Pompe à chaleur hybride"
              />
              <label htmlFor="Pompe à chaleur hybride">
                <img className="w-32 h-32" src="/maison.png" />
                <p className="">Pompe à chaleur hybride</p>
              </label>
            </div>
          </div>
          <h2 className="font-bold">Chauffage traditionnel</h2>
          <div className="grid grid-cols-3">
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Chaudière fioul à condensation"
                id="Chaudière fioul à condensation"
              />
              <label htmlFor="Chaudière fioul à condensation">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Chaudière fioul à condensation</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Chaudière gaz à condensation"
                id="Chaudière gaz à condensation"
              />
              <label htmlFor="Chaudière gaz à condensation">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Chaudière gaz à condensation</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Chaudière au charbon à condensation"
                id="Chaudière au charbon à condensation"
              />
              <label htmlFor="Chaudière au charbon à condensation">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Chaudière au charbon à condensation</p>
              </label>
            </div>
          </div>
          <h2 className="font-bold">Chauffage à bois</h2>
          <div className="grid grid-cols-3">
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Chaudière bois à bûches"
                id="Chaudière bois à bûches"
              />
              <label htmlFor="Chaudière bois à bûches">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Chaudière bois à bûches</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Chaudière bois à granulés/plaquettes"
                id="Chaudière bois à granulés/plaquettes"
              />
              <label htmlFor="Chaudière bois à granulés/plaquettes">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Chaudière bois à granulés/plaquettes</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Insert à bûches ou granulés"
                id="Insert à bûches ou granulés"
              />
              <label htmlFor="Insert à bûches ou granulés">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Insert à bûches ou granulés</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Poêle à bûches ou granulés"
                id="Poêle à bûches ou granulés"
              />
              <label htmlFor="Poêle à bûches ou granulés">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Poêle à bûches ou granulés</p>
              </label>
            </div>
          </div>
          <h2 className="font-bold">Système solaire</h2>
          <div className="grid grid-cols-3">
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Panneaux solaires photovoltaïques"
                id="Panneaux solaires photovoltaïques"
              />
              <label htmlFor="Panneaux solaires photovoltaïques">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Panneaux solaires photovoltaïques</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Isolation extérieure"
                id="Système solaire combiné"
              />
              <label htmlFor="Système solaire combiné">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Système solaire combiné</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Chauffe-eau thermodynamique"
                id="Chauffe-eau thermodynamique"
              />
              <label htmlFor="Chauffe-eau thermodynamique">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Chauffe-eau thermodynamique</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Chauffe-eau solaire individuel"
                id="Chauffe-eau solaire individuel"
              />
              <label htmlFor="Chauffe-eau solaire individuel">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Chauffe-eau solaire individuel</p>
              </label>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <div className="grid grid-cols-1 gap-2">
            <div>
              <input type="radio" />
              <label>
                Je souhaite remplacer une chaudière individuelle au charbon, au
                fioul ou au gaz.
              </label>
            </div>
            <div>
              <input type="radio" />
              <label>Non, je ne souhaite effectuer aucun remplacement.</label>
            </div>
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h2 className="font-bold">Isolation des murs ?</h2>
          <div className="grid grid-cols-3">
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Isolation intérieure"
                id="Isolation intérieure"
              />
              <label htmlFor="Isolation intérieure">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Isolation intérieure</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Isolation extérieure"
                id="Isolation extérieure"
              />
              <label htmlFor="Isolation extérieure">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Isolation extérieure</p>
              </label>
            </div>
            <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input
                className="absolute  w-5 h-5 right-2"
                type="radio"
                value="Je ne sais pas"
                id="Je ne sais pas"
              />
              <label htmlFor="Je ne sais pas">
                <img className="w-32 h-32" src="/maison.png" />
                <p>Je ne sais pas</p>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Quelle est la surface approximative de murs à isoler?</p>
            <p className="text-xs">Surface en m</p>
            <input
              type="number"
              className="border-2 p-2 rounded-md border-gray-500"
              placeholder="Quelle est la surface approximative de murs à isoler?"
            />{" "}
          </div>
          <div className="flex flex-col gap-2 mt-2 ">
            <h3 className="font-bold">Fenêtre/ Portes-fenêtres</h3>
            <p>Combien de fenetres souhaitez-vous remplacer?</p>
            <p className="text-xs">Nombre total de Fenêtre/ Portes-fenêtres </p>
            <input
              type="number"
              className="border-2 p-2 rounded-md border-gray-500"
              placeholder="Combien de fenetres souhaitez-vous remplacer?"
            />{" "}
          </div>
          <div className="w-full flex flex-col gap-2 mt-2">
            <h3 className="font-bold">Isolation des combles </h3>
            <p>Quelle est la surface approximative de combles à isoler?</p>
            <p className="text-xs">Nombre total de Fenêtre/ Portes-fenêtres </p>
            <input
              type="number"
              className="border-2 p-2 rounded-md border-gray-500"
              placeholder="approximative de combles à isoler"
            />{" "}
          </div>
          <div className="w-full flex flex-col gap-2 mt-3">
            <h3 className="font-bold">Isolation des toitures terrasses</h3>
            <p>Quelle est la surface toiture terrasse à isoler?</p>
            <p className="text-xs">Nombre total de Fenêtre/ Portes-fenêtres </p>
            <input
              type="number"
              className="border-2 p-2 rounded-md border-gray-500"
              placeholder="Nombre total de Fenêtre"
            />{" "}
          </div>
        </div>
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <div className="grid grid-cols-1 gap-2">
            <div>
              <p>
                Avez-vous une estimation du montant des travaux à réaliser ?
              </p>
              <div>
                <input value="oui" type="radio" />
                <label>Oui</label>
              </div>
              <div>
                <input value="Non" type="radio" />
                <label>Non</label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Quel est le montant estimatif des travaux ?</label>
              <input
              type="text"
              className="border-2 p-2 rounded-md border-gray-500"
              placeholder="Quel est le montant estimatif des travaux ?"
            />
            </div>
          </div>
        </div>
        <div>
          <h3>
            Souhaitez-vous créer ou recevoir vos résultats par mail ?N'attendez
            pas plus, créez votre compte en une minute !
          </h3>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Simulation;
