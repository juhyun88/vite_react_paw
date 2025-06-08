import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const tabList = [
  { key: "carry", label: "운구서비스", content: <div>운구서비스 내용</div> },
  { key: "nonvisit", label: "비동행장례서비스", content: <div>비동행장례서비스 내용</div> },
  {
    key: "storage",
    label: "임시안치,산골",
    content: (
      <div className="max-w-[1280px] mx-auto space-y-12">
        {/* 냉장 안치 서비스 */}
        <div className="flex flex-col md:flex-row items-start gap-[90px]  my-[100px]">
          <img
            src="https://pawfectwave.vercel.app/img/pc/04/300/image100.jpg"
            alt="냉장 안치 이미지"
            className="rounded-[50px] w-full md:w-[50%] object-cover"
          />
          <div className="flex-1 space-y-4 text-[##3A3A3A] ">
            <h2 className="text-2xl md:text-[50px] font-[600] leading-[1.4]">냉장 안치 서비스</h2>
            <p className="text-sm md:text-[21px] font-[400] leading-[1] pb-[50px]">Storage Service<br/>안치서비스</p>
            <p className="text-base md:text-[19px] font-[300] leading-[1.2] pb-[50px]">
              아이가 무지개 다리를 건넌 후 바로 장례를 진행하기 어려운 경우
              <br />
              장례식장에서 아이를 장례 당일까지 안전하게 안치해드리는 서비스입니다.
              <br />
              염습 후 전용 냉장시설에 안치하며, 개별 바디백으로 안전하게 안치합니다.
            </p>

            <div className="grid grid-cols-2 text-center border border-gray-300 rounded-md overflow-hidden">
              <div className="bg-[#4C9C8B] text-white py-3 md:text-[20px] font-[500]">비용</div>
              <div className="bg-[#4C9C8B] text-white py-3 md:text-[20px] font-[500]">비고</div>
              <div className="py-3 border-t text-[##3A3A3A] md:text-[20px] font-[500]">1일 35,000원</div>
              <div className="py-3 border-t  text-[##3A3A3A] md:text-[20px] font-[500]">최대 안치기간 1주일</div>
            </div>

            <p className="text-xs text-[##3A3A3A] md:text-[18px] font-[300] mt-2">
              파우펙트웨이브의 영안실은 대형견도 안치가 가능합니다.
            </p>
          </div>
        </div>

        {/* 산골 서비스 */}
        <div className="flex flex-col md:flex-row items-start gap-[90px]">
          <div className="flex-1 space-y-4 text-[#1E1E1E]">
            <h2 className="text-2xl md:text-[50px] font-[600] leading-[1.4]">산골 서비스</h2>
            <p className="text-sm md:text-[21px] font-[400] leading-[1] pb-[70px]">Return To Nature<br/>산골대행</p>
            <p className="text-base md:text-[19px] font-[300] leading-[1.2] pb-[70px] ">
              장례 후 아이를 다시 자연으로 돌려보내주고 싶으신 경우
              <br />
              파우펙트웨이브에서는 산골(散骨) : 화장한 유골을 땅에 묻거나 뿌리는 일을
              대행해드리는 서비스입니다.
            </p>

            <div className="grid grid-cols-1 text-center mt-6 border border-gray-300 rounded-md overflow-hidden">
                <div className="bg-[#4C9C8B] text-white py-3 md:text-[20px] font-[500]">산골비용</div>
                <div className="py-3 border-t text-[##3A3A3A] md:text-[20px] font-[500]">60,000원</div>
            </div>
          </div>

          <img
            src="https://pawfectwave.vercel.app/img/pc/04/300/image200.jpg"
            alt="산골 자연 이미지"
            className="rounded-[50px] w-full md:w-[50%] object-cover"
          />
        </div>
      </div>
    ),
  },
];

function Boneservice({ className }: { className?: string }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. URL 쿼리에서 tab 값을 읽어 초기값 설정
  const initialTab = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(() =>
    initialTab && tabList.some(t => t.key === initialTab) ? initialTab : "storage"
  );

  // 2. URL 쿼리가 바뀔 때 activeTab 상태를 동기화
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tabList.some(t => t.key === tab) && tab !== activeTab) {
      setActiveTab(tab);
    }
  }, [searchParams, activeTab]);

  // 탭 클릭 시
  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
    setSearchParams({ tab: tabKey });
  };

  return (
    <div className={`${className} max-w-[1280px] mx-auto my-[100px]`}>
      <div className="tab-menu flex space-x-4 pb-4 justify-center">
        {tabList.map(tab => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`px-6 py-2 rounded-full border text-sm md:text-base transition-all duration-200
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
