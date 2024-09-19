'use client'

import KeywordStatsCard from "@/components/KeywordStatsCard";
import CommunityActivityCard from "@/components/CommunityActivityCard";
import ChatFrequencyCard from "@/components/ChatFrequencyCard";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] p-4 sm:p-8">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-900">社区数据</h1>
        <div className="mb-6">
          <ChatFrequencyCard />
        </div>
        <div className="mb-6">
          <KeywordStatsCard />
        </div>
        <div>
          <CommunityActivityCard />
        </div>
      </main>
    </div>
  );
}
