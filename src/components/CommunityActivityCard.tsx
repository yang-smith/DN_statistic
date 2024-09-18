'use client'
import { useState } from 'react';

const dateRanges = ['近15日', '近30日', '近半年'];
const rankingTypes = ['日常化', '个性化'];

interface ActivityStats {
  groupActivities: number;
  participations: number;
}

interface ActivityRanking {
  id: number;
  title: string;
  description: string;
  participants: number;
}

export default function CommunityActivityCard() {
  const [selectedRange, setSelectedRange] = useState(dateRanges[1]);
  const [selectedRankingType, setSelectedRankingType] = useState(rankingTypes[0]);

  const stats: ActivityStats = {
    groupActivities: 180,
    participations: 350,
  };

  const rankings: ActivityRanking[] = [
    {
      id: 1,
      title: '每周一次的DN茶村会员茶话会来啦！',
      description: '本期茶话会将托管于小初 和大猫共同完成!',
      participants: 46,
    },
    {
      id: 2,
      title: '这是又一次可以成为光荣"陪审员"的机会。',
      description: '继4.6号首次开庭 后，茶村陪审团将迎来全新挑战！',
      participants: 38,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">社区活动数据统计</h2>
        <span className="text-sm text-gray-500">统计周期 08-27 至 09-27</span>
      </div>
      <div className="flex space-x-2 mb-4">
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
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">在地群活动接龙次数：</p>
          <p className="text-3xl font-bold">{stats.groupActivities}</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">参与群接龙人次：</p>
          <p className="text-3xl font-bold">{stats.participations}</p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">社区活动排行榜</h3>
        <div className="flex space-x-2 mb-4">
          {rankingTypes.map((type) => (
            <button
              key={type}
              className={`px-3 py-1 text-sm rounded-full ${
                selectedRankingType === type
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setSelectedRankingType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      {rankings.map((ranking) => (
        <div key={ranking.id} className="mb-4 last:mb-0">
          <div className="flex items-start">
            <span className="text-2xl font-bold text-orange-500 mr-2">
              {String(ranking.id).padStart(2, '0')}
            </span>
            <div>
              <p className="font-semibold">{ranking.title}</p>
              <p className="text-sm text-gray-600">{ranking.description}</p>
              <p className="text-sm text-gray-500 mt-1">参与人数：{ranking.participants}人</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
