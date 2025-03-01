import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import AdminAppointment from "../components/AdminAppointment";
const Admin = () => {
  const [dataUser, setDataUser] = useState([]);
  const [simulationsData, setSimulationsData] = useState({});
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // react-paginate uses 0-based indexing
  const usersPerPage = 15;

  const toggleProject = (simulationId) => {
    setExpandedProjectId((prev) =>
      prev === simulationId ? null : simulationId
    );
  };

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

  useEffect(() => {
    fetchData();
  });

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
      console.log("Simulations data fetched successfully:", simulationsDataMap);
    } catch (error) {
      console.error("An error occurred while fetching simulations:", error);
    }
  };

  // Pagination logic
  const offset = currentPage * usersPerPage;
  const currentUsers = dataUser.slice(offset, offset + usersPerPage);
  const pageCount = Math.ceil(dataUser.length / usersPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto my-10 px-4">
      <AdminAppointment refreshData={fetchData} userData={dataUser} />
      <h1 className="text-center text-3xl font-bold mb-8">
        Toutes les données utilisateur et Projets
      </h1>

      {currentUsers.map((user) => (
        <div key={user._id} className="mb-10 w-full">
          {/* User Info Row */}
          <div className="bg-sky-200 p-4 w-full rounded-t-xl shadow-md">
            <div className="w-full flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold">
                Informations utilisateur
              </h2>
              <div className="my-2 flex flex-col md:flex-row items-center justify-center gap-2">
                <p className="text-xl font-bold">Identité</p>
                <p className="font-semibold">
                  {user?.firstname} {user?.lastname}
                </p>
                <p className="text-xl font-bold">Email:</p>
                <p className="font-semibold">{user?.email}</p>
                <p className="text-xl font-bold">Phone:</p>
                <p className="font-semibold">{user?.phone}</p>
                {/* <p className="text-xl font-bold">Appointment:</p>
                <p className="font-semibold">{user?.appointment}</p> */}
              </div>
            </div>
            {/* Appointment  */}
            <div className=" flex flex-col items-center justify-center">
              {/* Appointment Slot for dashboard */}
              {user?.appointment !== undefined && user?.appointment !== null ? (
                <div className="my-10  flex flex-col gap-4 items-center  shadow-md bg-green-100 h-fit w-fit p-2 sm:p-8 rounded-2xl">
                  <div className="flex flex-col sm:flex-row  justify-center items-center gap-2">
                    <p className="text-xl font-semibold">Appointment</p>
                    <p className="font-bold">{user?.appointment}</p>
                  </div>
                </div>
              ) : null}
            </div>
            {/* Projects Row */}
            <div className="w-full flex flex-wrap gap-4">
              {simulationsData[user._id]?.length > 0 ? (
                simulationsData[user._id].map((simulation, index) => (
                  <div
                    key={simulation._id}
                    className="w-full sm:w-1/2 lg:w-1/3"
                  >
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
                        {/* <p>
                          <strong>Region:</strong> {simulation.region}
                        </p> */}
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
                        {/* <p>
                          <strong>Works Result:</strong> {simulation.travauxResult.join(", ")}
                        </p> */}
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

      {/* React Paginate Controls */}
      <div className="flex justify-center mt-8">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={"flex items-center space-x-2"}
          pageClassName={
            "px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-300 cursor-pointer"
          }
          previousClassName={
            "px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-300 cursor-pointer"
          }
          nextClassName={
            "px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-300 cursor-pointer"
          }
          activeClassName={"bg-sky-600"}
          forcePage={currentPage}
        />
      </div>
    </div>
  );
};

export default Admin;
