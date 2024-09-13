// import React from "react";

// const About = () => {
//   return (
//     <div>
//       <section
//         className="relative w-full h-screen bg-cover bg-center flex justify-center items-center"
//         style={{ backgroundImage: `url('/about/bg-img.jpg')` }} // Image from the public folder
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
//           <h1 className="text-5xl text-center font-bold mb-4">
//             Redécouvrons l'énergie au meilleur prix
//           </h1>
//           <p className="text-lg">Néogies votre courtier en énergie.</p>
//         </div>
//       </section>
//       <div className="my-10 max-w-screen-xl m-auto w-full">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold">Pourquoi changer pour ENGIE ?</h2>
//           <p>
//             Vos énergies méritent un fournisseur d'expérience tourné vers
//             l'avenir
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2">
//           <div className="rounded-3xl p-5 m-5 flex flex-col items-center shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] ">
//             <img className="w-20 h-20" src="/about/telecharger.png"></img>
//             <h3 className="text-xl font-bold">
//               Electricité et gaz naturel en toute transparence
//             </h3>
//             <p>
//               Une offre duale avec un prix de marché indexé. Pour le gaz sur
//               l’indice défini par la commission de régulation de l’énergie et
//               pour l’électricité sur le tarif réglementé.
//             </p>
//           </div>
//           <div className="rounded-3xl p-5 m-5 flex flex-col items-center shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] ">
//             <img className="w-20 h-20" src="/about/globe.png"></img>
//             <h3 className="text-xl font-bold">
//               Pour nos énergies renouvelables
//             </h3>
//             <p>
//               Toutes nos offres d'électricité sont vertes, et avec l'option
//               Vert+ choisissez une énergie verte produite en France.
//             </p>
//           </div>
//           <div className="rounded-3xl p-5 m-5 flex flex-col items-center shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] ">
//             <img className="w-20 h-20" src="/about/service-clients.png"></img>
//             <h3 className="text-xl font-bold">
//               Pour notre service client 7 jours sur 7
//             </h3>
//             <p>
//               Disponibles par téléphone et chat, nos conseillers sont là pour
//               répondre à toutes vos questions.
//             </p>
//           </div>
//           <div className="rounded-3xl p-5 m-5 flex flex-col items-center shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] ">
//             <img className="w-20 h-20" src="/about/facile.png"></img>
//             <h3 className="text-xl font-bold">
//               Pour nos options et services si pratiques
//             </h3>
//             <p>
//               Installation, entretien, dépannage, assurances...Nos solutions
//               vous facilitent la vie !
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useState } from "react";

