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
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </section>
      <div className="container mx-auto px-4 py-10">
        <h2 className="font-bold text-4xl text-center">Une démarche en 5 étapes !</h2>
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
                  I create my account and submit my request with the quotes.
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
                  I receive by email confirmation of the allocation of the bonus
                  and its estimated amount.
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
                  I carry out my work and receive my invoices which I pay to the
                  company.
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
                  I request the balance of my premium by submitting my invoices
                  to my file.
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
                  I receive my final bonus payment.
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
