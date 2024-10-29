import React, { useState, useEffect } from "react";

const Admin = () => {
  const [dataUser, setDataUser] = useState([]);
  const [simulationsData, setSimulationsData] = useState({});
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleProject = (simulationId) => {
    setExpandedProjectId((prev) =>
      prev === simulationId ? null : simulationId
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/simulation/admin`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const resdata = await response.json();
        setDataUser(resdata.userData);
        fetchSimulationsForAllUsers(resdata.userData);
      }
    };
    fetchData();
  }, []);

  const fetchSimulationsForAllUsers = async (users) => {
    try {
      const simulationPromises = users.map((user) =>
        fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/simulation/user/${user._id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) =>
            response.ok ? response.json() : { simulations: [] }
          )
          .catch(() => ({ simulations: [] }))
      );

      const simulations = await Promise.all(simulationPromises);
      const simulationsDataMap = {};
      users.forEach((user, index) => {
        simulationsDataMap[user._id] = simulations[index].simulations || [];
      });

      setSimulationsData(simulationsDataMap);
    } catch (error) {
      console.error("An error occurred while fetching simulations:", error);
    }
  };

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-center text-3xl font-bold mb-8">
      Toutes les données utilisateur et Projets
      </h1>

      {dataUser.map((user, i) => (
        <div key={i} className="mb-10 w-full">
          {/* User Info Row */}
          <div className="bg-sky-200 p-4 w-full rounded-t-xl shadow-md">
            <div className="w-full flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold">Informations utilisateur</h2>
              <div className="my-2 flex flex-col md:flex-row items-center justify-center gap-2">
                <p className="text-xl font-bold">Identité</p>
                <p className="font-semibold">
                  {user?.firstname} {user?.lastname}
                </p>
                <p className="text-xl font-bold">Contact</p>
                <p className="font-semibold">{user?.email}</p>
                <p className="font-semibold">{user?.phone}</p>
              </div>
            </div>

            {/* Projects Row */}
            <div className="w-full flex flex-wrap gap-4">
              {simulationsData[user._id]?.length > 0 ? (
                simulationsData[user._id].map((simulation, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                    <div
                      className="bg-sky-100 p-4 rounded-lg shadow-md cursor-pointer"
                      onClick={() => toggleProject(simulation._id)}
                    >
                      <h3 className="text-lg font-semibold">
                        Project {index + 1}
                      </h3>
                      <p>
                        <strong>Address:</strong> {simulation.adresse}
                      </p>
                    </div>

                    {/* Expanded Project Details */}
                    {expandedProjectId === simulation._id && (
                      <div className="bg-white border-t border-gray-300 p-4 mt-2 rounded-b-lg shadow-md">
                        <p>
                          <strong>Postal Code:</strong> {simulation.codePostal}
                        </p>
                        <p>
                          <strong>DPE Logement:</strong>{" "}
                          {simulation.dpeLogement}
                        </p>
                        <p>
                          <strong>Construction Duration:</strong>{" "}
                          {simulation.dureeConstruction}
                        </p>
                        <p>
                          <strong>Eligibility:</strong>{" "}
                          {simulation.eligible ? "Yes" : "No"}
                        </p>
                        <p>
                          <strong>Nature of Residence:</strong>{" "}
                          {simulation.natureResidence}
                        </p>
                        <p>
                          <strong>Number of People:</strong> {simulation.nbPers}
                        </p>
                        <p>
                          <strong>Region:</strong> {simulation.region}
                        </p>
                        <p>
                          <strong>Fiscal Revenue:</strong>{" "}
                          {simulation.revenuFiscal}
                        </p>
                        <p>
                          <strong>Type of Beneficiary:</strong>{" "}
                          {simulation.typeBenef}
                        </p>
                        <p>
                          <strong>City:</strong> {simulation.ville}
                        </p>
                        <p>
                          <strong>Works:</strong>{" "}
                          {simulation.travaux.join(", ")}
                        </p>
                        <p>
                          <strong>Works Result:</strong>{" "}
                          {simulation.travauxResult.join(", ")}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600 w-full">
                  No simulations available for this user.
                </p>
              )}
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t-2 border-gray-300 mt-4"></div>
        </div>
      ))}
    </div>
  );
};

export default Admin;
