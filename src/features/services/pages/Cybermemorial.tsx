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
      <div className="max-w-[1280px] mx-auto space-y-12 text-center">
        <h2 className="text-[80px] font-[700] leading-[1.4] my-[100px]">
          기억되는 모든 추억들을 담아<br />
          슬픔을 치유하는 ‘안녕’의 공간
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[40px] justify-center">
          {memorialData.map((pet, index) => (
            <div
              key={index}
              className="flex w-[700px] h-[300px] bg-white shadow-lg rounded-[30px] overflow-hidden cursor-pointer"
              onClick={() =>
                setSelectedMemorial({
                  ...pet,
                  modalImg: modalImages[index] || pet.img,
                })
              }
            >
              <div className="w-[50%] h-full">
                <img
                  src={pet.img}
                  alt={pet.name}
                  className="w-full h-full object-cover rounded-l-[30px]"
                />
              </div>
              <div className="w-[50%] h-full flex flex-col justify-center items-start pl-[20px] rounded-r-[20px]">
                <p className="text-[38px] font-[600]">{pet.name} ❤️</p>
                <p className="text-[30px] font-[300] text-gray-500">{pet.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="px-[50px] py-[20px] my-[100px] w-[390px] h-[100px] border-4 border-[#A5C1A0] text-[#A5C1A0] text-[40px] font-[700] rounded-[80px] bg-transparent transition-all duration-200 hover:opacity-80">
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

      <div className="tab-content mt-6">
        {typeof currentTab?.content === "function"
          ? currentTab.content(setSelectedMemorial)
          : currentTab?.content}
      </div>

      {selectedMemorial && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-[30px] shadow-lg max-w-[1600px] w-full h-[800px] text-center relative">
            <button
              className="absolute top-6 right-6 text-black text-[60px] font-bold hover:text-gray-800 transition"
              onClick={() => setSelectedMemorial(null)}
            >
              ×
            </button>
            <img
              src={selectedMemorial.modalImg}
              alt={selectedMemorial.name}
              className="w-full h-[600px] object-cover rounded-[20px] mb-4"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cybermemorial;
