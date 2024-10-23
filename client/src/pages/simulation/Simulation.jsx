// import React, { useState } from "react";
// import RegisterForm from "../../components/auth/RegisterForm";

// const Simulation = () => {
//   const [selections, setSelections] = useState({}); // Holds the user selections
//   const objectLength = Object.keys(selections).length;

//   // Handler for radio button selections
//   const handleSelection = (step, itemId, itemName) => {
//     setSelections((prevSelections) => ({
//       ...prevSelections,
//       [step]: { itemName, selectedValue: itemId }, // Store both itemName and selectedValue
//     }));
//   };

//   // Handler for text input changes
//   const handleInputChange = (stepIndex, inputName, value) => {
//     setSelections((prevSelections) => ({
//       ...prevSelections,
//       [stepIndex]: {
//         ...prevSelections[stepIndex],
//         [inputName]: value, // Store input name and value in the selections object
//       },
//     }));
//   };

//   // Function to determine the box style for radio button
//   const getBoxStyle = (step, itemId) => {
//     return selections[step]?.selectedValue === itemId
//       ? "border-2 bg-sky-200 border-slate-400 p-5 m-5"
//       : "p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]";
//   };

//   // Function to calculate progress bar percentage
//   const calculateProgress = () => {
//     const totalSteps = simulationData.length;
//     const completedSteps = Object.keys(selections).length;
//     return `${(completedSteps / totalSteps) * 100}%`;
//   };

//   // Submit handler with POST request
//   const handleSubmit = async () => {
//     try {
//       const response = await fetch("/api.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(selections), // Send the consistent selections object
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Success:", data);
//         alert("Form submitted successfully!");
//       } else {
//         console.error("Error:", response.statusText);
//         alert("Failed to submit the form.");
//       }
//     } catch (error) {
//       console.error("Request failed:", error);
//       alert("An error occurred while submitting the form.");
//     }
//   };

//   return (
//     <div>
//       {/* Progress Bar */}
//       <div className="fixed top-0 left-0 right-0 h-2">
//         <div
//           className="bg-blue-500 h-full"
//           style={{ width: calculateProgress() }}
//         ></div>
//       </div>

//       {/*  Content */}
//       <div className="flex gap-32 p-10">
//         {/* Sidebar Progress */}
//         <div className="w-2/5">
//           <h2 className="font-semibold text-xl mb-4">Votre parcours</h2>
//           <div className="flex flex-col  ">
//             {/* Step 1 - Completed */}
//             <div className="flex items-center space-x-3 ">
//               <div className="flex flex-col items-center">
//                 <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">
//                   <svg
//                     className="w-3 h-3"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 13l4 4L19 7"
//                     ></path>
//                   </svg>
//                 </div>
//                 <div className="h-10  border-l border-blue-400"></div>
//               </div>
//               <span className=" mb-10">Votre logement</span>
//             </div>

//             {/* Step 2 - Incomplete */}
//             <div className="flex items-center space-x-3">
//               <div className="flex flex-col items-center">
//                 <div className="w-4 h-4 rounded-full border-2 border-blue-400"></div>
//                 <div className="h-10  border-l border-blue-400"></div>
//               </div>
//               <span className="text-gray-800 mb-10">Votre projet</span>
//             </div>

//             {/* Step 3 - Incomplete */}
//             <div className="flex items-center space-x-3">
//               <div className="flex flex-col items-center">
//                 <div className="w-4 h-4 rounded-full border-2 border-blue-400"></div>
//                 <div className="h-10 border-l border-blue-400"></div>
//               </div>
//               <span className="text-gray-800 mb-10">Vos informations</span>
//             </div>

//             {/* Step 4 - Incomplete */}
//             <div className="flex items-center space-x-3">
//               <div className="flex flex-col items-center">
//                 <div className="w-4 h-4  rounded-full border-2 border-blue-400"></div>
//               </div>
//               <span className="text-gray-800 ">Votre devis et vos aides</span>
//             </div>
//           </div>
//         </div>
//         {/* Form content */}
//         <div>
//           <h1 className="font-bold text-center text-xl">
//             Réalisons ensemble votre devis assurance habitation sur mesure en
//             quelques minutes. C’est parti !
//           </h1>
//           <div>
//             {simulationData.map((stepData, stepIndex) => (
//               <div
//                 key={stepIndex}
//                 className={`my-10 p-5 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
//                   ${
//                     stepIndex <= objectLength ? "block" : "hidden"
//                   } // Show current and previous steps, hide future steps
//               `}
//               >
//                 <h2 className="font-bold">{stepData.category}</h2>
//                 <p>{stepData.categoryDes}</p>

