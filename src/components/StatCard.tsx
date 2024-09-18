'use client'
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon?: ReactNode;
  chartImage?: string;
  isSelected?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, chartImage, isSelected }) => {
  const cardClass = isSelected && chartImage
    ? "bg-[#FF3F02] bg-opacity-10 border-[#FE3E01]"
    : "bg-white border-gray-300";

  return (
    <div className={`p-6 rounded-lg border ${cardClass} transition-colors duration-300`}>
      <div className="flex items-center mb-2">
        {/* {icon && <div className="mr-2">{icon}</div>} */}
        <h3 className="text-gray-500 text-sm">{title}</h3>
      </div>
      <p className="text-3xl font-bold text-black">{value}</p>
    </div>
  );
};

export default StatCard;