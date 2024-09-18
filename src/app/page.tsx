'use client'
import { useState, useEffect } from "react";
import StatCard from "@/components/StatCard";
import KeywordStatsCard from "@/components/KeywordStatsCard";
import { FiMessageSquare, FiFileText, FiClock, FiCalendar } from 'react-icons/fi';
import Image from "next/image";
import CommunityActivityCard from "@/components/CommunityActivityCard";

// 模拟数据
const stats = [
  { icon: <FiMessageSquare className="w-6 h-6 text-blue-500" />, title: "总聊天条数", value: "8,988" },
  { icon: <FiFileText className="w-6 h-6 text-green-500" />, title: "总文字数", value: "386,187" },
  { icon: <FiClock className="w-6 h-6 text-yellow-500" />, title: "聊天频率最高的时间段", value: "20:00-22:00", chartImage: "/timechart.png" },
  { icon: <FiCalendar className="w-6 h-6 text-purple-500" />, title: "每周聊天最多为那一天", value: "周五", chartImage: "/daychart.png" },
];

export default function Home() {
  const [selectedChart, setSelectedChart] = useState<string | null>(null);

  useEffect(() => {
    // 找到 "聊天频率最高的时间段" 的卡片并设置为默认选中
    const defaultCard = stats.find(stat => stat.title === "聊天频率最高的时间段");
    if (defaultCard && defaultCard.chartImage) {
      setSelectedChart(defaultCard.chartImage);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F9] p-4 sm:p-8">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-900">社区数据</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">在地群聊天记录统计</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8">
            {stats.map((stat, index) => (
              <div key={index} onClick={() => setSelectedChart(stat.chartImage || null)}>
                <StatCard 
                  {...stat} 
                  isSelected={selectedChart === stat.chartImage}
                />
              </div>
            ))}
          </div>
          {selectedChart && (
            <div className="mt-6 sm:mt-8 flex justify-center">
              <img
                src={selectedChart}
                alt="Selected Chart"
                className="w-full max-w-[600px] h-auto object-contain"
                onError={(e) => {
                  console.error("Image failed to load:", selectedChart);
                  // 可以在这里设置一个回退图像或显示错误消息
                }}
              />
            </div>
          )}
        </div>
        <div className="mt-6 sm:mt-8">
          <KeywordStatsCard />
        </div>
        <div className="mt-8">
          <CommunityActivityCard />
        </div>
      </main>
    </div>
  );
}
