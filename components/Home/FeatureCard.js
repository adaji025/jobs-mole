import React from "react";

const FeatureCard = ({ item }) => {
  return (
    <div className="max-w-[175px] xs:min-w-[180px] sm:min-w-[250px] h-[150px] custom-shadow flex items-center gap-3 p-4 bg-white">
      <div className="sm:flex gap-3">
        <span className="mb-2 block">{item.icon}</span>
        <div>
          <h3 className="font-bold text-xs xs:text-base sm:text-lg md:text-xl font-inter text-primary-dark">{item.title}</h3>
          <p className="text-[10px] xs:text-sm mt-2">{item.amount} jobs available</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
