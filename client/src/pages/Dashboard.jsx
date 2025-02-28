import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Appointment from "../components/Appointment";
import axios from "axios";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [simulations, setSimulations] = useState([]); // State to store simulation data
  const [userData, setUserData] = useState({});
  const [showAppointment, setShowAppointment] = useState(false);
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
        `${process.env.REACT_APP_BACKEND_URL}/api/simulation/user/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setSimulations(data?.simulations); // Update state with the fetched simulations
    } catch (error) {
      toast.error(
        "Une erreur s'est produite lors de la récupération des simulations."
      );
    }
  };

  const getUserData = async (userId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/get-user/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setUserData(data?.user);
      console.log("User data fetched successfully:", data?.user);
      setShowAppointment(false);
    } catch (error) {
      toast.error(
        "Une erreur s'est produite lors de la récupération des data user."
      );
    }
  };

  // useEffect hook to fetch simulations when the component mounts
  useEffect(() => {
    getSimulationsByUserId(user?._id); // Automatically fetch simulations when dashboard loads
    getUserData(user?._id);
  }, [user?._id]); // Only runs when the userId changes (or once on component mount)

  const cancelAppointment = async () => {
    try {
        await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/appointment-cancel`,
        { userId: user?._id }
      );

      toast.success("Le rendez-vous a été annulé avec succès !");
      getUserData(user?._id);
    } catch (error) {
      toast.error(
        "Une erreur s'est produite lors de l'annulation du rendez-vous."
      );
    }
  };

  const appointmentToggle = () => {
    setShowAppointment(!showAppointment);
  };

  return (
    <div className=" m-auto max-w-screen-xl ">
      <h1 className="text-3xl text-center font-semibold">
        Bienvenue dans votre Espace, {user?.firstname}
      </h1>
      <div>
        <div className="flex flex-col gap-2 justify-around items-center sm:flex-row">
          {/* information component */}
          <div
            onClick={() => toggleProject("personal-info")}
            className="my-10  flex flex-col gap-4 items-center  shadow-md bg-sky-200 h-fit w-fit p-2 sm:p-8 rounded-2xl"
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
          {/* Appointment Slot for dashboard */}
          {userData?.appointment !== undefined && userData?.appointment !==null ? (
            <div
              onClick={() => toggleProject("appointment-slot")}
              className="my-10  flex flex-col gap-4 items-center  shadow-md bg-sky-200 h-fit w-fit p-2 sm:p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-semibold">
                Les informations de rendez-vous
              </h2>

              <div
                className={`transition duration-700 ease-in-out flex-col  gap-4  ' ${
                  expandedProjectId === "appointment-slot" ? "flex " : "hidden"
                }`}
              >
                <div className="flex  justify-center items-center gap-2">
                  <p className="text-xl font-semibold">Appointment</p>
                  <p className="font-bold">{userData?.appointment}</p>
                </div>
                <div className="flex gap-3 justify-around">
                  <button
                    onClick={cancelAppointment}
                    className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium px-4 py-2 rounded-full bg-sky-500 text-white transition-all duration-300"
                  >
                    Cancel
                  </button>

                  <button
                    to="appointment"
                    onClick={appointmentToggle}
                    className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  cursor-pointer font-medium px-4 py-2 rounded-full bg-sky-500 text-white transition-all duration-300"
                  >
                    Reschdule
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium px-4 py-3 rounded-full bg-sky-500 text-white transition-all duration-300"
              onClick={appointmentToggle}
            >
              Réserver un appel
            </button>
          )}
        </div>
        {/* Appointment component */}
        {showAppointment ? <Appointment getUserData={getUserData} /> : null}
        <div>
          {simulations?.length > 0 ? (
            <ul className="gap-5 px-3 flex flex-wrap w-full justify-around items-start my-7  ">
              {simulations.map((simulation) => (
                <div
                  className="flex flex-col gap-4 items-center  shadow-md bg-sky-200 h-fit w-fit p-8 rounded-2xl"
                  key={simulation._id}
                  onClick={() => toggleProject(simulation._id)}
                >
                  <h2 className="text-2xl font-semibold">Mon Projet</h2>
                  <div
                    className={`transition duration-700 ease-in-out flex-col  gap-4  ' ${
                      expandedProjectId === simulation._id ? "flex " : "hidden"
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

                    {/* <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">Region</p>
                      <p className="font-semibold">{simulation.region}</p>
                    </div> */}

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

                    {/* <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">
                        Works Result (Travaux Result)
                      </p>
                      <p className="font-semibold">
                        {simulation.travauxResult.join(", ")}
                      </p>
                    </div> */}
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <div className="mb-10 flex flex-col items-center justify-center  sm:my-10">
              <p className="text-3xl pb-2 font-bold px-2">
                Vous n'avez aucun projet.
              </p>
              <Link to="/simulation">
                <button className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium px-4 py-3 rounded-full bg-sky-500 text-white transition-all duration-300">
                  Demander un devis
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
