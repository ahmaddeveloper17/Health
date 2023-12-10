// components/DoctorCard.js
import React from 'react';

const DoctorCard = ({ name, specialty, image }) => {
  return (
    <>
    
    <div className="doctor-card">
      <img src={image} alt={`${name} - ${specialty}`} />
      <h2>{name}</h2>
      <p>{specialty}</p>
    </div>
    </>
  );
};

export default DoctorCard;
