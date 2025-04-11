import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyAppointment = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);
  const [appointmentData, setAppointmentData] = React.useState([]);
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    if (!slotDate || typeof slotDate !== "string" || !slotDate.includes("_")) {
      return "Invalid Date";
    }

    const dateArray = slotDate.split("_"); // [day, month, year]

    if (dateArray.length !== 3) return "Invalid Date";

    const day = dateArray[0];
    const month = months[Number(dateArray[1]) - 1]; // Adjust for 0-based index
    const year = dateArray[2];
    return `${day} ${month} ${year}`;
  };
  console.log(appointmentData);
  const getUserAppointment = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/user/list-appointment",
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(data);
      if (data.success) {
        setAppointmentData(data.data.reverse());
      } else {
        console.log(data.error);
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment",
        { appointmentId },
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(data);
      if (data.success) {
        toast.success(data.message);
        getUserAppointment();
        getDoctorsData();
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const appointmentRazorpay = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/payment-razorpay",
        { appointmentId },
        { headers: { token: token } }
      );
      if (data.success) {
        console.log(data.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (token) {
      getUserAppointment();
    }
  }, [token]);
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointment
      </p>
      <div>
        {appointmentData.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="grid grid-col-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
          >
            <div>
              <img
                src={item.docData.image}
                alt=""
                className="w-32 bg-indigo-50"
              />
            </div>
            <div className="flex-1  text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">
                {item.docData.name}
              </p>
              <p>{item.docData.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address :</p>
              <p className="text-xs">{item.docData.address.line1}</p>
              <p className="text-xs">{item.docData.address.line2}</p>
              <p className="text-xs mt-1">
                <span className="text-neutral-700 font-medium text-sm">
                  Date & Time:
                </span>
                {slotDateFormat(item.slotDate)} | {item.slotTime}
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end ">
              {!item.cancelled && !item.payment && !item.isCompleted && (
                <button
                  onClick={() => appointmentRazorpay(item._id)}
                  className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-lg hover:bg-primary hover:text-white transition-all duration-500"
                >
                  Pay Online
                </button>
              )}
              {!item.cancelled && !item.isCompleted && (
                <button
                  onClick={() => handleCancelAppointment(item._id)}
                  className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-lg hover:bg-red-500 hover:text-white transition-all duration-500"
                >
                  Cancle Appointment
                </button>
              )}
              {item.cancelled && !item.isCompleted && (
                <button className="text-sm text-red-500  text-center sm:min-w-48 py-2 border border-red-500 rounded-lg transition-all duration-500">
                  Appointment cancelled
                </button>
              )}
              {item.isCompleted && (
                <button className="sm:min-w-48 py-2 border border-green-500 rounded text-green-500">
                  Completed
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
