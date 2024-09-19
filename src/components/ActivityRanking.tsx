import React from 'react';

interface RankingProps {
  data: {
    topActivities: Array<{ title: string; participants: number }>;
  };
}

export default function ActivityRanking({ data }: RankingProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">社区活动排行榜</h3>
      {data.topActivities.slice(0, 10).map((activity, index) => (
        <div key={index} className="mb-4 flex items-start">
          <span className={`text-2xl font-bold mr-3 w-8 ${
            index < 3 ? 'text-orange-500' : 'text-gray-400'
          }`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <p className="font-medium text-gray-800">{activity.title}</p>
            <p className="text-sm text-gray-500 mt-1">参与人数：{activity.participants}人</p>
          </div>
        </div>
      ))}
    </div>
  );
};

