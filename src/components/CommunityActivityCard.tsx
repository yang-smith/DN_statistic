'use client'
import React, { useState } from 'react';
import ActivityRanking from './ActivityRanking';

const dateRanges = ['八月', '合计'];

interface ActivityStats {
  groupActivities: number;
  participations: number;
}

interface ActivityData {
  stats: ActivityStats;
  rankings: {
    topActivities: Array<{ title: string; participants: number }>;
  };
}

const CommunityActivityCard: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState(dateRanges[1]);

  const activityData: Record<string, ActivityData> = {
    '八月': {
      stats: {
        groupActivities: 55,
        participations: 83,
      },
      rankings: {
        topActivities: [
          { title: '今天下午，老许开讲！关于在建新社区"DN黄山（黄山数字游民公社）"的项目分享，感兴趣的伙伴们，来 ！', participants: 43 },
          { title: '每周一次的DN余村会员茶话会来啦！ 超大桶提拉米苏冰淇淋及白桃乌龙冰淇淋🍦🍨！！', participants: 41 },
          { title: '写了一个脱口秀开放麦🎤的稿子，10分钟左右，第一次写第一次表演，想先在余村试一试。 表演时间定在明晚9点a2天幕下沙发区，希望大家能来做我的观众🏟️', participants: 32 },
          { title: '《夜幕聊天局之当领队是种什么体验》 📍A2门口的铁皮桌', participants: 24 },
          { title: '陈宝宝，陈教练 要走了，最后组一次飞盘🥏🥏 🥏🥏🥏比赛！时间：五点半之后凉一点后开始 地点：门口草坪 3打3 4打4 或5打5 看人数', participants: 21 },
          { title: '剧本杀来啦~你是否感觉最近的生活乏味无趣？你是否想要体验一下不一样的人生？快从枯燥沉闷的I人生活中跳脱出来吧，来跟我一起进入一个奇幻的新世界！感受一场不一样的新人生！这个世界里有爱情，有协作，有凶杀，有推理，有反转，有结束后的久久无法平静。', participants: 12 },
          { title: '甜酒酿 加油凑5盒', participants: 11 },
        ],
      },
    },
    '合计': {
      stats: {
        groupActivities: 1635,
        participations: 611,
      },
      rankings: {
        topActivities: [
          { title: 'DN余村 •马耳他数字游民分享会 （免费请大家吃下午茶～）', participants: 55 },
          { title: '哈喽各位的🎃服装已就位了吗，没就位也没关系，下午有装贴、道具等分享，大家互相也可以匀一下。今晚万圣夜你就是Queen！！DN余村就是巨鹿路分路！！！ 为了让万圣夜嗨起来，我们准备了软饮特调、烤翅炸物，舞台布置，欢迎一起玩耍👏 20:30入场A2舞台，22:00后在B1层户里蹦迪、户外联动烤火活动。详细安排可看下方海报，预收门票19.9元，欢迎接龙：', participants: 53 },
          { title: '快走了 做个分享吧 时间⏰：周六晚上8:30-9:30', participants: 52 },
          { title: '每周一次的DN余村会员茶话会来啦！ 给大伙准备了超大桶冰淇淋🍨快来冰爽一下！', participants: 48 },
          { title: '🔥摄影分享课（构图+摄影预案+约拍技巧）', participants: 47 },
          { title: '下午15:30 新一轮Village Tour！', participants: 45 },
          { title: '叮咚～系统通知： 尊敬的DN余村在地体验玩家，又到了每周一度九里柴火房茶话会的环节啦！', participants: 44 },
          { title: '🎉山竹共学 AI 分享会来啦！', participants: 43 },
          { title: '今天下午，老许开讲！关于在建新社区"DN黄山（黄山数字游民公社）"的项目分享，感兴趣的伙伴们，来 ！', participants: 43 },
          { title: '🎬纪录短片《KC的天荒坪云南烧烤纪录》 *29日周一晚8：00🔥B1讨论室🔥宇宙首映', participants: 42 },
          { title: '🎬8/10周四晚8：00 A栋舞台大投影余村游民主创短片放映 🎬', participants: 41 },
          { title: '这是又一次可以成为光荣"陪审员"的机会。', participants: 38 },
        ],
      },
    },
  };

  const currentData = activityData[selectedRange];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">社区活动数据统计</h2>
        <span className="text-xs text-gray-500">统计周期 2023-5-13 至 2024-9-13</span>
      </div>
      <div className="flex space-x-2 mb-4">
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
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="rounded-lg p-4 border border-[#B4B9C9]">
          <p className="text-sm text-[#6D758F] mb-2">在地群活动接龙次数：</p>
          <p className="text-3xl font-bold">{currentData.stats.groupActivities}</p>
        </div>
        <div className="rounded-lg p-4 border border-[#B4B9C9]">
          <p className="text-sm text-[#6D758F] mb-2">多少人参加过接龙活动：</p>
          <p className="text-3xl font-bold">{currentData.stats.participations}</p>
        </div>
      </div>
      <ActivityRanking data={currentData.rankings} />
    </div>
  );
};

export default CommunityActivityCard;

