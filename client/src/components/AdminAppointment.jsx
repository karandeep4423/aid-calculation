import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  parse,
  eachDayOfInterval,
  isToday,
  isAfter,
  endOfMonth,
  getDay,
  format,
  startOfDay,
} from "date-fns";
import { Modal } from "flowbite-react";
import Appointment from "./Appointment";

const AdminAppointment = ({ userData, refreshData }) => {
  let today = startOfDay(new Date());
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const [selectedDay, setSelectedDay] = useState(startOfDay(new Date()));
  const [showModal, setShowModal] = useState(false);
  const [rescheduleModal, setRescheduleModal] = useState(false);
  const [modalUserData, setModalUserData] = useState(null);
  const [selectedUserForReschedule, setSelectedUserForReschedule] = useState(null);
  const [appointmentDates, setAppointmentDates] = useState({});

  useEffect(() => {
    // Process user appointment data
    if (userData && userData.length > 0) {
      const dates = {};

      userData.forEach((user) => {
        if (user.appointment) {
          // Parse appointment string format "10h:00, 04-03-2025"
          const appointmentParts = user.appointment.split(", ");
          if (appointmentParts.length === 2) {
            const datePart = appointmentParts[1]; // "04-03-2025"
            const dateParts = datePart.split("-");
            if (dateParts.length === 3) {
              const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`; // Convert to YYYY-MM-DD

              if (!dates[formattedDate]) {
                dates[formattedDate] = [];
              }
              dates[formattedDate].push(user);
            }
          }
        }
      });

      setAppointmentDates(dates);
    }
  }, [userData]);

  // Generate days for the calendar month
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const previousMonth = () => {
    let firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPrevMonth, "MMM-yyyy"));
  };

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);

    // Check if the day has appointments
    const formattedDate = format(day, "yyyy-MM-dd");
    if (
      appointmentDates[formattedDate] &&
      appointmentDates[formattedDate].length > 0
    ) {
      setModalUserData(appointmentDates[formattedDate]);
      setShowModal(true);
    } else {
      setModalUserData(null);
    }
  };

  const handleReschedule = (user) => {
    setSelectedUserForReschedule(user);
    setShowModal(false);
    setRescheduleModal(true);
  };

  const closeRescheduleModal = () => {
    setRescheduleModal(false);
    setSelectedUserForReschedule(null);
  };

  return (
    <div>
      {/* Appointment section */}
      <div className="m-auto max-w-screen-xl">
        {/* Reschedule Modal */}
        {rescheduleModal && selectedUserForReschedule && (
          <div>
            <Modal 
              show={rescheduleModal} 
              size="xl" 
              onClose={closeRescheduleModal} 
              popup
            >
              <Modal.Header />
              <Modal.Body>
                <div className="p-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Reprogrammer un rendez-vous pour {selectedUserForReschedule.firstname} {selectedUserForReschedule.lastname}
                  </h3>
                  <p className="text-center mb-4">
                  Rendez-vous actuel: {selectedUserForReschedule.appointment}
                  </p>
                  <Appointment 
                    getUserData={refreshData} 
                    isRescheduling={true}
                    userData={selectedUserForReschedule}
                    onRescheduleComplete={() => {
                      closeRescheduleModal();
                      // Refresh data after rescheduling
                      if (refreshData) refreshData();
                    }}
                  />
                </div>
              </Modal.Body>
            </Modal>
          </div>
        )}

        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-gray-700 relative text-center text-5xl font-bold">
              Réservations
            </h2>
          </div>
          <div className="bg-sky-400 mt-10 absolute z-50 mix-blend-multiply filter blur-2xl h-16 w-56"></div>
        </div>
        <div className="md:mx-40 mx-6 p-4 md:p-8 mb-16 mt-10 h-5/6 mix-blend-multiply bg-gradient-to-r from-blue-100 via-purple-100 to-yellow-50 rounded-3xl filter shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(2,139,199,0.5)]">
          <div>
            <div className="z-50 grid md:grid-cols-1 gap-10 mt-6 md:mt-8">
              <div className="relative">
                <div className="flex items-center justify-center sm:px-3.5">
                  <h2 className="flex-auto text-xl font-medium text-gray-900">
                    {new Intl.DateTimeFormat("fr-FR", {
                      month: "long",
                      year: "numeric",
                    }).format(firstDayCurrentMonth, "MMMM yyyy")}
                  </h2>
                  <button
                    type="button"
                    onClick={previousMonth}
                    className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Previous month</span>
                    <ChevronLeftIcon className="w-8 h-8" aria-hidden="true" />
                  </button>
                  <button
                    onClick={nextMonth}
                    type="button"
                    className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Next month</span>
                    <ChevronRightIcon className="w-8 h-8" aria-hidden="true" />
                  </button>
                </div>
                <div
                  id="appointment"
                  className="grid w-full grid-cols-7 mt-6 sm:mt-8 text-xl font-medium leading-6 text-center text-gray-500"
                >
                  <div className="text-black">Dim</div>
                  <div>Lun</div>
                  <div>Mar</div>
                  <div>Mer</div>
                  <div>Jeu</div>
                  <div>Ven</div>
                  <div className="text-black">Sam</div>
                </div>
                <div className="grid w-full grid-cols-7 gap-1 mt-5">
                  {days.map((day, dayIndx) => {
                    const formattedDate = format(day, "yyyy-MM-dd");
                    const hasAppointment =
                      appointmentDates[formattedDate] &&
                      appointmentDates[formattedDate].length > 0;

                    return (
                      <div
                        key={dayIndx}
                        className={colStartClasses[getDay(day)]}
                      >
                        {isAfter(day, today - 1) ? (
                          <button
                            type="button"
                            onClick={() => handleDayClick(day, dayIndx)}
                            className="w-full mx-auto flex items-center justify-center"
                          >
                            <span
                              className={`
                                ${
                                  isToday(day)
                                    ? "border-2 border-sky-500"
                                    : "text-black"
                                }
                                ${
                                  hasAppointment
                                    ? "bg-green-500 hover:bg-green-300 text-white"
                                    : "bg-white"
                                }
                                h-16 w-16 rounded-xl flex justify-center items-center text-xl hover:bg-gray-300
                              `}
                            >
                              {format(day, "d")}
                            </span>
                          </button>
                        ) : (
                          <span className="opacity-50 w-10 mx-auto text-xl flex h-10 items-center justify-center">
                            {format(day, "d")}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal section */}
      {showModal && modalUserData && (
        <div>
          <Modal
            show={showModal}
            size="md"
            onClose={() => setShowModal(false)}
            popup
          >
            <div className="h-5/6 mix-blend-multiply bg-gradient-to-r from-blue-100 via-purple-100 to-yellow-50 rounded-3xl filter shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(2,139,199,0.5)]">
              <Modal.Header />
              <Modal.Body>
                <div className="text-center p-5">
                  {modalUserData.map((user, index) => (
                    <div key={index} className="p-4 rounded-lg">
                      <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4">
                        Rendez-vous le {format(selectedDay, "dd-MM-yyyy")}
                      </h3>
                      <div className="grid grid-cols-2 gap-2 text-lg">
                        <div className="font-medium">Heure:</div>
                        <div>
                          {user.appointment
                            ? user.appointment.split(", ")[0]
                            : "N/A"}
                        </div>

                        <div className="font-medium">Nom:</div>
                        <div>
                          {user.firstname} {user.lastname}
                        </div>

                        <div className="font-medium">Email:</div>
                        <div>{user.email}</div>

                        <div className="font-medium">Téléphone:</div>
                        <div>{user.phone}</div>

                        <div className="font-medium">Genre:</div>
                        <div>{user.gender}</div>
                      </div>
                      
                      <button 
                        onClick={() => handleReschedule(user)}
                        className="mt-4 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium px-4 py-2 rounded-full bg-sky-500 text-white transition-all duration-300"
                      >
                        Reschedule
                      </button>
                    </div>
                  ))}
                </div>
              </Modal.Body>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default AdminAppointment;

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];