import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  parse,
  eachDayOfInterval,
  isToday,
  isAfter,
  endOfMonth,
  getDay,
  addMinutes,
  format,
  startOfDay,
} from "date-fns";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Modal } from "flowbite-react";

const Appointment = ({ getUserData }) => {
  let today = startOfDay(new Date());
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const [selectedDay, setSelectedDay] = useState(startOfDay(new Date()));
  const [selectedDayBtn, setSelectedDayBtn] = useState(null);
  const [outlineBtn, setOutlineBtn] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const userID = userDetails?._id;
  console.log("user-id", format(selectedSlot, "HH:mm d-MM-y "));

  // Generate days for the calendar month
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  // Generate time slots from 9 AM to 6 PM in 30-minute intervals
  let timeSlots = [];
  let start = add(selectedDay, { hours: 9 }); // Start at 9 AM
  const end = add(selectedDay, { hours: 18 }); // End at 6 PM (18:00)
  const now = new Date();
  while (start <= now) {
    start = addMinutes(start, 30);
  }
  while (start < end) {
    timeSlots.push(start);
    start = addMinutes(start, 30); // Increment by 30 minutes
  }

  const previousMonth = () => {
    let firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPrevMonth, "MMM-yyyy"));
  };

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const submitAppointment = async () => {
    try {
      const formattedSlot = format(selectedSlot, "HH'h':mm, dd-MM-yyyy");
      const response = await axios.post(
        `http://localhost:3001/api/auth/appointment`,
        {
          userID,
          formattedSlot,
        }
      );
      toast.success("Le rendez-vous a été pris avec succès !"); // Show success toast
      getUserData(userID);
      setOpenModal(false);
    } catch (error) {
      // Handle errors more gracefully and provide feedback from server
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message); // Show specific error message
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } 
  };

  return (
    <div>
      {/* Modal */}
      <div>
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <div className="h-5/6 mix-blend-multiply bg-gradient-to-r from-blue-100 via-purple-100  to-yellow-50   rounded-3xl filter  shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(2,139,199,0.5)] ">
            <Modal.Header />
            <Modal.Body>
              <div className="text-center p-5">
                <h3 className="mb-5 text-xl font-bold text-black ">
                  You have been booked appointment at <br></br>{" "}
                  <span className="underline underline-offset-8 text-sky-600">
                    {" "}
                    {format(selectedSlot, "HH'h':mm, dd-MM-yyyy")}{" "}
                  </span>
                </h3>
                <div className="flex justify-center gap-10">
                  <Button
                    className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium px-4 py-2 rounded-full bg-sky-500 text-white transition-all duration-300"
                    onClick={submitAppointment}
                  >
                    Oui
                  </Button>
                  <Button
                    className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium px-4 py-2 rounded-full bg-sky-500 text-white transition-all duration-300"
                    onClick={() => setOpenModal(false)}
                  >
                    Non
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </div>
      {/* Appointment section */}
      <div className="m-auto  max-w-screen-xl">
        <div className="flex  items-center justify-center">
          <div>
            <h2 className="text-gray-700 relative mt-10 text-center text-5xl font-bold">
              Réserver un appel
            </h2>
          </div>
          <div className="bg-sky-400 mt-10 absolute z-50  mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
        </div>
        <div className="md:mx-40 mx-6 p-4 md:p-8  mb-16 mt-10   h-5/6 mix-blend-multiply bg-gradient-to-r from-blue-100 via-purple-100  to-yellow-50   rounded-3xl filter  shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(2,139,199,0.5)] ">
          <div>
            <div className=" z-50 grid md:grid-cols-2 gap-10 mt-6 md:mt-8 ">
              <div className="relative">
                <div className="flex items-center justify-center sm:px-3.5">
                  <h2 className="flex-auto text-xl font-medium  text-gray-900">
                    {format(firstDayCurrentMonth, "MMMM yyyy")}
                  </h2>
                  <button
                    type="button"
                    onClick={previousMonth}
                    className="-my-1.5  flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
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
                <div className="grid w-full grid-cols-7 mt-6 sm:mt-8 text-xl font-medium leading-6 text-center text-gray-500">
                  <div className="text-black ">Dim</div>
                  <div>Lun</div>
                  <div>Mar</div>
                  <div>Mer</div>
                  <div>Jeu</div>
                  <div>Ven</div>
                  <div className="text-black">Sam</div>
                </div>
                <div className="grid  w-full grid-cols-7 gap-1 mt-5 ">
                  {days.map((day, dayIndx) => (
                    <div key={dayIndx} className={colStartClasses[getDay(day)]}>
                      {isAfter(day, today - 1) ? (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedDay(day);
                            setSelectedDayBtn(dayIndx);
                          }}
                          className="w-full mx-auto  flex   items-center justify-center"
                        >
                          <span
                            className={`${
                              isToday(day)
                                ? "border-2 border-sky-500"
                                : "text-black"
                            } ${
                              selectedDayBtn === dayIndx
                                ? "bg-sky-500 text-gray-200 hover:bg-sky-500"
                                : "bg-white"
                            } h-16 w-16 bg-gray-300 rounded-xl  flex justify-center items-center text-xl hover:bg-gray-300 `}
                          >
                            {format(day, "d")}
                          </span>
                        </button>
                      ) : (
                        <span className="opacity-50 w-10 mx-auto text-xl   flex h-10  items-center justify-center ">
                          {format(day, "d")}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div class="absolute md:visible invisible left-1/2 -ml-0.5 w-0.5 h-96 mt-14 bg-gray-400"></div>
              <div>
                <h2 className="flex-auto text-center -mt-4 sm:-mt-0 text-xl font-medium  text-gray-900">
                  {format(selectedDay, "EEEE, MMMM d")}
                </h2>
                <div className="grid  h-fit md:h-96 w-full mt-5 md:mt-12 grid-cols-2  mx-auto scrollbar md:overflow-auto  lg:grid-cols-2 gap-5 ">
                  {timeSlots.map((slot, index) => {
                    return (
                      <div key={index}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedSlot(slot);
                            setOutlineBtn(index);
                          }}
                          className={`${
                            outlineBtn === index
                              ? "h-fit p-1 text-xl flex w-11/12 m-2 outline outline-offset-4 outline-4  outline-gray-500 justify-center items-center text-gray-200 rounded-lg bg-sky-500"
                              : "h-fit w-full text-xl p-2   hover:bg-sky-600 justify-center items-center text-gray-200 rounded-lg bg-sky-500"
                          }`}
                        >
                          {format(slot, "HH : mm")}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex  mt-10 justify-center">
              <button
                // onClick={submitAppointment}
                onClick={() => setOpenModal(true)}
                className="text-xl font-medium px-14 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Réserver un appel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
