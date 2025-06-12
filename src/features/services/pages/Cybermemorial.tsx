import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

// 추모 데이터
const memorialData = [
  { name: "하늘", sub: "나빛나", img: "https://pawfectwave.vercel.app/img/pc/04/400online_memorial/pp100.jpg" },
  { name: "박뭉치짱", sub: "오모나", img: "https://pawfectwave.vercel.app/img/pc/04/400online_memorial/pp200.jpg" },
  { name: "로빈", sub: "루사랑", img: "https://pawfectwave.vercel.app/img/pc/04/400online_memorial/pp300.jpg" },
  { name: "루비", sub: "고나리", img: "https://pawfectwave.vercel.app/img/pc/04/400online_memorial/pp400.jpg" },
];

// 모달 이미지
const modalImages = [
  "https://pawfectwave.vercel.app/img/pc/04/400online_memorial/on300.jpg",
  "https://pawfectwave.vercel.app/img/pc/04/400online_memorial/on300.jpg",
  "https://pawfectwave.vercel.app/img/pc/04/400online_memorial/on300.jpg",
  "https://pawfectwave.vercel.app/img/pc/04/400online_memorial/on300.jpg",
];

// 타입 정의
type Memorial = {
  name: string;
  sub: string;
  img: string;
  modalImg: string;
};

// 탭 리스트
const tabList = [
  { key: "carry", label: "운구서비스", content: <div>운구서비스 내용</div> },
  { key: "nonvisit", label: "비동행장례서비스", content: <div>비동행장례서비스 내용</div> },
  { key: "storage", label: "임시안치,산골", content: <div>임시안치,산골 내용</div> },
  {
    key: "memorial",
    label: "온라인 추모관",
    content: (setSelectedMemorial: (value: Memorial) => void) => (
      <div className="max-w-[1280px] mx-auto space-y-12 px-4 text-center">
        <h2 className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-bold leading-snug my-10 md:my-20">
          기억되는 모든 추억들을 담아<br />
          슬픔을 치유하는 ‘안녕’의 공간
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 justify-center">
          {memorialData.map((pet, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row w-full bg-white shadow-lg rounded-[30px] overflow-hidden cursor-pointer transition hover:scale-[1.01]"
              onClick={() =>
                setSelectedMemorial({
                  ...pet,
                  modalImg: modalImages[index] || pet.img,
                })
              }
            >
              <div className="sm:w-1/2 w-full h-[250px] sm:h-auto">
                <img
                  src={pet.img}
                  alt={pet.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:w-1/2 p-4 sm:p-6 flex flex-col justify-center items-start">
                <p className="text-[28px] sm:text-[34px] font-semibold">{pet.name} ❤️</p>
                <p className="text-[20px] sm:text-[26px] font-light text-gray-500">{pet.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="w-full sm:w-[390px] h-[70px] sm:h-[100px] border-4 border-[#A5C1A0] text-[#A5C1A0] text-[24px] sm:text-[40px] font-bold rounded-full mt-12 hover:opacity-80 transition-all">
            다음
          </button>
        </div>
      </div>
    ),
  },
];

// 메인 컴포넌트
function Cybermemorial({ className }: { className?: string }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedMemorial, setSelectedMemorial] = useState<Memorial | null>(null);

  const initialTab = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(() =>
    initialTab && tabList.some(t => t.key === initialTab) ? initialTab : "memorial"
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

  const currentTab = tabList.find(t => t.key === activeTab);

  return (
    <div className={`${className} max-w-[1280px] mx-auto my-20 px-4`}>
      <div className="tab-menu flex flex-wrap justify-center gap-2 sm:gap-4 pb-6">
        {tabList.map(tab => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`md:px-3 md:py-1 px-4 py-2 rounded-full border text-[13px] md:text-sm md:text-base transition-all duration-200
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

      <div className="tab-content mt-6">
        {typeof currentTab?.content === "function"
          ? currentTab.content(setSelectedMemorial)
          : currentTab?.content}
      </div>

      {selectedMemorial && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-4 sm:p-8 rounded-[30px] shadow-lg w-full max-w-[95%] md:max-w-[1000px] lg:max-w-[1400px] relative">
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-black text-[36px] sm:text-[48px] font-bold hover:text-gray-800 transition"
              onClick={() => setSelectedMemorial(null)}
            >
              ×
            </button>
            <img
              src={selectedMemorial.modalImg}
              alt={selectedMemorial.name}
              className="w-full max-h-[500px] object-cover rounded-[20px] mb-4"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cybermemorial;
