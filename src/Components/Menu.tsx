import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "../customCSS/DatePickerStyles.scss";
import { useNavigate } from "react-router-dom";
import APIService from "../APIService/APIService";
import HelperService from "../AdditionalHelperMethods/HelperService";

export const Menu = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const navigate = useNavigate();

  const handleDateChange = (date: Date | null) => {
    if (date) {
      // Adjust for the local time zone offset
      const offsetInMinutes = date.getTimezoneOffset();
      const adjustedDate = new Date(
        date.getTime() - offsetInMinutes * 60 * 1000,
      );

      setSelectedDate(adjustedDate);

      const formattedDate = adjustedDate.toISOString().split("T")[0];
      navigate(`/posts/${formattedDate}`);
      // Handle navigation or any other action here
      console.log(`Selected date: ${formattedDate}`);
    }
  };

  return (
    <div className="w-full flex flex-row justify-center bg-[#1E293B] items-center ">
      <div className="lg:w-11/12 w-full flex p-6">
        <div className="lg:w-1/3 w-1/2 flex flex-col justify-center items-center">
          <button
            className="w-full flex justify-start lg:text-2xl text-2xl font-bold text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            ONSIDE.AM
          </button>
        </div>
        <div className="w-1/3 lg:flex hidden justify-center">
          <div
            className="w-1/3 flex justify-center text-xl font-bold text-white items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div
            className="w-1/3 flex justify-center text-xl font-bold text-white items-center cursor-pointer"
            onClick={() => navigate("/analytics")}
          >
            Analytics
          </div>
          <div
            className="w-1/3 flex justify-center text-xl font-bold text-white items-center cursor-pointer"
            onClick={() => HelperService.scrollToBottom()}
          >
            About
          </div>
        </div>
        <div className="lg:w-1/3 w-1/2 flex justify-end">
          <div className="w-full flex text-2xl font-bold text-white justify-end ">
            <div>
              <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="yyyy-MM-dd"
                  className="z-50  pl-4 pr-3 py-2 text-sm rounded-lg  focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholderText="Select a date"
                  customInput={
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 lg:text-xl text-5xl " />
                      <p className="flex text-start text-white text-sm">
                        Ընտրել Ամսաթիվ
                      </p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
