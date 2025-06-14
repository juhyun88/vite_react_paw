import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const tabList = [
  { key: "carry", label: "운구서비스", content: <div>운구서비스 내용</div> },
  { key: "nonvisit", label: "비동행장례서비스", content: <div>비동행장례서비스 내용</div> },
  {
    key: "storage",
    label: "임시안치,산골",
    content: (
      <div className="max-w-[1280px] mx-auto space-y-20 px-4 md:px-0">
        {/* 냉장 안치 서비스 */}
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-[90px] my-16 md:my-[100px]">
          <img
            src="https://pawfectwave.vercel.app/img/pc/04/300/image100.jpg"
            alt="냉장 안치 이미지"
            className="rounded-[30px] md:rounded-[50px] w-full md:w-1/2 object-cover"
          />
          <div className="flex-1 space-y-4 text-[#3A3A3A]">
            <h2 className="text-2xl md:text-[42px] font-bold leading-snug">냉장 안치 서비스</h2>
            <p className="text-sm md:text-[21px] font-medium leading-tight pb-6">Storage Service<br />안치서비스</p>
            <p className="text-sm md:text-[19px] font-light leading-relaxed pb-6">
              아이가 무지개 다리를 건넌 후 바로 장례를 진행하기 어려운 경우
              <br />
              장례식장에서 아이를 장례 당일까지 안전하게 안치해드리는 서비스입니다.
              <br />
              염습 후 전용 냉장시설에 안치하며, 개별 바디백으로 안전하게 안치합니다.
            </p>

            <div className="grid grid-cols-2 text-center border border-gray-300 rounded-md overflow-hidden text-sm md:text-[20px] font-medium">
              <div className="bg-[#4C9C8B] text-white py-3">비용</div>
              <div className="bg-[#4C9C8B] text-white py-3">비고</div>
              <div className="py-3 border-t">1일 35,000원</div>
              <div className="py-3 border-t">최대 안치기간 1주일</div>
            </div>

            <p className="text-xs md:text-[18px] font-light mt-2">
              파우펙트웨이브의 영안실은 대형견도 안치가 가능합니다.
            </p>
          </div>
        </div>

        {/* 산골 서비스 */}
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-[90px] my-16 md:my-[100px]">
          <div className="flex-1 space-y-4 text-[#1E1E1E]">
            <h2 className="text-2xl md:text-[42px] font-bold leading-snug">산골 서비스</h2>
            <p className="text-sm md:text-[21px] font-medium leading-tight pb-6">Return To Nature<br />산골대행</p>
            <p className="text-sm md:text-[19px] font-light leading-relaxed pb-6">
              장례 후 아이를 다시 자연으로 돌려보내주고 싶으신 경우
              <br />
              파우펙트웨이브에서는 산골(散骨) : 화장한 유골을 땅에 묻거나 뿌리는 일을
              대행해드리는 서비스입니다.
            </p>

            <div className="grid grid-cols-1 text-center border border-gray-300 rounded-md overflow-hidden text-sm md:text-[20px] font-medium mt-6">
              <div className="bg-[#4C9C8B] text-white py-3">산골비용</div>
              <div className="py-3 border-t">60,000원</div>
            </div>
          </div>

          <img
            src="https://pawfectwave.vercel.app/img/pc/04/300/image200.jpg"
            alt="산골 자연 이미지"
            className="rounded-[30px] md:rounded-[50px] w-full md:w-1/2 object-cover"
          />
        </div>
      </div>
    ),
  },
];

function Boneservice({ className }: { className?: string }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(() =>
    initialTab && tabList.some(t => t.key === initialTab) ? initialTab : "storage"
  );

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tabList.some(t => t.key === tab) && tab !== activeTab) {
      setActiveTab(tab);
    }
  }, [searchParams, activeTab]);

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
    setSearchParams({ tab: tabKey });
  };

  return (
    <div className={`${className} max-w-[1280px] mx-auto px-4 md:px-8 my-16 md:my-[100px]`}>
      <div className="tab-menu flex flex-wrap justify-center gap-2 md:gap-4 pb-6">
        {tabList.map(tab => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`px-2 py-2 rounded-full border text-sm md:text-base transition-all duration-200
              ${
                activeTab === tab.key
                  ? "bg-[#4C9C8B] text-white border-[#4C9C8B]"
                  : "bg-white text-[#4C9C8B] border-[#4C9C8B] hover:bg-[#e9f4f1]"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content mt-6">{tabList.find(tab => tab.key === activeTab)?.content}</div>
    </div>
  );
}

export default Boneservice;
