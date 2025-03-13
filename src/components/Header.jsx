import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="bg-primary flex flex-col md:flex-row flex-wrap rounded-lg   px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tigth md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trustem Doctors
        </p>
        <div className=" flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img src={assets.group_profiles} alt="" className="w-28" />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href=""
          className="flex items-start gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto hover:scale-105 transition-all duration-300"
        >
          Book Appointment <img src={assets.arrow_icon} className="w-3" />
        </a>
      </div>
      <div className="md:w-1/2 relative">
        <img
          src={assets.header_img}
          alt=""
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
