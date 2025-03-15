import React from "react";
import { doctors } from "../assets/assets_frontend/assets";

const TopDoctors = () => {
  return (
    <div>
      <h1>Top Doctors to Book</h1>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div>
        {doctors.slice(0, 10).map((doctor, index) => (
          <div key={index}>
            <img src={doctor.image} alt="" />
            <div>
              <div>
                <p></p>
                <p>Available</p>
              </div>
              <p>{doctor.name}</p>
              <p>{doctor.speciality}</p>
            </div>
          </div>
        ))}
        <button>More</button>
      </div>
    </div>
  );
};

export default TopDoctors;
