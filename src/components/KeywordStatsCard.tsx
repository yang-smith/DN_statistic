import { useState } from 'react';
import Image from 'next/image';

const dateRanges = ['八月', '合计'];

const keywordData = {
  '八月': ['子云', '朋友', 'Mia', '时间', '循环'],
  '合计': ['小伙伴', '朋友', '余村', '旺柴', '分享']
};

export default function KeywordStatsCard() {
  const [selectedRange, setSelectedRange] = useState(dateRanges[0]);

  const getImageSrc = () => {
      return selectedRange === '八月' ? '/ciyun8.png' : '/ciyun1year.png';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">在地群聊天关键词统计</h2>
        <span className="text-xs text-gray-500">统计周期 2023-5-13 至 2024-9-13</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
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
      </div>
      <div className="mb-4">
        <Image
          src={getImageSrc()}
          alt="关键词词云"
          width={700}
          height={400}
          layout="responsive"
          className="rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-base mb-2">排名前五的关键词：</h3>
        <p className="text-lg font-semibold">{keywordData[selectedRange as keyof typeof keywordData].join('，')}</p>
      </div>
    </div>
  );
}