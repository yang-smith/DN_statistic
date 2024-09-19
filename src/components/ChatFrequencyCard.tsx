'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FiMessageSquare, FiFileText } from 'react-icons/fi';

const dateRanges = ['八月', '合计'];

const frequencyData = {
  '八月': {
    totalMessages: '4,463',
    totalWords: '172,106',
    highestTimeSlot: '18:00-19:00',
    mostActiveDay: '周日',
    timeChartSrc: '/day8.png',
    dayChartSrc: '/week8.png'
  },
  '合计': {
    totalMessages: '138,849',
    totalWords: '4,441,340',
    highestTimeSlot: '17:00-18:00',
    mostActiveDay: '周五',
    timeChartSrc: '/timeall.png',
    dayChartSrc: '/weekall.png'
  }
};

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => (
  <div className="bg-white rounded-lg p-4 border border-gray-200">
    <div className="flex items-center mb-2">
      <p className="text-xs text-gray-500">{title}</p>
    </div>
    <p className="text-xl font-semibold">{value}</p>
  </div>
);

export default function ChatFrequencyCard() {
  const [selectedRange, setSelectedRange] = useState(dateRanges[0]);
  const [activeChart, setActiveChart] = useState<'time' | 'day'>('day');

  const currentData = frequencyData[selectedRange as keyof typeof frequencyData];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">在地群聊天记录统计</h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div className="flex space-x-2 mb-2 sm:mb-0">
          {dateRanges.map((range) => (
            <button
              key={range}
              className={`px-3 py-1 text-sm rounded-full ${
                selectedRange === range
                  ? 'bg-[#F1F3F7] text-[#6D758F]'
                  : 'bg-transparent text-[#6D758F]'
              }`}
              onClick={() => setSelectedRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
        <span className="text-xs text-gray-500">统计周期 2023-5-13 至 2024-9-13</span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6">
        <StatCard icon={<FiMessageSquare className="w-6 h-6 text-blue-500" />} title="在地群聊天条数" value={currentData.totalMessages} />
        <StatCard icon={<FiFileText className="w-6 h-6 text-green-500" />} title="总文字数" value={currentData.totalWords} />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div 
          className={`flex items-center p-4 rounded-lg cursor-pointer border border-gray-200 ${activeChart === 'time' ? 'bg-[#FFF4F4]' : 'bg-white'}`}
          onClick={() => setActiveChart('time')}
        >
          <div>
            <p className="text-xs text-[#6D758F] mb-2">聊天频率最高的时间段</p>
            <p className="text-lg font-semibold">{currentData.highestTimeSlot}</p>
          </div>
        </div>
        <div 
          className={`flex items-center p-4 rounded-lg cursor-pointer border border-gray-200 ${activeChart === 'day' ? 'bg-[#F4F6FF]' : 'bg-white'}`}
          onClick={() => setActiveChart('day')}
        >
          <div>
            <p className="text-xs text-[#6D758F] mb-2">每周聊天最多为那一天</p>
            <p className="text-lg font-semibold">{currentData.mostActiveDay}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Image
          src={activeChart === 'time' ? currentData.timeChartSrc : currentData.dayChartSrc}
          alt={activeChart === 'time' ? "时间段分布图" : "星期分布图"}
          width={500}
          height={300}
          layout="responsive"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
