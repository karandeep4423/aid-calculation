import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [simulations, setSimulations] = useState([]); // State to store simulation data

  const toggleProject = (simulationId) => {
    if (expandedProjectId === simulationId) {
      setExpandedProjectId(null); // Collapse if the same profile is clicked again
    } else {
      setExpandedProjectId(simulationId); // Expand the clicked profile
    }
  };

  const user = JSON.parse(localStorage.getItem("userDetails"));

  // Function to fetch simulations by userId
  const getSimulationsByUserId = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/simulation/user/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("data", data.simulations);
        setSimulations(data.simulations); // Update state with the fetched simulations
      } else {
        const errorData = await response.json();
        toast.error("Failed to fetch simulations: " + errorData.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred while fetching simulations.");
    }
  };

  // useEffect hook to fetch simulations when the component mounts
  useEffect(() => {
    getSimulationsByUserId(user?._id); // Automatically fetch simulations when dashboard loads
  }, [user?._id]); // Only runs when the userId changes (or once on component mount)

  return (
    <div className="w-full text-center ">
      <h1 className="text-3xl font-semibold">
        Bienvenue dans votre Espace,{user?.firstname}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div
          onClick={() => toggleProject("personal-info")}
          className="my-10 flex flex-col gap-4 items-center m-auto shadow-md bg-sky-200 h-fit w-fit p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-semibold">
            Mes informations personnelles
          </h2>
          <div
            className={`transition duration-700 ease-in-out flex-col  gap-4  ' ${
              expandedProjectId === "personal-info" ? "flex " : "hidden"
            }`}
          >
            <div className="flex flex-col items-start gap-2">
              <p className="text-xl font-bold">Identité</p>
              <p className="font-semibold">
                {user?.firstname} {user?.lastname}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-xl font-bold">Contact</p>
              <p className="font-semibold">{user?.email}</p>
              <p className="font-semibold">{user?.phone}</p>
            </div>
          </div>
        </div>
        <div>
          {simulations.length > 0 ? (
            <ul>
              {simulations.map((simulation) => (
                <div
                  className="my-10 flex flex-col gap-4 items-center m-auto shadow-md bg-sky-200 h-fit w-fit p-8 rounded-2xl"
                  key={simulation._id}
                  onClick={() => toggleProject(simulation._id)}
                >
                  <h2 className="text-2xl font-semibold">Mon Projet</h2>
                  <div
                    className={`transition duration-700 ease-in-out flex-col  gap-4  ' ${
                      expandedProjectId === simulation._id  ? "flex " : "hidden"
                    }`}
                  >
                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">Address</p>
                      <p className="font-semibold">{simulation.adresse}</p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">Postal Code</p>
                      <p className="font-semibold">{simulation.codePostal}</p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">DPE Logement</p>
                      <p className="font-semibold">{simulation.dpeLogement}</p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">Construction Duration</p>
                      <p className="font-semibold">
                        {simulation.dureeConstruction}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">Eligibility</p>
                      <p className="font-semibold">
                        {simulation.eligible ? "Yes" : "No"}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">Nature of Residence</p>
                      <p className="font-semibold">
                        {simulation.natureResidence}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">Number of People</p>
                      <p className="font-semibold">{simulation.nbPers}</p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">Occupation 8</p>
                      <p className="font-semibold">
                        {simulation.occupation8 ? "Yes" : "No"}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">Region</p>
                      <p className="font-semibold">{simulation.region}</p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">Fiscal Revenue</p>
                      <p className="font-semibold">{simulation.revenuFiscal}</p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">Type of Beneficiary</p>
                      <p className="font-semibold">{simulation.typeBenef}</p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">Type of Housing</p>
                      <p className="font-semibold">{simulation.typeLogement}</p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">City</p>
                      <p className="font-semibold">{simulation.ville}</p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">Works (Travaux)</p>
                      <p className="font-semibold">
                        {simulation.travaux.join(", ")}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">
                        Works Result (Travaux Result)
                      </p>
                      <p className="font-semibold">
                        {simulation.travauxResult.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <p>no data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
