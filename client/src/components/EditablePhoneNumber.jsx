import React, { useState, useEffect } from "react";
import axios from "axios"; 

const EditablePhoneNumber = () => {
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const [isEditing, setIsEditing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("5365");
  const [isLoading, setIsLoading] = useState(true);

//   Load phone number from backend when component mounts
  useEffect(() => {
    const fetchPhoneNumber = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/phone/get-phone`);
        console.log(response);
        setPhoneNumber(response?.data?.phone.phone);
      } catch (error) {
        console.error("Failed to fetch phone number:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhoneNumber();
  }, []);

  const handleClick = () => {
    if (user?.role === "admin") {
      setIsEditing(true);
    }
  };

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Save to backend when editing is complete
  const savePhoneNumber = async () => {
    try {
      const a = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/phone/save-phone`, { phoneNumber });
      console.log("respone",a)
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update phone number:", error);
    }
  };

  const handleBlur = () => {
    savePhoneNumber();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      savePhoneNumber();
    }
  };

  if (isLoading) {
    return <p className="font-bold text-gray-600">Loading...</p>;
  }

  return (
    <>
      {user?.role === "admin" ? (
        isEditing ? (
          <input
            type="text"
            value={phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="font-bold text-gray-600 border border-gray-300 px-2 py-1 rounded"
            autoFocus
          />
        ) : (
          <p
            onClick={handleClick}
            className="font-bold text-gray-600 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
            style={{ cursor: 'pointer' }}
          >
            {phoneNumber}
          </p>
        )
      ) : (
        <p className="font-bold text-gray-600">{phoneNumber}</p>
      )}
    </>
  );
};

export default EditablePhoneNumber;