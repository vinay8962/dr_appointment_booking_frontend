import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div className="flex flex-row">
      <div>
        <img src={assets.contact_image} alt="" />
      </div>
      <div>
        <div>
          <p>Our Office</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