//                 <div className="grid sm:grid-cols-2">
//                   {stepData.items.map((item, itemIndex) => (
//                     <div
//                       key={itemIndex}
//                       className={
//                         item.inputType === "radio"
//                           ? getBoxStyle(stepIndex, item.Id)
//                           : null
//                       }
//                       onClick={() =>
//                         item.inputType === "radio" &&
//                         handleSelection(stepIndex, item.Id, item.itemName)
//                       }
//                     >
//                       {item.inputType === "radio" ? (
//                         <div className="flex items-center flex-col">
//                           <div className="flex gap-4 items-center">
//                             <input
//                               className="w-6 h-6"
//                               name={`step-${stepIndex}`} // Grouping radio buttons per step
//                               type="radio"
//                               checked={
//                                 selections[stepIndex]?.selectedValue === item.Id
//                               } // Check if this item is selected
//                               onChange={() =>
//                                 handleSelection(
//                                   stepIndex,
//                                   item.Id,
//                                   item.itemName
//                                 )
//                               }
//                             />
//                             <h3 className="text-center  rounded-full p-3">
//                               {item.itemName}
//                             </h3>
//                           </div>
//                           <p>{item.itemDes}</p>
//                           {item.icon && (
//                             <img
//                               className="w-24 h-24"
//                               src={item.icon}
//                               alt={item.itemName}
//                             />
//                           )}
//                         </div>
//                       ) : (
//                         <div className="flex flex-col px-2 py-2 items-center justify-center">
//                           <h2 className="font-bold">{item.itemName}</h2>
//                           <p>{item.itemDes}</p>
//                           <input
//                             className="border-2 p-2 w-full rounded-md border-gray-500"
//                             placeholder={item.itemName}
//                             type={item.inputType}
//                             value={selections[stepIndex]?.[item.itemName] || ""}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 stepIndex,
//                                 item.itemName,
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//             {/* Submit Button  */}
//             <div className="flex justify-center mt-8">
//               {objectLength === simulationData.length && (
//                 <button
//                   className="bg-blue-500 text-white px-6 py-2 rounded-lg"
//                   onClick={handleSubmit}
//                 >
//                   Submit
//                 </button>
//               )}
//             </div>
//             {/* Register Form */}
//             <div>
//               {objectLength === simulationData.length && (
//                 <div className="m-10">
//                   <h3 className="font-bold text-center text-xl my-2">
//                     Souhaitez-vous créer ou recevoir vos résultats par mail
//                     ?N'attendez pas plus, créez votre compte en une minute !
//                   </h3>
//                   <RegisterForm />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const simulationData = [
//   {
//     category: "Quel est votre besoin?",
//     categoryDes:
//       " Si le besoin est multiple alors il faudra réaliser 2 simulations. Avant de vous lancer dans des projets de travaux de rénovation, contactez le conseiller France Rénov’ le plus proche de chez vous et profitez gratuitement de ses conseils personnalisés pour mener à bien votre projet.",
//     items: [
//       {
//         inputType: "radio",
//         itemName: "Rénovation énergétique",
//         itemDes:
//           "Réduire ma facture d'énergie ou améliorer le confort de mon logement - Rénovation énergétique.",
//         icon: "/assets/Rénovation-énergétique.png",
//         Id: "cat1-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "Sécurité / Salubrité",
//         itemDes:
//           "Mettre mon logement aux normes de sécurité et de salubrité - Sécurité, salubrité.",
//         icon: "/assets/Sécurité.png",
//         Id: "cat1-item2",
//       },
//       {
//         inputType: "radio",
//         itemName: "Autonomie de la personne",
//         itemDes:
//           "Adapter mon logement au vieillissement ou à une situation de handicap - Autonomie.",
//         icon: "/assets/Autonomie-de-a-personne.png",
//         Id: "cat1-item3",
//       },
//     ],
//   },
//   {
//     category: "Vous êtes?",
//     categoryDes: null,
//     items: [
//       {
//         inputType: "radio",
//         itemName: "Propriétaire occupant",
//         itemDes: null,
//         icon: "/assets/Propriétaire-occupant.png",
//         Id: "cat2-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "Propriétaire bailleur",
//         itemDes: null,
//         icon: "/assets/Propriétaire-bailleur.png",
//         Id: "cat2-item2",
//       },
//       {
//         inputType: "radio",
//         itemName: "Syndicat de copropriétaires",
//         itemDes: null,
//         icon: "/assets/Syndicat-de-copropriétaires.png",
//         Id: "cat2-item3",
//       },
//     ],
//   },
//   {
//     category: "Avez-vous une maison ou un appartement?",
//     categoryDes: null,
//     items: [
//       {
//         inputType: "radio",
//         itemName: "Maison",
//         itemDes: null,
//         icon: "/assets/maison.png",
//         Id: "cat3-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "Appartement",
//         itemDes: null,
//         icon: "/assets/appartement.png",
//         Id: "cat3-item2",
//       },
//     ],
//   },
//   {
//     category:
//       "Occupez-vous votre logement à titre de résidence principale ou secondaire ?",
//     categoryDes: null,
//     items: [
//       {
//         inputType: "radio",
//         itemName: "Résidence principale",
//         itemDes: null,
//         icon: "/assets/Résidence-principale.png",
//         Id: "cat4-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "Résidence secondaire",
//         itemDes: null,
//         icon: "/assets/Résidence-secondaire.png",
//         Id: "cat4-item2",
//       },
//     ],
//   },
//   {
//     category: "Votre logement a été construit il y a:",
//     categoryDes: null,
//     items: [
//       {
//         inputType: "radio",
//         itemName: "Maison de 2 ans",
//         itemDes: null,
//         icon: "/assets/Maison-de-2-ans.png",
//         Id: "cat5-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "Entre 2 et 15 ans",
//         itemDes: null,
//         icon: "/assets/Entre-2-et-15-ans.png",
//         Id: "cat5-item2",
//       },
//       {
//         inputType: "radio",
//         itemName: "Plus de 15 ans",
//         itemDes: null,
//         icon: "/assets/Plus-de-15-ans.png",
//         Id: "cat5-item3",
//       },
//     ],
//   },
//   {
//     category: "Merci, quelle est l'addresse du logement pour votre projet?",
//     categoryDes: "Tous les champs sont obligatoires",
//     items: [
//       {
//         inputType: "text",
//         itemName: "Addresse",
//         itemDes: null,
//         icon: null,
//         Id: "cat6-item1",
//       },
//       {
//         inputType: "text",
//         itemName: "Ville",
//         itemDes: null,
//         icon: null,
//         Id: "cat6-item2",
//       },
//       {
//         inputType: "number",
//         itemName: "Code postral",
//         itemDes: null,
//         icon: null,
//         Id: "cat6-item3",
//       },
//     ],
//   },
//   {
//     category: "Quelle est la note DPE de votre logement?",
//     categoryDes:
//       "Cette information nous permettra d'estimer plus précisement les aides pour votre projet.",
//     items: [
//       {
//         inputType: "radio",
//         itemName: "A",
//         itemDes: "Etiquette",
//         icon: "/assets/maison.png",
//         Id: "cat7-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "B",
//         itemDes: "Etiquette",
//         icon: "/assets/maison.png",
//         Id: "cat7-item2",
//       },
//       {
//         inputType: "radio",
//         itemName: "C",
//         itemDes: "Etiquette",
//         icon: "/assets/maison.png",
//         Id: "cat7-item3",
//       },
//       {
//         inputType: "radio",
//         itemName: "D",
//         itemDes: "Etiquette",
//         icon: "/assets/maison.png",
//         Id: "cat7-item4",
//       },
//       {
//         inputType: "radio",
//         itemName: "E",
//         itemDes: "Etiquette",
//         icon: "/assets/maison.png",
//         Id: "cat7-item5",
//       },
//       {
//         inputType: "radio",
//         itemName: "F",
//         itemDes: "Etiquette",
//         icon: "/assets/maison.png",
//         Id: "cat7-item6",
//       },
//       {
//         inputType: "radio",
//         itemName: "G",
//         itemDes: "Etiquette",
//         icon: "/assets/maison.png",
//         Id: "cat7-item7",
//       },
//       {
//         inputType: "radio",
//         itemName: "?",
//         itemDes: "Je ne sais pas",
//         icon: "/assets/question.png",
//         Id: "cat7-item8",
//       },
//     ],
//   },
//   {
//     category: "Quelle est votre situation financiére?",
//     categoryDes:
//       "Ces informations vous sont demandées pour définir votre éligibilité aux aides France Rénov",
//     items: [
//       {
//         inputType: "text",
//         inputLabel: "Revenu fiscal de référence du foyer :*",
//         itemName: "Revenu fiscal",
//         itemDes: null,
//         icon: null,
//         Id: "cat8-item1",
//       },
//       {
//         inputType: "number",
//         inputLabel: "Nombre de personnes composant le foyer :*",
//         itemName: "Nombre de personnes",
//         itemDes: null,
//         icon: null,
//         Id: "cat8-item2",
//       },
//       {
//         inputType: "number",
//         itemName:
//           "Quel est le nombre de logements constituant votre copropriété ?",
//         itemDes: null,
//         icon: null,
//         Id: "cat8-item4",
//       },
//       {
//         inputType: "number",
//         itemName:
//           "Quel est le nombre de logements dédiés à l’usage de l’habitation principale ?",
//         itemDes: null,
//         icon: null,
//         Id: "cat8-item5",
//       },
//       {
//         inputType: "text",
//         itemName:
//           "La copropriété est immatriculée et à jour annuellement au registre national des copropriétés:",
//         itemDes: null,
//         icon: null,
//         Id: "cat8-item6",
//       },
//       {
//         inputType: "text",
//         itemName:
//           "Le taux d’impayés par rapport au budget de l’année N-2 est supérieur à 8%:",
//         itemDes: null,
//         icon: null,
//         Id: "cat8-item7",
//       },
//       {
//         inputType: "text",
//         itemName:
//           "La copropriété est-elle située dans un quartier NPNRU*: Nouveau",
//         itemDes: null,
//         icon: null,
//         Id: "cat8-item8",
//       },
//     ],
//   },
//   {
//     category: "Vous êtes?",
//     categoryDes: null,
//     items: [
//       {
//         inputType: "radio",
//         itemName:
//           "Je m'engage à louer votre logement à des locataires aux revenus modestes (pas un membre de ma famille ou de mon foyer fiscal).",
//         itemDes: null,
//         icon: null,
//         Id: "cat9-item1",
//       },
//       {
//         inputType: "radio",
//         itemName:
//           "Je suis prêt à louer mon bien avec un niveau de loyer plafonné.",
//         itemDes: null,
//         icon: null,
//         Id: "cat9-item2",
//       },
//       {
//         inputType: "radio",
//         itemName:
//           "Mon logement sera loué à usage de résidence principale de locataire.",
//         itemDes: null,
//         icon: null,
//         Id: "cat9-item3",
//       },
//     ],
//   },
//   {
//     category:
//       "L'un des membres de votre foyer correspond-il aux critères suivants ?*",
//     categoryDes: "Plusieurs réponses possibles",
//     items: [
//       {
//         inputType: "radio",
//         itemName:
//           "Âgé de 60 à 69 ans sur conditions de GIR (groupe iso-ressources de 1 à 6)",
//         itemDes: null,
//         icon: null,
//         Id: "cat10-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "Âgé de 70 ans ou plus",
//         itemDes: null,
//         icon: null,
//         Id: "cat10-item2",
//       },
//       {
//         inputType: "radio",
//         itemName:
//           "A un taux d'incapacité égal ou supérieur à 50% ou bénéficie de la Prestation de Compensation du Handicap (PCH)",
//         itemDes: null,
//         icon: null,
//         Id: "cat10-item3",
//       },
//       {
//         inputType: "radio",
//         itemName: "Aucune de ces situations",
//         itemDes: null,
//         icon: null,
//         Id: "cat10-item4",
//       },
//     ],
//   },
//   {
//     category: "Isolation?",
//     categoryDes: null,
//     items: [
//       {
//         inputType: "radio",
//         itemName: "Isolation des combles",
//         itemDes: null,
//         icon: "/assets/isolation-des-combles.png",
//         Id: "cat11-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "isolation des murs",
//         itemDes: null,
//         icon: "/assets/isolation-des-murs.png",
//         Id: "cat11-item2",
//       },
//       {
//         inputType: "radio",
//         itemName: "Isolation des sol",
//         itemDes: null,
//         icon: "/assets/Isolation-des-sol.jpg",
//         Id: "cat11-item3",
//       },
//       {
//         inputType: "radio",
//         itemName: "Fenêtres/Porte-fenêtres",
//         itemDes: null,
//         icon: "/assets/Fenêtres.jpg",
//         Id: "cat11-item4",
//       },
//       {
//         inputType: "radio",
//         itemName: "Isolation d'une Toiture-Terrasse",
//         itemDes: null,
//         icon: "/assets/Isolation-Terrasse.png",
//         Id: "cat11-item5",
//       },
//     ],
//   },
//   {
//     category: "Pompe à chaleur / chauffage sanitaire",
//     categoryDes: null,
//     items: [
//       {
//         inputType: "radio",
//         itemName: "Pompe à chaleur Air/eau",
//         itemDes: null,
//         icon: "/assets/Pompe-à-chaleur-air.png",
//         Id: "cat12-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "Pompe à chaleur Air/eau",
//         itemDes: null,
//         icon: "/assets/Pompe-à-chaleur-eau.png",
//         Id: "cat12-item2",
//       },
//       {
//         inputType: "radio",
//         itemName: "Pompe à chaleur géothermique",
//         itemDes: null,
//         icon: "/assets/Pompe-à-chaleur-géothermique.png",
//         Id: "cat12-item3",
//       },
//       {
//         inputType: "radio",
//         itemName: "Pompe à chaleur hybride",
//         itemDes: null,
//         icon: "/maison.png",
//         Id: "cat12-item4",
//       },
//     ],
//   },
//   {
//     category: "Chauffage traditionnel",
//     categoryDes: null,
//     items: [
//       {
//         inputType: "radio",
//         itemName: "Chaudière fioul à condensation",
//         itemDes: null,
//         icon: "/assets/Chaudière-fioul-à-condensation.png",
//         Id: "cat13-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "Chaudière gaz à condensation",
//         itemDes: null,
//         icon: "/assets/Chaudière-gaz-à-condensation.png",
//         Id: "cat13-item2",
//       },
//       {
//         inputType: "radio",
//         itemName: "Chaudière au charbon à condensation",
//         itemDes: null,
//         icon: "/assets/Chaudière-au-charbon-à-condensation.png",
//         Id: "cat13-item3",
//       },
//     ],
//   },
//   {
//     category: "Chauffage à bois",
//     categoryDes: null,
//     items: [
//       {
//         inputType: "radio",
//         itemName: "Chaudière bois à bûches",
//         itemDes: null,
//         icon: "/assets/Chaudière-bois-à-bûches.png",
//         Id: "cat14-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "Chaudière bois à granulés/plaquettes",
//         itemDes: null,
//         icon: "/assets/Chaudière-bois-à-plaquettes.png",
//         Id: "cat14-item2",
//       },
//       {
//         inputType: "radio",
//         itemName: "Insert à bûches ou granulés",
//         itemDes: null,
//         icon: "/assets/Insert-à-bûches-ou-granulés.png",
//         Id: "cat14-item3",
//       },
//       {
//         inputType: "radio",
//         itemName: "Poêle à bûches ou granulés",
//         itemDes: null,
//         icon: "/assets/Poêle-à-bûches-ou-granulés.png",
//         Id: "cat14-item4",
//       },
//     ],
//   },
//   {
//     category: "Système solaire",
//     categoryDes: null,
//     items: [
//       {
//         inputType: "radio",
//         itemName: "Panneaux solaires photovoltaïques",
//         itemDes: null,
//         icon: "/assets/Panneaux-solaires-photovoltaïques.jpg",
//         Id: "cat15-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "Système solaire combiné",
//         itemDes: null,
//         icon: "/assets/Système-solaire-combiné.png",
//         Id: "cat15-item2",
//       },
//       {
//         inputType: "radio",
//         itemName: "Chauffe-eau thermodynamique",
//         itemDes: null,
//         icon: "/assets/Chauffe-eau-thermodynamique.png",
//         Id: "cat15-item3",
//       },
//       {
//         inputType: "radio",
//         itemName: "Chauffe-eau solaire individuel",
//         itemDes: null,
//         icon: "/assets/Chauffe-eau-solaire-individuel.jpg",
//         Id: "cat15-item4",
//       },
//     ],
//   },
//   {
//     category: null,
//     categoryDes: null,
//     items: [
//       {
//         inputType: "radio",
//         itemName:
//           "Je souhaite remplacer une chaudière individuelle au charbon, au fioul ou au gaz.",
//         itemDes: null,
//         icon: null,
//         Id: "cat16-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "Non, je ne souhaite effectuer aucun remplacement.",
//         itemDes: null,
//         icon: null,
//         Id: "cat16-item2",
//       },
//     ],
//   },
//   {
//     category: "Isolation des murs ?",
//     categoryDes: null,
//     items: [
//       {
//         inputType: "radio",
//         itemName: "Isolation intérieure",
//         itemDes: null,
//         icon: "/assets/Isolation-intérieure.png",
//         Id: "cat16-item1",
//       },
//       {
//         inputType: "radio",
//         itemName: "Isolation extérieure",
//         itemDes: null,
//         icon: "/assets/Isolation-extérieure.png",
//         Id: "cat16-item2",
//       },
//       {
//         inputType: "radio",
//         itemName: "Je ne sais pas",
//         itemDes: null,
//         icon: "/assets/question.png",
//         Id: "cat16-item3",
//       },
//     ],
//   },
//   {
//     category: null,
//     categoryDes: null,
//     items: [
//       {
//         inputType: "number",
//         itemName: "Quelle est la surface approximative de murs à isoler?",
//         itemDes: "Surface en m",
//         icon: null,
//         Id: "cat17-item1",
//       },
//       {
//         inputType: "number",
//         itemName:
//           "Fenêtre/ Portes-fenêtre Combien de fenetres souhaitez-vous remplacer?",
//         itemDes: "Nombre total de Fenêtre/ Portes-fenêtres",
//         icon: null,
//         Id: "cat17-item2",
//       },
//       {
//         inputType: "number",
//         itemName:
//           "isolation des murs Quelle est la surface approximative de combles à isoler?",
//         itemDes: "Nombre total de Fenêtre/ Portes-fenêtres",
//         icon: null,
//         Id: "cat17-item3",
//       },
//       {
//         inputType: "number",
//         itemName:
//           "Isolation des toitures terrasses Quelle est la surface toiture terrasse à isoler?",
//         itemDes: "Nombre total de Fenêtre/ Portes-fenêtres",
//         icon: null,
//         Id: "cat17-item4",
//       },
//     ],
//   },
//   {
//     category: null,
//     categoryDes: null,
//     items: [
//       {
//         inputType: "text",
//         itemName:
//           "Avez-vous une estimation du montant des travaux à réaliser ?",
//         itemDes: null,
//         icon: null,
//         Id: "cat17-item1",
//       },
//       {
//         inputType: "text",
//         itemName: "Quel est le montant estimatif des travaux ?",
//         itemDes: null,
//         icon: null,
//         Id: "cat17-item2",
//       },
//     ],
//   },
// ];

