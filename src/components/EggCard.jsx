import React from "react";

const EggCard = ({ type, imgSrc, onClick }) => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition duration-300"
      onClick={onClick}
    >
      <img src={imgSrc} alt={type} className="w-50 h-50 mb-2" />
      <span className="text-lg font-semibold">{type}</span>
    </div>
  );
};

export default EggCard;
