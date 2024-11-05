import React from "react";

interface IconCardProps {
  title: string;
  icon: React.ReactNode; // Accepts a React node for the icon
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ title, icon, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 dark:bg-[#ff9935]">
      <div className="flex items-center p-4">
        <div className="text-blue text-3xl mr-4">{icon}</div>
        <h2 className="font-bold text-xl">{title}</h2>
      </div>
      <div className="p-4">
        <p className="text-gray-700 text-base mb-4">{description}</p>
      </div>
    </div>
  );
};

export default IconCard;