const About = () => {
  const [currentStep, setCurrentStep] = useState(0); // Tracks the current step
  const [selections, setSelections] = useState({}); // Holds the user selections

  console.log("current step", currentStep);


  // Handler for radio button selections
  const handleSelection = (step, itemId, itemName) => {
    console.log("stepindex",step);
    setSelections((prevSelections) => ({
      ...prevSelections,
      [step]: { itemName, selectedValue: itemId }, // Store both itemName and selectedValue
    }));

    // If the current step is not the last step, move to the next one
    if (currentStep < simulationData.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
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
  };

  // Function to determine the box style for radio button
  const getBoxStyle = (step, itemId) => {
    return selections[step]?.selectedValue === itemId
      ? "border-2 bg-sky-200 border-slate-400 p-5 m-5"
      : "p-5 m-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]";
  };

  // Function to calculate progress bar percentage
  const calculateProgress = () => {
    const totalSteps = simulationData.length;
    const completedSteps = Object.keys(selections).length;
    return `${(completedSteps / totalSteps) * 100}%`;
  };

  // Submit handler with POST request
  const handleSubmit = async () => {
    try {
      const response = await fetch("/api.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selections), // Send the consistent selections object
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        alert("Form submitted successfully!");
      } else {
        console.error("Error:", response.statusText);
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Request failed:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-2">
        <div
          className="bg-blue-500 h-full"
          style={{ width: calculateProgress() }}
        ></div>
      </div>

      {/* Form Content */}
      <div className="max-w-screen-md m-auto w-full h-fit flex flex-col px-10 items-center my-10">
        <h1 className="font-bold text-center text-xl">
          Réalisons ensemble votre devis assurance habitation sur mesure en
          quelques minutes. C’est parti !
        </h1>

        <div>
          {simulationData.map((stepData, stepIndex) => (
            <div
              key={stepIndex}
              className={`my-10 p-5 rounded-lg border-2 border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                  ${
                    stepIndex <= currentStep ? "block" : "hidden"
                  } // Show current and previous steps, hide future steps
              `}
            >
              <h2 className="font-bold">{stepData.category}</h2>
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
                            } // Check if this item is selected
                            onChange={() =>
                              handleSelection(stepIndex, item.Id, item.itemName)
                            }
                          />
                          <h3 className="text-center  rounded-full p-3">
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
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-8">
        {currentStep + 1 === simulationData.length && (
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

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
        itemName: "Résidence principale",
        itemDes: null,
        icon: "/assets/Résidence-principale.png",
        Id: "cat4-item1",
      },
      {
        inputType: "radio",
        itemName: "Résidence secondaire",
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
      {
        inputType: "text",
        itemName: "Ville",
        itemDes: null,
        icon: null,
        Id: "cat6-item2",
      },
      {
        inputType: "number",
        itemName: "Code postral",
        itemDes: null,
        icon: null,
        Id: "cat6-item3",
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
    category: "Quelle est votre situation financiére?",
    categoryDes:
      "Ces informations vous sont demandées pour définir votre éligibilité aux aides France Rénov",
    items: [
      {
        inputType: "text",
        inputLabel: "Revenu fiscal de référence du foyer :*",
        itemName: "Revenu fiscal",
        itemDes: null,
        icon: null,
        Id: "cat8-item1",
      },
      {
        inputType: "number",
        inputLabel: "Nombre de personnes composant le foyer :*",
        itemName: "Nombre de personnes",
        itemDes: null,
        icon: null,
        Id: "cat8-item2",
      },
      {
        inputType: "number",
        itemName:
          "Quel est le nombre de logements constituant votre copropriété ?",
        itemDes: null,
        icon: null,
        Id: "cat8-item4",
      },
      {
        inputType: "number",
        itemName:
          "Quel est le nombre de logements dédiés à l’usage de l’habitation principale ?",
        itemDes: null,
        icon: null,
        Id: "cat8-item5",
      },
      {
        inputType: "text",
        itemName:
          "La copropriété est immatriculée et à jour annuellement au registre national des copropriétés:",
        itemDes: null,
        icon: null,
        Id: "cat8-item6",
      },
      {
        inputType: "text",
        itemName:
          "Le taux d’impayés par rapport au budget de l’année N-2 est supérieur à 8%:",
        itemDes: null,
        icon: null,
        Id: "cat8-item7",
      },
      {
        inputType: "text",
        itemName:
          "La copropriété est-elle située dans un quartier NPNRU*: Nouveau",
        itemDes: null,
        icon: null,
        Id: "cat8-item8",
      },
    ],
  },
  {
    category: "Vous êtes?",
    categoryDes: null,
    items: [
      {
        inputType: "radio",
        itemName:
          "Je m'engage à louer votre logement à des locataires aux revenus modestes (pas un membre de ma famille ou de mon foyer fiscal).",
        itemDes: null,
        icon: null,
        Id: "cat9-item1",
      },
      {
        inputType: "radio",
        itemName:
          "Je suis prêt à louer mon bien avec un niveau de loyer plafonné.",
        itemDes: null,
        icon: null,
        Id: "cat9-item2",
      },
      {
        inputType: "radio",
        itemName:
          "Mon logement sera loué à usage de résidence principale de locataire.",
        itemDes: null,
        icon: null,
        Id: "cat9-item3",
      },
    ],
  },
  {
    category:
      "L'un des membres de votre foyer correspond-il aux critères suivants ?*",
    categoryDes: "Plusieurs réponses possibles",
    items: [
      {
        inputType: "radio",
        itemName:
          "Âgé de 60 à 69 ans sur conditions de GIR (groupe iso-ressources de 1 à 6)",
        itemDes: null,
        icon: null,
        Id: "cat10-item1",
      },
      {
        inputType: "radio",
        itemName: "Âgé de 70 ans ou plus",
        itemDes: null,
        icon: null,
        Id: "cat10-item2",
      },
      {
        inputType: "radio",
        itemName:
          "A un taux d'incapacité égal ou supérieur à 50% ou bénéficie de la Prestation de Compensation du Handicap (PCH)",
        itemDes: null,
        icon: null,
        Id: "cat10-item3",
      },
      {
        inputType: "radio",
        itemName: "Aucune de ces situations",
        itemDes: null,
        icon: null,
        Id: "cat10-item4",
      },
    ],
  },
  {
    category: "Isolation?",
    categoryDes: null,
    items: [
      {
        inputType: "radio",
        itemName: "Isolation des combles",
        itemDes: null,
        icon: "/assets/isolation-des-combles.png",
        Id: "cat11-item1",
      },
      {
        inputType: "radio",
        itemName: "isolation des murs",
        itemDes: null,
        icon: "/assets/isolation-des-murs.png",
        Id: "cat11-item2",
      },
      {
        inputType: "radio",
        itemName: "Isolation des sol",
        itemDes: null,
        icon: "/assets/Isolation-des-sol.jpg",
        Id: "cat11-item3",
      },
      {
        inputType: "radio",
        itemName: "Fenêtres/Porte-fenêtres",
        itemDes: null,
        icon: "/assets/Fenêtres.jpg",
        Id: "cat11-item4",
      },
      {
        inputType: "radio",
        itemName: "Isolation d'une Toiture-Terrasse",
        itemDes: null,
        icon: "/assets/Isolation-Terrasse.png",
        Id: "cat11-item5",
      },
    ],
  },
  {
    category: "Pompe à chaleur / chauffage sanitaire",
    categoryDes: null,
    items: [
      {
        inputType: "radio",
        itemName: "Pompe à chaleur Air/eau",
        itemDes: null,
        icon: "/assets/Pompe-à-chaleur-air.png",
        Id: "cat12-item1",
      },
      {
        inputType: "radio",
        itemName: "Pompe à chaleur Air/eau",
        itemDes: null,
        icon: "/assets/Pompe-à-chaleur-eau.png",
        Id: "cat12-item2",
      },
      {
        inputType: "radio",
        itemName: "Pompe à chaleur géothermique",
        itemDes: null,
        icon: "/assets/Pompe-à-chaleur-géothermique.png",
        Id: "cat12-item3",
      },
      {
        inputType: "radio",
        itemName: "Pompe à chaleur hybride",
        itemDes: null,
        icon: "/maison.png",
        Id: "cat12-item4",
      },
    ],
  },
  {
    category: "Chauffage traditionnel",
    categoryDes: null,
    items: [
      {
        inputType: "radio",
        itemName: "Chaudière fioul à condensation",
        itemDes: null,
        icon: "/assets/Chaudière-fioul-à-condensation.png",
        Id: "cat13-item1",
      },
      {
        inputType: "radio",
        itemName: "Chaudière gaz à condensation",
        itemDes: null,
        icon: "/assets/Chaudière-gaz-à-condensation.png",
        Id: "cat13-item2",
      },
      {
        inputType: "radio",
        itemName: "Chaudière au charbon à condensation",
        itemDes: null,
        icon: "/assets/Chaudière-au-charbon-à-condensation.png",
        Id: "cat13-item3",
      },
    ],
  },
  {
    category: "Chauffage à bois",
    categoryDes: null,
    items: [
      {
        inputType: "radio",
        itemName: "Chaudière bois à bûches",
        itemDes: null,
        icon: "/assets/Chaudière-bois-à-bûches.png",
        Id: "cat14-item1",
      },
      {
        inputType: "radio",
        itemName: "Chaudière bois à granulés/plaquettes",
        itemDes: null,
        icon: "/assets/Chaudière-bois-à-plaquettes.png",
        Id: "cat14-item2",
      },
      {
        inputType: "radio",
        itemName: "Insert à bûches ou granulés",
        itemDes: null,
        icon: "/assets/Insert-à-bûches-ou-granulés.png",
        Id: "cat14-item3",
      },
      {
        inputType: "radio",
        itemName: "Poêle à bûches ou granulés",
        itemDes: null,
        icon: "/assets/Poêle-à-bûches-ou-granulés.png",
        Id: "cat14-item4",
      },
    ],
  },
  {
    category: "Système solaire",
    categoryDes: null,
    items: [
      {
        inputType: "radio",
        itemName: "Panneaux solaires photovoltaïques",
        itemDes: null,
        icon: "/assets/Panneaux-solaires-photovoltaïques.jpg",
        Id: "cat15-item1",
      },
      {
        inputType: "radio",
        itemName: "Système solaire combiné",
        itemDes: null,
        icon: "/assets/Système-solaire-combiné.png",
        Id: "cat15-item2",
      },
      {
        inputType: "radio",
        itemName: "Chauffe-eau thermodynamique",
        itemDes: null,
        icon: "/assets/Chauffe-eau-thermodynamique.png",
        Id: "cat15-item3",
      },
      {
        inputType: "radio",
        itemName: "Chauffe-eau solaire individuel",
        itemDes: null,
        icon: "/assets/Chauffe-eau-solaire-individuel.jpg",
        Id: "cat15-item4",
      },
    ],
  },
  {
    category: null,
    categoryDes: null,
    items: [
      {
        inputType: "radio",
        itemName:
          "Je souhaite remplacer une chaudière individuelle au charbon, au fioul ou au gaz.",
        itemDes: null,
        icon: null,
        Id: "cat16-item1",
      },
      {
        inputType: "radio",
        itemName: "Non, je ne souhaite effectuer aucun remplacement.",
        itemDes: null,
        icon: null,
        Id: "cat16-item2",
      },
    ],
  },
  {
    category: "Isolation des murs ?",
    categoryDes: null,
    items: [
      {
        inputType: "radio",
        itemName: "Isolation intérieure",
        itemDes: null,
        icon: "/assets/Isolation-intérieure.png",
        Id: "cat16-item1",
      },
      {
        inputType: "radio",
        itemName: "Isolation extérieure",
        itemDes: null,
        icon: "/assets/Isolation-extérieure.png",
        Id: "cat16-item2",
      },
      {
        inputType: "radio",
        itemName: "Je ne sais pas",
        itemDes: null,
        icon: "/assets/question.png",
        Id: "cat16-item3",
      },
    ],
  },
  {
    category: null,
    categoryDes: null,
    items: [
      {
        inputType: "number",
        itemName: "Quelle est la surface approximative de murs à isoler?",
        itemDes: "Surface en m",
        icon: null,
        Id: "cat17-item1",
      },
      {
        inputType: "number",
        itemName:
          "Fenêtre/ Portes-fenêtre Combien de fenetres souhaitez-vous remplacer?",
        itemDes: "Nombre total de Fenêtre/ Portes-fenêtres",
        icon: null,
        Id: "cat17-item2",
      },
      {
        inputType: "number",
        itemName:
          "isolation des murs Quelle est la surface approximative de combles à isoler?",
        itemDes: "Nombre total de Fenêtre/ Portes-fenêtres",
        icon: null,
        Id: "cat17-item3",
      },
      {
        inputType: "number",
        itemName:
          "Isolation des toitures terrasses Quelle est la surface toiture terrasse à isoler?",
        itemDes: "Nombre total de Fenêtre/ Portes-fenêtres",
        icon: null,
        Id: "cat17-item4",
      },
    ],
  },
  {
    category: null,
    categoryDes: null,
    items: [
      {
        inputType: "text",
        itemName:
          "Avez-vous une estimation du montant des travaux à réaliser ?",
        itemDes: null,
        icon: null,
        Id: "cat17-item1",
      },
      {
        inputType: "text",
        itemName: "Quel est le montant estimatif des travaux ?",
        itemDes: null,
        icon: null,
        Id: "cat17-item2",
      },
    ],
  },
];

export default About;
