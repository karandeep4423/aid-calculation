import React from "react";

const Home = () => {
  return (
    <div ba>
      <section
        className="relative h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url('/bg-img.jpg')` }} // Image from the public folder
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">
            Redécouvrons l'énergie au meilleur prix
          </h1>
          <p className="text-lg">Néogies votre courtier en énergie.</p>
          <button className="mt-6 px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-10">
        <h2 className="font-bold text-4xl text-center">
          Une démarche en 5 étapes !
        </h2>
        <p className="text-xl text-center">Complètement dématérialisée.</p>
        {/* First row: steps 1 to 4 */}
        <div className="grid grid-cols-3 justify-between items-center ">
          {/* Step 1 */}
          <div className="flex items-center">
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
            {/* Arrow */}
            <span className="text-3xl font-bold mx-4">→</span>
          </div>

          {/* Step 2 */}
          <div className="flex items-center">
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

            {/* Arrow */}
            <span className="text-3xl font-bold mx-4">→</span>
          </div>
          <div className="flex items-center">
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

            {/* Arrow */}
            <span className="text-3xl font-bold mx-4">→</span>
          </div>
          {/* Step 4 */}
          <div className="flex items-center">
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
                    Je demande le solde de ma prime en déposant mes factures
                    dans mon dossier.
                  </p>
                </div>
              </div>
            </div>
            {/* Arrow */}
            <span className="text-3xl font-bold mx-4">→</span>
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
