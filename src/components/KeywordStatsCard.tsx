import { useState } from 'react';
import Image from 'next/image';

const dateRanges = ['近7日', '近30日'];

export default function KeywordStatsCard() {
  const [selectedRange, setSelectedRange] = useState(dateRanges[0]);

  const getImageSrc = () => {
    return selectedRange === '近7日' ? '/wordcloud-7days.png' : '/wordcloud-30days.png';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">在地群聊天关键词统计</h2>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">统计周期 08-27 至 09-03</span>
        <div className="flex space-x-2">
          {dateRanges.map((range) => (
            <button
              key={range}
              className={`px-3 py-1 text-sm rounded-full ${
                selectedRange === range
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
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
          width={500}
          height={300}
          layout="responsive"
          className="rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">排名前五的关键词：</h3>
        <p className="text-sm text-gray-600">秀水，活动，振中，杨光，分享</p>
      </div>
    </div>
  );
}