// export default Simulation;

import React, { useState } from "react";
import Register from "../auth/Register";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Simulation = () => {
  const [selections, setSelections] = useState({}); // Holds the user selections
  const [currentStep, setCurrentStep] = useState(0); // Tracks the current step
  const [suggestions, setSuggestions] = useState([]); // Holds address suggestions
  const objectLength = Object.keys(selections).length;
  console.log("objections", objectLength);
  const user = JSON.parse(localStorage.getItem("userDetails"));
  console.log("user", user?._id);
  const navigate = useNavigate();

  // Handler for radio button selections
  const handleSelection = (step, itemId, itemName) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [step]: { itemName, selectedValue: itemId }, // Store both itemName and selectedValue
    }));

    // Automatically move to the next step after selection if not the last step
    if (step < simulationData.length - 1) {
      setCurrentStep(step + 1);
    }
  };

  // Handler for text input changes
  const handleInputChange = (stepIndex, inputName, value) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [stepIndex]: {
        ...prevSelections[stepIndex],
        [inputName]: value, // Store input name and value in the selections object
      },
    }));
    if (inputName.toLowerCase().includes("address")) {
      fetchSuggestions(value);
    }
  };

  //fetch address suggestions
  const fetchSuggestions = async (query) => {
    if (!query.trim()) {
      setSuggestions([]); // Clear suggestions if input is empty
      return;
    }

    try {
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
          query
        )}&limit=5`
      );
      const data = await response.json();
      setSuggestions(data.features.map((feature) => feature.properties.label));
    } catch (error) {
      console.error("Error fetching address suggestions:", error);
    }
  };

  // update suggestion address in form
  const handleSuggestionClick = (suggestion, stepIndex, itemName) => {
    handleInputChange(stepIndex, itemName, suggestion);
    // Clear the suggestions array after selection
    setSuggestions([]);
  };

  // Handle "Next" button click for text input steps
  const handleNext = () => {
    if (currentStep < simulationData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Handle "Back" button click
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Function to determine the box style for radio buttons
  const getBoxStyle = (step, itemId) => {
    return selections[step]?.selectedValue === itemId
      ? "border-2 bg-sky-200 border-slate-400 p-5 m-5"
      : "p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]";
  };

  // Function to calculate progress bar percentage
  const calculateProgress = () => {
    const totalSteps = simulationData.length - 1;
    // const completedSteps = Object.keys(selections).length;
    return `${(currentStep / totalSteps) * 100}%`;
  };

  const handleSubmit = async () => {
    try {
      // Map the selections to the format expected by the backend
      const transformedData = mapSelectionsToBackend(selections);

      // Check if user is not registered
      if (!user?._id) {
        toast.error("Register before submitting the form!"); // Corrected error message
        return; // Early return to prevent further execution
      }

      const response = await fetch(
        "http://localhost:3001/api/simulation/prime-renov",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transformedData), // Send the transformed data
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success("Form submitted successfully!");
        navigate('/dashboard');
      } else {
        toast.error("Failed to submit the form!");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    }
  };

  // Function to map selections to the required backend format
  const mapSelectionsToBackend = (selections) => {
    return {
      user: user?._id, // Example static user ID
      typeSimulation: "renovation",
      typeBenef: selections[1]?.itemName || "",
      typeLogement: selections[2]?.itemName || "",
      natureResidence: selections[3]?.itemName || "",
      dureeConstruction: selections[4]?.itemName || "",
      occupation8: selections[6]?.selectedValue === "cartL-1", // True if selected 'Yes'
      adresse: selections[5]?.Addresse || "",
      ville: "Paris", // Extract from the address
      codePostal: "75000", // Hardcoded example, ideally extracted from the address
      region: "Île-de-France", // Hardcoded region, ideally extracted dynamically
      nbPers: parseInt(selections[8]?.["Ecrit nbbers "], 10) || 0,
      revenuFiscal: parseInt(selections[9]?.["Revenu Fiscal "], 10) || 0,
      dpeLogement: selections[7]?.itemName || "",
      travaux: parseInt(selections[10]?.Travaux, 10) || 0,
    };
  };

  return (
    <div className="h-auto sm:h-screen overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-2">
        <div
          className="bg-blue-500 h-full"
          style={{ width: calculateProgress() }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="flex gap-10 p-10">
        {/* Sidebar Progress */}
        <div className="w-2/5 hidden lg:block">
          <h2 className="font-semibold text-xl mb-4">Votre parcours</h2>
          <div className="flex flex-col  ">
            {/* Step 1 - Completed */}
            <div className="flex items-center space-x-3 ">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="h-10  border-l border-blue-400"></div>
              </div>
              <span className=" mb-10">Votre logement</span>
            </div>

            {/* Step 2 - Incomplete */}
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-center">
                <div
                  className={`${
                    Object.values(selections).some(
                      (selection) => selection.itemName === "Entre 2 et 15 ans"
                    )
                      ? "bg-blue-500 w-4 h-4 rounded-full  text-white flex items-center justify-center"
                      : "w-4 h-4 rounded-full border-2 border-blue-400 text-white"
                  }`}
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="h-10  border-l border-blue-400"></div>
              </div>
              <span className="text-gray-800 mb-10">Votre projet</span>
            </div>

            {/* Step 3 - Incomplete */}
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-center">
                <div
                  className={`${
                    Object.values(selections).some(
                      (selection) => selection.itemName === "Entre 2 et 15 ans"
                    )
                      ? "bg-blue-500 w-4 h-4 rounded-full  text-white flex items-center justify-center"
                      : "w-4 h-4 rounded-full border-2 border-blue-400 text-white"
                  }`}
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="h-10  border-l border-blue-400"></div>
              </div>
              <span className="text-gray-800 mb-10">Vos informations</span>
            </div>

            {/* Step 4 - Incomplete */}
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-center">
                <div
                  className={`${
                    Object.values(selections).some(
                      (selection) => selection.itemName === "Entre 2 et 15 ans"
                    )
                      ? "bg-blue-500 w-4 h-4 rounded-full  text-white flex items-center justify-center"
                      : "w-4 h-4 rounded-full border-2 border-blue-400 text-white"
                  }`}
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <span className="text-gray-800">Votre devis et vos aides</span>
            </div>
          </div>
        </div>

        {/* Form content */}
        <div className="w-full h-full">
          <h1 className="font-bold text-center text-xl">
            Réalisons ensemble votre devis assurance habitation sur mesure en
            quelques minutes. C’est parti !
          </h1>
          {/* Form Steps */}
          <div className="  h-full sm:h-96  overflow-y-scroll ">
            {simulationData.map((stepData, stepIndex) => (
              <div
                key={stepIndex}
                className={`p-5 rounded-lg border-2 border-white shadow-md ${
                  stepIndex === currentStep ? "block" : "hidden"
                }`}
              >
                <span className="font-bold">{stepData.category}</span>
                <p>{stepData.categoryDes}</p>

                <div className="grid sm:grid-cols-2">
                  {stepData.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={
                        item.inputType === "radio"
                          ? getBoxStyle(stepIndex, item.Id)
                          : null
                      }
                      onClick={() =>
                        item.inputType === "radio" &&
                        handleSelection(stepIndex, item.Id, item.itemName)
                      }
                    >
                      {item.inputType === "radio" ? (
                        <div className="flex items-center flex-col">
                          <div className="flex gap-4 items-center">
                            <input
                              className="w-6 h-6"
                              name={`step-${stepIndex}`} // Grouping radio buttons per step
                              type="radio"
                              checked={
                                selections[stepIndex]?.selectedValue === item.Id
                              }
                              onChange={() =>
                                handleSelection(
                                  stepIndex,
                                  item.Id,
                                  item.itemName
                                )
                              }
                            />
                            <h3 className="text-center rounded-full p-3">
                              {item.itemName}
                            </h3>
                          </div>
                          <p>{item.itemDes}</p>
                          {item.icon && (
                            <img
                              className="w-24 h-24"
                              src={item.icon}
                              alt={item.itemName}
                            />
                          )}
                        </div>
                      ) : (
                        <div className="flex flex-col px-2 py-2 items-center justify-center">
                          <h2 className="font-bold">{item.itemName}</h2>
                          <p>{item.itemDes}</p>
                          <input
                            className="border-2 p-2 w-full rounded-md border-gray-500"
                            placeholder={item.itemName}
                            type={item.inputType}
                            value={selections[stepIndex]?.[item.itemName] || ""}
                            onChange={(e) =>
                              handleInputChange(
                                stepIndex,
                                item.itemName,
                                e.target.value
                              )
                            }
                          />
                          {/* Display suggestions */}
                          {suggestions.length > !0 && (
                            <ul className="bg-white border border-gray-300 rounded-md mt-1 w-full">
                              {suggestions.map((suggestion, index) => (
                                <li
                                  key={index}
                                  className="p-2 cursor-pointer hover:bg-gray-200"
                                  onClick={() =>
                                    handleSuggestionClick(
                                      suggestion,
                                      stepIndex,
                                      item.itemName
                                    )
                                  }
                                >
                                  {suggestion}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Buttons */}
          <div className="sticky w-full flex items-center justify-center bottom-0 bg-white">
            {/* Back and Next/Submit Buttons */}
            <div className="flex gap-3 items-center justify-center">
              {/* Back Button */}
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium px-10 py-3 rounded-full bg-gray-300 text-black transition-all duration-300"
                >
                  Back
                </button>
              )}

              {/* Conditional Next or Submit Button */}
              {currentStep < simulationData.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium px-10 py-3 rounded-full bg-sky-500 text-white transition-all duration-300"
                >
                  Next
                </button>
              ) : (
                <button
                  className="bg-green-500 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium px-10 py-3 rounded-full  text-white transition-all duration-300"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const user = JSON.parse(localStorage.getItem("userDetails"));

const simulationData = [
  {
    category: "Quel est votre besoin?",
    categoryDes:
      " Si le besoin est multiple alors il faudra réaliser 2 simulations. Avant de vous lancer dans des projets de travaux de rénovation, contactez le conseiller France Rénov’ le plus proche de chez vous et profitez gratuitement de ses conseils personnalisés pour mener à bien votre projet.",
    items: [
      {
        inputType: "radio",
        itemName: "Rénovation énergétique",
        itemDes:
          "Réduire ma facture d'énergie ou améliorer le confort de mon logement - Rénovation énergétique.",
        icon: "/assets/Rénovation-énergétique.png",
        Id: "cat1-item1",
      },
      {
        inputType: "radio",
        itemName: "Sécurité / Salubrité",
        itemDes:
          "Mettre mon logement aux normes de sécurité et de salubrité - Sécurité, salubrité.",
        icon: "/assets/Sécurité.png",
        Id: "cat1-item2",
      },
      {
        inputType: "radio",
        itemName: "Autonomie de la personne",
        itemDes:
          "Adapter mon logement au vieillissement ou à une situation de handicap - Autonomie.",
        icon: "/assets/Autonomie-de-a-personne.png",
        Id: "cat1-item3",
      },
    ],
  },
  {
    category: "Vous êtes?",
    categoryDes: null,
    items: [
      {
        inputType: "radio",
        itemName: "Propriétaire occupant",
        itemDes: null,
        icon: "/assets/Propriétaire-occupant.png",
        Id: "cat2-item1",
      },
      {
        inputType: "radio",
        itemName: "Propriétaire bailleur",
        itemDes: null,
        icon: "/assets/Propriétaire-bailleur.png",
        Id: "cat2-item2",
      },
      {
        inputType: "radio",
        itemName: "Syndicat de copropriétaires",
        itemDes: null,
        icon: "/assets/Syndicat-de-copropriétaires.png",
        Id: "cat2-item3",
      },
    ],
  },
  {
    category: "Avez-vous une maison ou un appartement?",
    categoryDes: null,
    items: [
      {
        inputType: "radio",
        itemName: "Maison",
        itemDes: null,
        icon: "/assets/maison.png",
        Id: "cat3-item1",
      },
      {
        inputType: "radio",
        itemName: "Appartement",
        itemDes: null,
        icon: "/assets/appartement.png",
        Id: "cat3-item2",
      },
    ],
  },
  {
    category:
      "Occupez-vous votre logement à titre de résidence principale ou secondaire ?",
    categoryDes: null,
    items: [
      {
        inputType: "radio",
        itemName: "Principale",
        itemDes: null,
        icon: "/assets/Résidence-principale.png",
        Id: "cat4-item1",
      },
      {
        inputType: "radio",
        itemName: "Secondaire",
        itemDes: null,
        icon: "/assets/Résidence-secondaire.png",
        Id: "cat4-item2",
      },
    ],
  },
  {
    category: "Votre logement a été construit il y a:",
    categoryDes: null,
    items: [
      {
        inputType: "radio",
        itemName: "Maison de 2 ans",
        itemDes: null,
        icon: "/assets/Maison-de-2-ans.png",
        Id: "cat5-item1",
      },
      {
        inputType: "radio",
        itemName: "Entre 2 et 15 ans",
        itemDes: null,
        icon: "/assets/Entre-2-et-15-ans.png",
        Id: "cat5-item2",
      },
      {
        inputType: "radio",
        itemName: "Plus de 15 ans",
        itemDes: null,
        icon: "/assets/Plus-de-15-ans.png",
        Id: "cat5-item3",
      },
    ],
  },
  {
    category: "Merci, quelle est l'addresse du logement pour votre projet?",
    categoryDes: "Tous les champs sont obligatoires",
    items: [
      {
        inputType: "text",
        itemName: "Addresse",
        itemDes: null,
        icon: null,
        Id: "cat6-item1",
      },
    ],
  },
  {
    category: "Est ce que vous êtes travailliez ?",
    categoryDes: null,
    items: [
      {
        inputType: "radio",
        itemName: "Yes",
        itemDes: null,
        icon: null,
        Id: "cartL-1",
      },
      {
        inputType: "radio",
        itemName: "No",
        itemDes: null,
        icon: null,
        Id: "cartL-2",
      },
    ],
  },
  {
    category: "Quelle est la note DPE de votre logement?",
    categoryDes:
      "Cette information nous permettra d'estimer plus précisement les aides pour votre projet.",
    items: [
      {
        inputType: "radio",
        itemName: "A",
        itemDes: "Etiquette",
        icon: "/assets/maison.png",
        Id: "cat7-item1",
      },
      {
        inputType: "radio",
        itemName: "B",
        itemDes: "Etiquette",
        icon: "/assets/maison.png",
        Id: "cat7-item2",
      },
      {
        inputType: "radio",
        itemName: "C",
        itemDes: "Etiquette",
        icon: "/assets/maison.png",
        Id: "cat7-item3",
      },
      {
        inputType: "radio",
        itemName: "D",
        itemDes: "Etiquette",
        icon: "/assets/maison.png",
        Id: "cat7-item4",
      },
      {
        inputType: "radio",
        itemName: "E",
        itemDes: "Etiquette",
        icon: "/assets/maison.png",
        Id: "cat7-item5",
      },
      {
        inputType: "radio",
        itemName: "F",
        itemDes: "Etiquette",
        icon: "/assets/maison.png",
        Id: "cat7-item6",
      },
      {
        inputType: "radio",
        itemName: "G",
        itemDes: "Etiquette",
        icon: "/assets/maison.png",
        Id: "cat7-item7",
      },
      {
        inputType: "radio",
        itemName: "?",
        itemDes: "Je ne sais pas",
        icon: "/assets/question.png",
        Id: "cat7-item8",
      },
    ],
  },
  {
    category: null,
    categoryDes: null,
    items: [
      {
        inputType: "number",
        inputLabel: "Ecrit nbbers :*",
        itemName: "Ecrit nbbers ",
        itemDes: null,
        icon: null,
        Id: "cartO-item1",
      },
    ],
  },
  {
    category: null,
    categoryDes: null,
    items: [
      {
        inputType: "number",
        inputLabel: "Revenu Fiscal :*",
        itemName: "Revenu Fiscal ",
        itemDes: null,
        icon: null,
        Id: "cartM-item1",
      },
    ],
  },
  {
    category: null,
    categoryDes: null,
    items: [
      {
        inputType: "number",
        inputLabel: "Travaux :*",
        itemName: "Travaux",
        itemDes: null,
        icon: null,
        Id: "cartL-item1",
      },
    ],
  },
  // {
  //   category: "Quelle est votre situation financiére?",
  //   categoryDes:
  //     "Ces informations vous sont demandées pour définir votre éligibilité aux aides France Rénov",
  //   items: [
  //     {
  //       inputType: "text",
  //       inputLabel: "Revenu fiscal de référence du foyer :*",
  //       itemName: "Revenu fiscal",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat8-item1",
  //     },
  //     {
  //       inputType: "number",
  //       inputLabel: "Nombre de personnes composant le foyer :*",
  //       itemName: "Nombre de personnes",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat8-item2",
  //     },
  //     {
  //       inputType: "number",
  //       itemName:
  //         "Quel est le nombre de logements constituant votre copropriété ?",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat8-item4",
  //     },
  //     {
  //       inputType: "number",
  //       itemName:
  //         "Quel est le nombre de logements dédiés à l’usage de l’habitation principale ?",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat8-item5",
  //     },
  //     {
  //       inputType: "text",
  //       itemName:
  //         "La copropriété est immatriculée et à jour annuellement au registre national des copropriétés:",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat8-item6",
  //     },
  //     {
  //       inputType: "text",
  //       itemName:
  //         "Le taux d’impayés par rapport au budget de l’année N-2 est supérieur à 8%:",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat8-item7",
  //     },
  //     {
  //       inputType: "text",
  //       itemName:
  //         "La copropriété est-elle située dans un quartier NPNRU*: Nouveau",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat8-item8",
  //     },
  //   ],
  // },
  // {
  //   category: "Vous êtes?",
  //   categoryDes: null,
  //   items: [
  //     {
  //       inputType: "radio",
  //       itemName:
  //         "Je m'engage à louer votre logement à des locataires aux revenus modestes (pas un membre de ma famille ou de mon foyer fiscal).",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat9-item1",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName:
  //         "Je suis prêt à louer mon bien avec un niveau de loyer plafonné.",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat9-item2",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName:
  //         "Mon logement sera loué à usage de résidence principale de locataire.",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat9-item3",
  //     },
  //   ],
  // },
  // {
  //   category:
  //     "L'un des membres de votre foyer correspond-il aux critères suivants ?*",
  //   categoryDes: "Plusieurs réponses possibles",
  //   items: [
  //     {
  //       inputType: "radio",
  //       itemName:
  //         "Âgé de 60 à 69 ans sur conditions de GIR (groupe iso-ressources de 1 à 6)",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat10-item1",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Âgé de 70 ans ou plus",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat10-item2",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName:
  //         "A un taux d'incapacité égal ou supérieur à 50% ou bénéficie de la Prestation de Compensation du Handicap (PCH)",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat10-item3",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Aucune de ces situations",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat10-item4",
  //     },
  //   ],
  // },
  // {
  //   category: "Isolation?",
  //   categoryDes: null,
  //   items: [
  //     {
  //       inputType: "radio",
  //       itemName: "Isolation des combles",
  //       itemDes: null,
  //       icon: "/assets/isolation-des-combles.png",
  //       Id: "cat11-item1",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "isolation des murs",
  //       itemDes: null,
  //       icon: "/assets/isolation-des-murs.png",
  //       Id: "cat11-item2",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Isolation des sol",
  //       itemDes: null,
  //       icon: "/assets/Isolation-des-sol.jpg",
  //       Id: "cat11-item3",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Fenêtres/Porte-fenêtres",
  //       itemDes: null,
  //       icon: "/assets/Fenêtres.jpg",
  //       Id: "cat11-item4",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Isolation d'une Toiture-Terrasse",
  //       itemDes: null,
  //       icon: "/assets/Isolation-Terrasse.png",
  //       Id: "cat11-item5",
  //     },
  //   ],
  // },
  // {
  //   category: "Pompe à chaleur / chauffage sanitaire",
  //   categoryDes: null,
  //   items: [
  //     {
  //       inputType: "radio",
  //       itemName: "Pompe à chaleur Air/eau",
  //       itemDes: null,
  //       icon: "/assets/Pompe-à-chaleur-air.png",
  //       Id: "cat12-item1",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Pompe à chaleur Air/eau",
  //       itemDes: null,
  //       icon: "/assets/Pompe-à-chaleur-eau.png",
  //       Id: "cat12-item2",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Pompe à chaleur géothermique",
  //       itemDes: null,
  //       icon: "/assets/Pompe-à-chaleur-géothermique.png",
  //       Id: "cat12-item3",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Pompe à chaleur hybride",
  //       itemDes: null,
  //       icon: "/maison.png",
  //       Id: "cat12-item4",
  //     },
  //   ],
  // },
  // {
  //   category: "Chauffage traditionnel",
  //   categoryDes: null,
  //   items: [
  //     {
  //       inputType: "radio",
  //       itemName: "Chaudière fioul à condensation",
  //       itemDes: null,
  //       icon: "/assets/Chaudière-fioul-à-condensation.png",
  //       Id: "cat13-item1",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Chaudière gaz à condensation",
  //       itemDes: null,
  //       icon: "/assets/Chaudière-gaz-à-condensation.png",
  //       Id: "cat13-item2",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Chaudière au charbon à condensation",
  //       itemDes: null,
  //       icon: "/assets/Chaudière-au-charbon-à-condensation.png",
  //       Id: "cat13-item3",
  //     },
  //   ],
  // },
  // {
  //   category: "Chauffage à bois",
  //   categoryDes: null,
  //   items: [
  //     {
  //       inputType: "radio",
  //       itemName: "Chaudière bois à bûches",
  //       itemDes: null,
  //       icon: "/assets/Chaudière-bois-à-bûches.png",
  //       Id: "cat14-item1",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Chaudière bois à granulés/plaquettes",
  //       itemDes: null,
  //       icon: "/assets/Chaudière-bois-à-plaquettes.png",
  //       Id: "cat14-item2",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Insert à bûches ou granulés",
  //       itemDes: null,
  //       icon: "/assets/Insert-à-bûches-ou-granulés.png",
  //       Id: "cat14-item3",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Poêle à bûches ou granulés",
  //       itemDes: null,
  //       icon: "/assets/Poêle-à-bûches-ou-granulés.png",
  //       Id: "cat14-item4",
  //     },
  //   ],
  // },
  // {
  //   category: "Système solaire",
  //   categoryDes: null,
  //   items: [
  //     {
  //       inputType: "radio",
  //       itemName: "Panneaux solaires photovoltaïques",
  //       itemDes: null,
  //       icon: "/assets/Panneaux-solaires-photovoltaïques.jpg",
  //       Id: "cat15-item1",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Système solaire combiné",
  //       itemDes: null,
  //       icon: "/assets/Système-solaire-combiné.png",
  //       Id: "cat15-item2",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Chauffe-eau thermodynamique",
  //       itemDes: null,
  //       icon: "/assets/Chauffe-eau-thermodynamique.png",
  //       Id: "cat15-item3",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Chauffe-eau solaire individuel",
  //       itemDes: null,
  //       icon: "/assets/Chauffe-eau-solaire-individuel.jpg",
  //       Id: "cat15-item4",
  //     },
  //   ],
  // },
  // {
  //   category: null,
  //   categoryDes: null,
  //   items: [
  //     {
  //       inputType: "radio",
  //       itemName:
  //         "Je souhaite remplacer une chaudière individuelle au charbon, au fioul ou au gaz.",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat16-item1",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Non, je ne souhaite effectuer aucun remplacement.",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat16-item2",
  //     },
  //   ],
  // },
  // {
  //   category: "Isolation des murs ?",
  //   categoryDes: null,
  //   items: [
  //     {
  //       inputType: "radio",
  //       itemName: "Isolation intérieure",
  //       itemDes: null,
  //       icon: "/assets/Isolation-intérieure.png",
  //       Id: "cat16-item1",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Isolation extérieure",
  //       itemDes: null,
  //       icon: "/assets/Isolation-extérieure.png",
  //       Id: "cat16-item2",
  //     },
  //     {
  //       inputType: "radio",
  //       itemName: "Je ne sais pas",
  //       itemDes: null,
  //       icon: "/assets/question.png",
  //       Id: "cat16-item3",
  //     },
  //   ],
  // },
  // {
  //   category: null,
  //   categoryDes: null,
  //   items: [
  //     {
  //       inputType: "number",
  //       itemName: "Quelle est la surface approximative de murs à isoler?",
  //       itemDes: "Surface en m",
  //       icon: null,
  //       Id: "cat17-item1",
  //     },
  //     {
  //       inputType: "number",
  //       itemName:
  //         "Fenêtre/ Portes-fenêtre Combien de fenetres souhaitez-vous remplacer?",
  //       itemDes: "Nombre total de Fenêtre/ Portes-fenêtres",
  //       icon: null,
  //       Id: "cat17-item2",
  //     },
  //     {
  //       inputType: "number",
  //       itemName:
  //         "isolation des murs Quelle est la surface approximative de combles à isoler?",
  //       itemDes: "Nombre total de Fenêtre/ Portes-fenêtres",
  //       icon: null,
  //       Id: "cat17-item3",
  //     },
  //     {
  //       inputType: "number",
  //       itemName:
  //         "Isolation des toitures terrasses Quelle est la surface toiture terrasse à isoler?",
  //       itemDes: "Nombre total de Fenêtre/ Portes-fenêtres",
  //       icon: null,
  //       Id: "cat17-item4",
  //     },
  //   ],
  // },
  // {
  //   category: null,
  //   categoryDes: null,
  //   items: [
  //     {
  //       inputType: "text",
  //       itemName:
  //         "Avez-vous une estimation du montant des travaux à réaliser ?",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat17-item1",
  //     },
  //     {
  //       inputType: "text",
  //       itemName: "Quel est le montant estimatif des travaux ?",
  //       itemDes: null,
  //       icon: null,
  //       Id: "cat17-item2",
  //     },
  //   ],
  // },
  {
    category: user == null ? <Register /> : null,
    categoryDes: null,
    items: [],
  },
];

export default Simulation;
