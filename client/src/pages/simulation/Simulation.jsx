// import React, { useState } from "react";
// import RegisterForm from "../../components/auth/RegisterForm";

// const Simulation = () => {
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleSelection = (value) => {
//     setSelectedOption(value); // Update the selected option
//   };

//   const getBoxStyle = (value) => {
//     // Check if the current option is selected
//     return selectedOption === value
//       ? "border-2 bg-sky-200 border-slate-400 p-5 m-5"
//       : "p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]";
//   };

//   return (
//     <div>
//       <div className=" max-w-screen-md m-auto w-full h-fit  flex flex-col  px-10 items-center my-10 ">
//         <h1 className="font-bold text-center text-xl">
//           Réalisons ensemble votre devis assurance habitation sur mesure en
//           quelques minutes. C’est parti !
//         </h1>
//         {/* Step 1 */}
//         <div className="my-10  p-5 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <h2 className="font-bold"> Quel est votre besoin?</h2>
//           <p>
//             Si le besoin est multiple alors il faudra réaliser 2 simulations.
//             Avant de vous lancer dans des projets de travaux de rénovation,
//             contactez le conseiller France Rénov’ le plus proche de chez vous et
//             profitez gratuitement de ses conseils personnalisés pour mener à
//             bien votre projet.
//           </p>
//           <div className="grid sm:grid-cols-2">
//             <div
//               className={getBoxStyle("Rénovation énergétique")}
//               onClick={() => handleSelection("Rénovation énergétique")}
//             >
//               <label className="flex items-center flex-col">
//                 <div className="flex gap-4 items-center">
//                   <input
//                     className="w-6 h-6"
//                     value="Rénovation énergétique"
//                     name="Quel est votre besoin"
//                     type="radio"
//                     checked={selectedOption === "Rénovation énergétique"}
//                     onChange={() => handleSelection("Rénovation énergétique")}
//                   />
//                   <h3 className="text-center bg-gray-100 rounded-full p-3">
//                     Rénovation énergétique
//                   </h3>
//                 </div>
//                 <p>
//                   Réduire ma facture d'énergie ou améliorer le confort de mon
//                   logement - Rénovation énergétique.
//                 </p>
//                 <img
//                   className="w-24 h-24"
//                   src="/assets/Rénovation-énergétique.png"
//                 />
//               </label>
//             </div>
//             <div
//               className={getBoxStyle("Sécurité / Salubrité")}
//               onClick={() => handleSelection("Sécurité / Salubrité")}
//             >
//               <label className="flex items-center flex-col">
//                 <div className="flex gap-4 items-center">
//                   <input
//                     className="w-6 h-6"
//                     value=" Sécurité / Salubrité"
//                     name="Quel est votre besoin"
//                     type="radio"
//                     checked={selectedOption === "Sécurité / Salubrité"}
//                     onChange={() => handleSelection("Sécurité / Salubrité")}
//                   />
//                   <h3 className="text-center bg-gray-100 rounded-full p-3">
//                     Sécurité / Salubrité
//                   </h3>
//                 </div>
//                 <p>
//                   Mettre mon logement aux normes de sécurité et de salubrité -
//                   Sécurité, salubrité.
//                 </p>
//                 <img className="w-24 h-24" src="/assets/Sécurité.png" />
//               </label>
//             </div>
//             <div  className={getBoxStyle("Autonomie de la personne")}
//               onClick={() => handleSelection("Autonomie de la personne")}>
//               <label className="flex items-center flex-col">
//                 <div className="flex gap-4 items-center">
//                   <input
//                     className="w-6 h-6"
//                     value="Autonomie de la personne"
//                     name="Quel est votre besoin"
//                     type="radio"
//                     checked={selectedOption === "Autonomie de la personne"}
//                     onChange={() => handleSelection("Autonomie de la personne")}
//                   />
//                   <h3 className="text-center bg-gray-100 rounded-full p-3">
//                     Autonomie de la personne
//                   </h3>
//                 </div>
//                 <p>
//                   Adapter mon logement au vieillissement ou à une situation de
//                   handicap - Autonomie.
//                 </p>
//                 <img
//                   className="w-24 h-24"
//                   src="/assets/Autonomie-de-a-personne.png"
//                 />
//               </label>
//             </div>
//           </div>
//         </div>
//         {/* Step 2  */}
//         <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <h2 className="font-bold">Vous etes?</h2>
//           <div className="grid sm:grid-cols-2">
//             <div className={getBoxStyle("Propriétaire occupant")}
//               onClick={() => handleSelection("Propriétaire occupant")}>
//               <label className="flex items-center flex-col">
//                 <div className="flex gap-4 items-center">
//                   <input
//                     className="w-6 h-6"
//                     value="Propriétaire occupant"
//                     name="Vous etes"
//                     type="radio"
//                     checked={selectedOption === "Propriétaire occupant"}
//                     onChange={() => handleSelection("Propriétaire occupant")}
//                   />
//                   <h3 className="text-center bg-gray-100 rounded-full p-3">
//                     Propriétaire occupant
//                   </h3>
//                 </div>
//                 <img
//                   className="w-24 h-24"
//                   src="/assets/Propriétaire-occupant.png"
//                 />
//               </label>
//             </div>
//             <div className={getBoxStyle("Propriétaire bailleur")}
//               onClick={() => handleSelection("Propriétaire bailleur")}>
//               <label className="flex items-center flex-col">
//                 <div className="flex gap-4 items-center">
//                   <input
//                     className="w-6 h-6"
//                     value="Propriétaire bailleur"
//                     name="Vous etes"
//                     type="radio"
//                     checked={selectedOption === "Propriétaire bailleur"}
//                     onChange={() => handleSelection("Propriétaire bailleur")}
//                   />
//                   <h3 className="text-center bg-gray-100 rounded-full p-3">
//                     Propriétaire bailleur
//                   </h3>
//                 </div>
//                 <img
//                   className="w-24 h-24"
//                   src="/assets/Propriétaire-bailleur.png"
//                 />
//               </label>
//             </div>
//             <div className={getBoxStyle("Syndicat de copropriétaires")}
//               onClick={() => handleSelection("Syndicat de copropriétaires")}>
//               <label className="flex items-center flex-col">
//                 <div className="flex gap-4 items-center">
//                   <input
//                     className="w-6 h-6"
//                     value="Syndicat de copropriétaires"
//                     name="Vous etes"
//                     type="radio"
//                     checked={selectedOption === "Syndicat de copropriétaires"}
//                     onChange={() => handleSelection("Syndicat de copropriétaires")}
//                   />
//                   <h3 className="text-center bg-gray-100 rounded-full p-3">
//                     Syndicat de copropriétaires
//                   </h3>
//                 </div>
//                 <img
//                   className="w-24 h-24"
//                   src="/assets/Syndicat-de-copropriétaires.png"
//                 />
//               </label>
//             </div>
//           </div>
//         </div>
//         {/* Step 3 */}
//         <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <h2 className="font-bold">Avez-vous une maison ou un appartement?</h2>
//           <div className="grid sm:grid-cols-2">
//             <div className={getBoxStyle("Maison")}
//               onClick={() => handleSelection("Maison")}>
//               <label className="flex items-center flex-col">
//                 <div className="flex gap-4 items-center">
//                   <input
//                     className="w-6 h-6 "
//                     value="Maison"
//                     name="Avez-vous"
//                     type="radio"
//                     checked={selectedOption === "Maison"}
//                     onChange={() => handleSelection("Maison")}
//                   />
//                   <h3 className="text-center bg-gray-100 rounded-full p-3">
//                     Maison
//                   </h3>
//                 </div>
//                 <img className="w-24 h-24" src="/assets/maison.png" />
//               </label>
//             </div>
//             <div className={getBoxStyle("Appartement")}
//               onClick={() => handleSelection("Appartement")}>
//               <label className="flex items-center flex-col">
//                 <div className="flex gap-4 items-center">
//                   <input
//                     className="w-6 h-6"
//                     value="Appartement"
//                     name="Avez-vous"
//                     type="radio"
//                     checked={selectedOption === "Appartement"}
//                     onChange={() => handleSelection("Appartement")}
//                   />
//                   <h3 className="text-center bg-gray-100 rounded-full p-3">
//                     Appartement
//                   </h3>
//                 </div>
//                 <img className="w-24 h-24" src="/assets/appartement.png" />
//               </label>
//             </div>
//           </div>
//         </div>
//         {/* Step 4  */}
//         <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <h2 className="font-bold">
//             Occupez vous votre logement à titre de résidence principale ou
//             secondaire ?
//           </h2>
//           <div className="grid sm:grid-cols-2">
//             <div className={getBoxStyle("Résidence principale")}
//               onClick={() => handleSelection("Résidence principale")}>
//               <label className="flex items-center flex-col">
//                 <div className="flex gap-4 items-center">
//                   <input
//                     className="w-6 h-6 "
//                     value="Résidence principale"
//                     name="Résidence"
//                     type="radio"
//                     checked={selectedOption === "Résidence principale"}
//                     onChange={() => handleSelection("Résidence principale")}
//                   />
//                   <h3 className="text-center bg-gray-100 rounded-full p-3">
//                     Résidence principale
//                   </h3>
//                 </div>
//                 <img
//                   className="w-24 h-24"
//                   src="/assets/Résidence-principale.png"
//                 />
//               </label>
//             </div>
//             <div className={getBoxStyle("Résidence secondaire")}
//               onClick={() => handleSelection("Résidence secondaire")}>
//               <label className="flex items-center flex-col">
//                 <div className="flex gap-4 items-center">
//                   <input
//                     className="w-6 h-6"
//                     value="Résidence secondaire"
//                     name="Résidence"
//                     type="radio"
//                     checked={selectedOption === "Résidence secondaire"}
//                     onChange={() => handleSelection("Résidence secondaire")}
//                   />
//                   <h3 className="text-center bg-gray-100 rounded-full p-3">
//                     Résidence secondaire
//                   </h3>
//                 </div>
//                 <img
//                   className="w-24 h-24"
//                   src="/assets/Résidence-secondaire.png"
//                 />
//               </label>
//             </div>
//           </div>
//         </div>
//         {/* Step 5 */}
//         <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <h2 className="font-bold">Votre logement a été construit il y a:</h2>
//           <div className="grid sm:grid-cols-2">
//             <div className={getBoxStyle("Maison de 2 ans")}
//               onClick={() => handleSelection("Maison de 2 ans")}>
//               <label className="flex items-center flex-col">
//                 <div className="flex gap-4 items-center">
//                   <input
//                     className="w-6 h-6 "
//                     value="Maison de 2 ans"
//                     name="options"
//                     type="radio"
//                     checked={selectedOption === "Maison de 2 ans"}
//                     onChange={() => handleSelection("Maison de 2 ans")}
//                   />
//                   <h3 className="text-center bg-gray-100 rounded-full p-3">
//                     Maison de 2 ans
//                   </h3>
//                 </div>
//                 <img className="w-24 h-24" src="/assets/Maison-de-2-ans.png" />
//               </label>
//             </div>
//             <div className={getBoxStyle("Entre 2 et 15 ans")}
//               onClick={() => handleSelection("Entre 2 et 15 ans")}>
//               <label className="flex items-center flex-col">
//                 <div className="flex gap-4 items-center">
//                   <input
//                     className="w-6 h-6 "
//                     value="Entre 2 et 15 ans"
//                     name="options"
//                     type="radio"
//                     checked={selectedOption === "Entre 2 et 15 ans"}
//                     onChange={() => handleSelection("Entre 2 et 15 ans")}
//                   />
//                   <h3 className="text-center bg-gray-100 rounded-full p-3">
//                     Entre 2 et 15 ans
//                   </h3>
//                 </div>
//                 <img
//                   className="w-24 h-24"
//                   src="/assets/Entre-2-et-15-ans.png"
//                 />
//               </label>
//             </div>
//             <div className={getBoxStyle("Plus de 15 ans")}
//               onClick={() => handleSelection("Plus de 15 ans")}>
//               <label className="flex items-center flex-col">
//                 <div className="flex gap-4 items-center">
//                   <input
//                     className="w-6 h-6 "
//                     value="Plus de 15 ans"
//                     name="options"
//                     type="radio"
//                     checked={selectedOption === "Plus de 15 ans"}
//                     onChange={() => handleSelection("Plus de 15 ans")}
//                   />
//                   <h3 className="text-center bg-gray-100 rounded-full p-3">
//                     Plus de 15 ans
//                   </h3>
//                 </div>
//                 <img className="w-24 h-24" src="/assets/Plus-de-15-ans.png" />
//               </label>
//             </div>
//           </div>
//         </div>
//         {/* Step 6 */}
//         <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <h2 className="font-bold">
//             Merci, quelle est l'addresse du logement pour votre projet?
//           </h2>
//           <p>Tous les champs sont obligatories</p>
//           <div className="w-full mt-2 gap-5 flex flex-col  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//             <input
//               className="border-2 p-2 rounded-md border-gray-500"
//               placeholder="Addresse"
//             />
//             <input
//               className="border-2 p-2 rounded-md border-gray-500"
//               placeholder="Ville"
//             />
//             <input
//               className="border-2 p-2 rounded-md border-gray-500"
//               placeholder="Code postral"
//             />
//           </div>
//         </div>
//         <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <h2 className="font-bold">
//             Quelle est la note DPE de votre logement?
//           </h2>
//           <p>
//             Cette information nous permettra d'estimer plus précisement les
//             aides pour votre projet.{" "}
//           </p>
//           <div className="grid sm:grid-cols-2 md:grid-cols-4">
//             <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="w-6 h-6 "
//                 value="Etiquette A"
//                 name="options"
//                 type="radio"
//               />
//               <p className="font-bold text-white p-2 rounded-md text-center bg-green-600 text-4xl">
//                 A
//               </p>
//               <p>Etiquette A</p>
//             </label>
//             <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="w-6 h-6 "
//                 value="Etiquette B"
//                 name="options"
//                 type="radio"
//               />
//               <p className="font-bold text-white p-2 rounded-md text-center bg-green-400 text-4xl">
//                 B
//               </p>
//               <p>Etiquette B</p>
//             </label>
//             <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="w-6 h-6 "
//                 value="Etiquette C"
//                 name="options"
//                 type="radio"
//               />
//               <p className="font-bold text-white p-2 rounded-md text-center bg-green-300 text-4xl">
//                 C
//               </p>
//               <p>Etiquette C</p>
//             </label>
//             <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="w-6 h-6 "
//                 value="Etiquette D"
//                 name="options"
//                 type="radio"
//               />
//               <p className="font-bold text-white p-2 rounded-md text-center bg-yellow-300	 text-4xl">
//                 D
//               </p>
//               <p>Etiquette D</p>
//             </label>
//             <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="w-6 h-6 "
//                 value="Etiquette E"
//                 name="options"
//                 type="radio"
//               />
//               <p className="font-bold text-white p-2 rounded-md text-center bg-amber-300	 text-4xl">
//                 E
//               </p>
//               <p>Etiquette E</p>
//             </label>
//             <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="w-6 h-6 "
//                 value="Etiquette F"
//                 name="options"
//                 type="radio"
//               />
//               <p className="font-bold text-white p-2 rounded-md text-center bg-orange-400	 text-4xl">
//                 F
//               </p>
//               <p>Etiquette F</p>
//             </label>
//             <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="w-6 h-6 "
//                 value="Etiquette G"
//                 name="options"
//                 type="radio"
//               />
//               <p className="font-bold text-white p-2 rounded-md text-center bg-red-500 text-4xl">
//                 G
//               </p>
//               <p>Etiquette G</p>
//             </label>
//             <label className="gap-2 flex items-center flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="w-6 h-6 "
//                 value="Je ne sais pas"
//                 name="options"
//                 type="radio"
//               />
//               <p className="font-bold text-white p-2 rounded-md text-center bg-blue-500 text-4xl">
//                 ?
//               </p>
//               <p>Je ne sais pas</p>
//             </label>
//           </div>
//         </div>
//         <div className="my-10 p-3 sm:p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <h2 className="font-bold">Quelle est votre situation financiére?</h2>
//           <p>
//             Ces information vous sont demandées pour définir votre éligibilité
//             aux aides France Rénov
//           </p>
//           <div className="grid grid-cols-1">
//             <div className=" gap-5 flex flex-col m-2 sm:m-5 p-3 sm:p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <div>
//                 <label>Revenu fiscal de référence du foyer :*</label>
//                 <p className="text-xs">
//                   Saisissez votre revenu fiscal de référence du foyer
//                 </p>
//               </div>
//               <input
//                 className="border-2 p-2 rounded-md border-gray-500"
//                 placeholder="Addresse"
//               />{" "}
//               <div>
//                 <label>Nombre de personnes composant le foyer :*</label>
//                 <p className="text-xs">
//                   Saisissez le nombre de personnes composant le foyer
//                 </p>
//               </div>
//               <input
//                 className="border-2 p-2 rounded-md border-gray-500"
//                 placeholder="ville"
//               />{" "}
//             </div>
//           </div>
//         </div>
//         <div className="my-10 p-3 sm:p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <div className="grid grid-cols-1">
//             <div className=" gap-5 flex flex-col  m-2 sm:m-10 p-3 sm:p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <label>
//                 Quel est le nombre de logements constituant votre copropriété ?
//               </label>
//               <input
//                 className="border-2 p-2 rounded-md border-gray-500"
//                 type="number"
//               />
//               <label>
//                 Quel est le nombre de logements dédiés à l’usage de l’habitation
//                 principale ?
//               </label>
//               <input
//                 className="border-2 p-2 rounded-md border-gray-500"
//                 type="number"
//               />
//               <div className="flex flex-col gap-2">
//                 <p>
//                   La copropriété est immatriculée et à jour annuellement au
//                   registre national des copropriétés:
//                 </p>
//                 <div>
//                   <input value="oui" name="options" type="radio" />
//                   <label className="pl-3">Oui</label>
//                 </div>
//                 <div>
//                   <input value="Non" name="options" type="radio" />
//                   <label className="pl-3">Non</label>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <p>
//                   Le taux d’impayés par rapport au budget de l’année N-2 est
//                   supérieur à 8%:
//                 </p>
//                 <div>
//                   <input value="oui" name="options" type="radio" />
//                   <label className="pl-3">Oui</label>
//                 </div>
//                 <div>
//                   <input value="Non" name="options" type="radio" />
//                   <label className="pl-3">Non</label>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <p>
//                   La copropriété est-elle située dans un quartier NPNRU*:{" "}
//                   <span className="text-xs">
//                     Nouveau Programme National de Renouvellement Urbain
//                   </span>
//                 </p>
//                 <div>
//                   <input value="oui" name="options" type="radio" />
//                   <label className="pl-3">Oui</label>
//                 </div>
//                 <div>
//                   <input value="Non" name="options" type="radio" />
//                   <label className="pl-3">Non</label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <h2 className="font-bold">Vous etes?</h2>
//           <div className="grid grid-cols-1 gap-2">
//             <div className="flex items-center">
//               <input className="w-5 h-5" name="louer" type="radio" />
//               <label className="pl-5">
//                 Je m'engage à louer votre logement à des locataires aux revenus
//                 modestes (pas un membre de ma famille ou de mon foyer fiscal).
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input className="w-5 h-5" name="louer" type="radio" />
//               <label className="pl-5">
//                 Je suis prêt à louer mon bien avec un niveau de loyer plafonné.
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input className="w-5 h-5" name="louer" type="radio" />
//               <label className="pl-5">
//                 Mon logement sera loué à usage de résidence principal de
//                 locataire.
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <h2 className="font-bold">
//             L'un des membres de votre foyer correspond-il aux critères suivantes
//             ?*
//           </h2>
//           <p className="py-2">Plusieurs réponses possibles</p>
//           <div className="grid grid-cols-1 gap-2">
//             <div className="flex items-center">
//               <input className="w-5 h-5" name="" type="radio" />
//               <label className="pl-5">
//                 Ågé de 60 à 69 ans sur conditions de GIR (groupe iso-ressources
//                 de 1 à 6)
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input className="w-5 h-5" name="" type="radio" />
//               <label className="pl-5">Ågé de 70 ans ou plus</label>
//             </div>
//             <div className="flex items-center">
//               <input className="w-5 h-5" name="" type="radio" />
//               <label className="pl-5">
//                 A un taux d'incapacité égal ou supérieur à 50% ou bénéficie de
//                 la Prestation de Compensation du Handicap (PCH)
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input className="w-5 h-5" type="radio" />
//               <label className="pl-5">Aucune de ces situations</label>
//             </div>
//           </div>
//         </div>
//         <div className="my-10 p-5 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <h2 className="font-bold">Isolation?</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3">
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="isolation des combles"
//                 id="isolation des combles"
//               />
//               <label htmlFor="isolation des combles">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/isolation-des-combles.png"
//                 />
//                 <p className="">isolation des combles</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="isolation des murs"
//                 id="isolation des murs"
//               />
//               <label htmlFor="isolation des murs">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/isolation-des-murs.png"
//                 />
//                 <p className="">isolation des murs</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Isolation des sol"
//                 id="Isolation des sol"
//               />
//               <label htmlFor="Isolation des sol">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Isolation-des-sol.jpg"
//                 />
//                 <p className="">Isolation des sol</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Fenêtres/Porte-fenêtres"
//                 id="Fenêtres/Porte-fenêtres"
//               />
//               <label htmlFor="Fenêtres/Porte-fenêtres">
//                 <img className="w-32 h-32" src="/assets/Fenêtres.jpg" />
//                 <p className="">Fenêtres/Porte-fenêtres</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Isolation d'une Toiture-Terrasse"
//                 id="Isolation d'une Toiture-Terrasse"
//               />
//               <label htmlFor="Isolation d'une Toiture-Terrasse">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Isolation-Terrasse.png"
//                 />
//                 <p className="">Isolation d'une Toiture-Terrasse</p>
//               </label>
//             </div>
//           </div>
//           <h2 className="font-bold">Pompe à chaleur / chauffage sanitaire</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3">
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Pompe à chaleur Air/eau"
//                 id="Pompe à chaleur Air/eau"
//               />
//               <label htmlFor="Pompe à chaleur Air/eau">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Pompe-à-chaleur-air.png"
//                 />
//                 <p className="">Pompe à chaleur Air/eau</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Pompe à chaleur Air/eau"
//                 id="Pompe à chaleur Air/eau"
//               />
//               <label htmlFor="Pompe à chaleur Air/eau">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Pompe-à-chaleur-eau.png"
//                 />
//                 <p className="">Pompe à chaleur Air/eau</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Pompe à chaleur géothermique"
//                 id="Pompe à chaleur géothermique"
//               />
//               <label htmlFor="Pompe à chaleur géothermique">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Pompe-à-chaleur-géothermique.png"
//                 />
//                 <p className="">Pompe à chaleur géothermique</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Pompe à chaleur hybride"
//                 id="Pompe à chaleur hybride"
//               />
//               <label htmlFor="Pompe à chaleur hybride">
//                 <img className="w-32 h-32" src="/maison.png" />
//                 <p className="">Pompe à chaleur hybride</p>
//               </label>
//             </div>
//           </div>
//           <h2 className="font-bold">Chauffage traditionnel</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3">
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Chaudière fioul à condensation"
//                 id="Chaudière fioul à condensation"
//               />
//               <label htmlFor="Chaudière fioul à condensation">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Chaudière-fioul-à-condensation.png"
//                 />
//                 <p>Chaudière fioul à condensation</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Chaudière gaz à condensation"
//                 id="Chaudière gaz à condensation"
//               />
//               <label htmlFor="Chaudière gaz à condensation">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Chaudière-gaz-à-condensation.png"
//                 />
//                 <p>Chaudière gaz à condensation</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Chaudière au charbon à condensation"
//                 id="Chaudière au charbon à condensation"
//               />
//               <label htmlFor="Chaudière au charbon à condensation">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Chaudière-au-charbon-à-condensation.png"
//                 />
//                 <p>Chaudière au charbon à condensation</p>
//               </label>
//             </div>
//           </div>
//           <h2 className="font-bold">Chauffage à bois</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3">
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Chaudière bois à bûches"
//                 id="Chaudière bois à bûches"
//               />
//               <label htmlFor="Chaudière bois à bûches">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Chaudière-bois-à-bûches.png"
//                 />
//                 <p>Chaudière bois à bûches</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Chaudière bois à granulés/plaquettes"
//                 id="Chaudière bois à granulés/plaquettes"
//               />
//               <label htmlFor="Chaudière bois à granulés/plaquettes">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Chaudière-bois-à-plaquettes.png"
//                 />
//                 <p>Chaudière bois à granulés/plaquettes</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Insert à bûches ou granulés"
//                 id="Insert à bûches ou granulés"
//               />
//               <label htmlFor="Insert à bûches ou granulés">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Insert-à-bûches-ou-granulés.png"
//                 />
//                 <p>Insert à bûches ou granulés</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Poêle à bûches ou granulés"
//                 id="Poêle à bûches ou granulés"
//               />
//               <label htmlFor="Poêle à bûches ou granulés">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Poêle-à-bûches-ou-granulés.png"
//                 />
//                 <p>Poêle à bûches ou granulés</p>
//               </label>
//             </div>
//           </div>
//           <h2 className="font-bold">Système solaire</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3">
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Panneaux solaires photovoltaïques"
//                 id="Panneaux solaires photovoltaïques"
//               />
//               <label htmlFor="Panneaux solaires photovoltaïques">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Panneaux-solaires-photovoltaïques.jpg"
//                 />
//                 <p>Panneaux solaires photovoltaïques</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Isolation extérieure"
//                 id="Système solaire combiné"
//               />
//               <label htmlFor="Système solaire combiné">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Système-solaire-combiné.png"
//                 />
//                 <p>Système solaire combiné</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Chauffe-eau thermodynamique"
//                 id="Chauffe-eau thermodynamique"
//               />
//               <label htmlFor="Chauffe-eau thermodynamique">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Chauffe-eau-thermodynamique.png"
//                 />
//                 <p>Chauffe-eau thermodynamique</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Chauffe-eau solaire individuel"
//                 id="Chauffe-eau solaire individuel"
//               />
//               <label htmlFor="Chauffe-eau solaire individuel">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Chauffe-eau-solaire-individuel.jpg"
//                 />
//                 <p>Chauffe-eau solaire individuel</p>
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <div className="grid grid-cols-1 gap-2">
//             <div className="flex flex-row gap-2">
//               <input type="radio" />
//               <label>
//                 Je souhaite remplacer une chaudière individuelle au charbon, au
//                 fioul ou au gaz.
//               </label>
//             </div>
//             <div className="flex flex-row gap-2">
//               <input type="radio" />
//               <label>Non, je ne souhaite effectuer aucun remplacement.</label>
//             </div>
//           </div>
//         </div>
//         <div className="my-10 p-3 sm:p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <h2 className="font-bold">Isolation des murs ?</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3">
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Isolation intérieure"
//                 id="Isolation intérieure"
//               />
//               <label htmlFor="Isolation intérieure">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Isolation-intérieure.png"
//                 />
//                 <p>Isolation intérieure</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Isolation extérieure"
//                 id="Isolation extérieure"
//               />
//               <label htmlFor="Isolation extérieure">
//                 <img
//                   className="w-32 h-32"
//                   src="/assets/Isolation-extérieure.png"
//                 />
//                 <p>Isolation extérieure</p>
//               </label>
//             </div>
//             <div className="relative flex flex-col m-5 p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               <input
//                 className="absolute  w-5 h-5 right-2"
//                 type="radio"
//                 value="Je ne sais pas"
//                 id="Je ne sais pas"
//               />
//               <label htmlFor="Je ne sais pas">
//                 <img className="w-32 h-32" src="/assets/question.png" />
//                 <p>Je ne sais pas</p>
//               </label>
//             </div>
//           </div>
//           <div className="flex flex-col gap-2">
//             <p>Quelle est la surface approximative de murs à isoler?</p>
//             <p className="text-xs">Surface en m</p>
//             <input
//               type="number"
//               className="border-2 p-2 rounded-md border-gray-500"
//               placeholder="Quelle est la surface approximative de murs à isoler?"
//             />{" "}
//           </div>
//           <div className="flex flex-col gap-2 mt-2 ">
//             <h3 className="font-bold">Fenêtre/ Portes-fenêtres</h3>
//             <p>Combien de fenetres souhaitez-vous remplacer?</p>
//             <p className="text-xs">Nombre total de Fenêtre/ Portes-fenêtres </p>
//             <input
//               type="number"
//               className="border-2 p-2 rounded-md border-gray-500"
//               placeholder="Combien de fenetres souhaitez-vous remplacer?"
//             />{" "}
//           </div>
//           <div className="w-full flex flex-col gap-2 mt-2">
//             <h3 className="font-bold">Isolation des combles </h3>
//             <p>Quelle est la surface approximative de combles à isoler?</p>
//             <p className="text-xs">Nombre total de Fenêtre/ Portes-fenêtres </p>
//             <input
//               type="number"
//               className="border-2 p-2 rounded-md border-gray-500"
//               placeholder="approximative de combles à isoler"
//             />{" "}
//           </div>
//           <div className="w-full flex flex-col gap-2 mt-3">
//             <h3 className="font-bold">Isolation des toitures terrasses</h3>
//             <p>Quelle est la surface toiture terrasse à isoler?</p>
//             <p className="text-xs">Nombre total de Fenêtre/ Portes-fenêtres </p>
//             <input
//               type="number"
//               className="border-2 p-2 rounded-md border-gray-500"
//               placeholder="Nombre total de Fenêtre"
//             />{" "}
//           </div>
//         </div>
//         <div className="my-10 p-3 sm:p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//           <div className="grid grid-cols-1 gap-2">
//             <div>
//               <p>
//                 Avez-vous une estimation du montant des travaux à réaliser ?
//               </p>
//               <div className="flex gap-3">
//                 <input value="oui" type="radio" />
//                 <label>Oui</label>
//               </div>
//               <div className="flex gap-3">
//                 <input value="Non" type="radio" />
//                 <label>Non</label>
//               </div>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label>Quel est le montant estimatif des travaux ?</label>
//               <input
//                 type="text"
//                 className="border-2 p-2 rounded-md border-gray-500"
//                 placeholder="Quel est le montant estimatif des travaux ?"
//               />
//             </div>
//           </div>
//         </div>
//         <div>
//           <h3 className="font-bold text-xl my-2">
//             Souhaitez-vous créer ou recevoir vos résultats par mail ?N'attendez
//             pas plus, créez votre compte en une minute !
//           </h3>
//           <RegisterForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Simulation;


import React, { useState } from "react";

const Simulation = () => {
  // State to keep track of the current step
  const [currentStep, setCurrentStep] = useState(0);

  // State for each step
  const [selectedStep1, setSelectedStep1] = useState("");
  const [selectedStep2, setSelectedStep2] = useState("");
  const [selectedStep3, setSelectedStep3] = useState("");
  const [selectedStep4, setSelectedStep4] = useState("");
  const [selectedStep5, setSelectedStep5] = useState("");

   // Function to handle selection and move to the next step
   const handleSelection = (step, selection) => {
    switch (step) {
      case 1:
        setSelectedStep1(selection);
        setCurrentStep(2);
        break;
      case 2:
        setSelectedStep2(selection);
        setCurrentStep(3);
        break;
      case 3:
        setSelectedStep3(selection);
        setCurrentStep(4);
        break;
      case 4:
        setSelectedStep4(selection);
        setCurrentStep(5);
        break;
      case 5:
        setSelectedStep5(selection);
        setCurrentStep(6);
        break;
      default:
        break;
    }
  };
  
  // Get box style based on the selected option for each step
  const getBoxStyle = (step, value) => {
    const selectedOption = {
      1: selectedStep1,
      2: selectedStep2,
      3: selectedStep3,
      4: selectedStep4,
      5: selectedStep5,
    }[step];

    return selectedOption === value
      ? "border-2 bg-sky-200 border-slate-400 p-5 m-5"
      : "p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]";
  };

 
    // Function to get progress bar width based on current step
    const getProgressWidth = () => {
      const progress = (currentStep / 6) * 100;
      return `${progress}%`;
    };

  return (
    <div>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 bg-gray-200 h-2">
        <div
          className="bg-blue-500 h-full"
          style={{ width: getProgressWidth() }}
        ></div>
      </div>
      <div className="max-w-screen-md m-auto w-full h-fit flex flex-col px-10 items-center my-10">
        <h1 className="font-bold text-center text-xl">
          Réalisons ensemble votre devis assurance habitation sur mesure en
          quelques minutes. C’est parti !
        </h1>
        
        {/* Step 1 */}
        <div className="my-10 p-5 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <h2 className="font-bold">Quel est votre besoin?</h2>
          <p>
            Si le besoin est multiple alors il faudra réaliser 2 simulations.
            Avant de vous lancer dans des projets de travaux de rénovation,
            contactez le conseiller France Rénov’ le plus proche de chez vous et
            profitez gratuitement de ses conseils personnalisés pour mener à
            bien votre projet.
          </p>
          <div className="grid sm:grid-cols-2">
            <div
              className={getBoxStyle(1, "Rénovation énergétique")}
              onClick={() => handleSelection(1, "Rénovation énergétique")}
            >
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Rénovation énergétique"
                    name="Quel est votre besoin"
                    type="radio"
                    checked={selectedStep1 === "Rénovation énergétique"}
                    onChange={() => handleSelection(1, "Rénovation énergétique")}
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Rénovation énergétique
                  </h3>
                </div>
                <p>
                  Réduire ma facture d'énergie ou améliorer le confort de mon
                  logement - Rénovation énergétique.
                </p>
                <img
                  className="w-24 h-24"
                  src="/assets/Rénovation-énergétique.png"
                  alt="Rénovation énergétique"
                />
              </label>
            </div>
            <div
              className={getBoxStyle(1, "Sécurité / Salubrité")}
              onClick={() => handleSelection(1, "Sécurité / Salubrité")}
            >
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Sécurité / Salubrité"
                    name="Quel est votre besoin"
                    type="radio"
                    checked={selectedStep1 === "Sécurité / Salubrité"}
                    onChange={() => handleSelection(1, "Sécurité / Salubrité")}
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Sécurité / Salubrité
                  </h3>
                </div>
                <p>
                  Mettre mon logement aux normes de sécurité et de salubrité -
                  Sécurité, salubrité.
                </p>
                <img className="w-24 h-24" src="/assets/Sécurité.png" alt="Sécurité / Salubrité" />
              </label>
            </div>
            <div
              className={getBoxStyle(1, "Autonomie de la personne")}
              onClick={() => handleSelection(1, "Autonomie de la personne")}
            >
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Autonomie de la personne"
                    name="Quel est votre besoin"
                    type="radio"
                    checked={selectedStep1 === "Autonomie de la personne"}
                    onChange={() => handleSelection(1, "Autonomie de la personne")}
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Autonomie de la personne
                  </h3>
                </div>
                <p>
                  Adapter mon logement au vieillissement ou à une situation de
                  handicap - Autonomie.
                </p>
                <img
                  className="w-24 h-24"
                  src="/assets/Autonomie-de-a-personne.png"
                  alt="Autonomie de la personne"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <h2 className="font-bold">Vous êtes?</h2>
          <div className="grid sm:grid-cols-2">
            <div
              className={getBoxStyle(2, "Propriétaire occupant")}
              onClick={() => handleSelection(2, "Propriétaire occupant")}
            >
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Propriétaire occupant"
                    name="Vous êtes"
                    type="radio"
                    checked={selectedStep2 === "Propriétaire occupant"}
                    onChange={() => handleSelection(2, "Propriétaire occupant")}
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Propriétaire occupant
                  </h3>
                </div>
                <img
                  className="w-24 h-24"
                  src="/assets/Propriétaire-occupant.png"
                  alt="Propriétaire occupant"
                />
              </label>
            </div>
            <div
              className={getBoxStyle(2, "Propriétaire bailleur")}
              onClick={() => handleSelection(2, "Propriétaire bailleur")}
            >
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Propriétaire bailleur"
                    name="Vous êtes"
                    type="radio"
                    checked={selectedStep2 === "Propriétaire bailleur"}
                    onChange={() => handleSelection(2, "Propriétaire bailleur")}
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Propriétaire bailleur
                  </h3>
                </div>
                <img
                  className="w-24 h-24"
                  src="/assets/Propriétaire-bailleur.png"
                  alt="Propriétaire bailleur"
                />
              </label>
            </div>
            <div
              className={getBoxStyle(2, "Syndicat de copropriétaires")}
              onClick={() => handleSelection(2, "Syndicat de copropriétaires")}
            >
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Syndicat de copropriétaires"
                    name="Vous êtes"
                    type="radio"
                    checked={selectedStep2 === "Syndicat de copropriétaires"}
                    onChange={() => handleSelection(2, "Syndicat de copropriétaires")}
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Syndicat de copropriétaires
                  </h3>
                </div>
                <img
                  className="w-24 h-24"
                  src="/assets/Syndicat-de-copropriétaires.png"
                  alt="Syndicat de copropriétaires"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <h2 className="font-bold">Avez-vous une maison ou un appartement?</h2>
          <div className="grid sm:grid-cols-2">
            <div
              className={getBoxStyle(3, "Maison")}
              onClick={() => handleSelection(3, "Maison")}
            >
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Maison"
                    name="Avez-vous"
                    type="radio"
                    checked={selectedStep3 === "Maison"}
                    onChange={() => handleSelection(3, "Maison")}
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Maison
                  </h3>
                </div>
                <img className="w-24 h-24" src="/assets/maison.png" alt="Maison" />
              </label>
            </div>
            <div
              className={getBoxStyle(3, "Appartement")}
              onClick={() => handleSelection(3, "Appartement")}
            >
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Appartement"
                    name="Avez-vous"
                    type="radio"
                    checked={selectedStep3 === "Appartement"}
                    onChange={() => handleSelection(3, "Appartement")}
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Appartement
                  </h3>
                </div>
                <img className="w-24 h-24" src="/assets/appartement.png" alt="Appartement" />
              </label>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <h2 className="font-bold">
            Occupez-vous votre logement à titre de résidence principale ou
            secondaire ?
          </h2>
          <div className="grid sm:grid-cols-2">
            <div
              className={getBoxStyle(4, "Résidence principale")}
              onClick={() => handleSelection(4, "Résidence principale")}
            >
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Résidence principale"
                    name="Résidence"
                    type="radio"
                    checked={selectedStep4 === "Résidence principale"}
                    onChange={() => handleSelection(4, "Résidence principale")}
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Résidence principale
                  </h3>
                </div>
                <img
                  className="w-24 h-24"
                  src="/assets/Résidence-principale.png"
                  alt="Résidence principale"
                />
              </label>
            </div>
            <div
              className={getBoxStyle(4, "Résidence secondaire")}
              onClick={() => handleSelection(4, "Résidence secondaire")}
            >
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Résidence secondaire"
                    name="Résidence"
                    type="radio"
                    checked={selectedStep4 === "Résidence secondaire"}
                    onChange={() => handleSelection(4, "Résidence secondaire")}
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Résidence secondaire
                  </h3>
                </div>
                <img
                  className="w-24 h-24"
                  src="/assets/Résidence-secondaire.png"
                  alt="Résidence secondaire"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="my-10 p-10 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <h2 className="font-bold">Votre logement a été construit il y a:</h2>
          <div className="grid sm:grid-cols-2">
            <div
              className={getBoxStyle(5, "Maison de 2 ans")}
              onClick={() => handleSelection(5, "Maison de 2 ans")}
            >
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Maison de 2 ans"
                    name="options"
                    type="radio"
                    checked={selectedStep5 === "Maison de 2 ans"}
                    onChange={() => handleSelection(5, "Maison de 2 ans")}
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Maison de 2 ans
                  </h3>
                </div>
                <img className="w-24 h-24" src="/assets/Maison-de-2-ans.png" alt="Maison de 2 ans" />
              </label>
            </div>
            <div
              className={getBoxStyle(5, "Entre 2 et 15 ans")}
              onClick={() => handleSelection(5, "Entre 2 et 15 ans")}
            >
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Entre 2 et 15 ans"
                    name="options"
                    type="radio"
                    checked={selectedStep5 === "Entre 2 et 15 ans"}
                    onChange={() => handleSelection(5, "Entre 2 et 15 ans")}
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Entre 2 et 15 ans
                  </h3>
                </div>
                <img
                  className="w-24 h-24"
                  src="/assets/Entre-2-et-15-ans.png"
                  alt="Entre 2 et 15 ans"
                />
              </label>
            </div>
            <div
              className={getBoxStyle(5, "Plus de 15 ans")}
              onClick={() => handleSelection(5, "Plus de 15 ans")}
            >
              <label className="flex items-center flex-col">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6"
                    value="Plus de 15 ans"
                    name="options"
                    type="radio"
                    checked={selectedStep5 === "Plus de 15 ans"}
                    onChange={() => handleSelection(5, "Plus de 15 ans")}
                  />
                  <h3 className="text-center bg-gray-100 rounded-full p-3">
                    Plus de 15 ans
                  </h3>
                </div>
                <img className="w-24 h-24" src="/assets/Plus-de-15-ans.png" alt="Plus de 15 ans" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
