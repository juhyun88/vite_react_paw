import React from "react";

type ComponentProps = {
  className?: string;
};

const Measure: React.FC<ComponentProps> = ({ className = "" }) => {
  const cardList = [
    {
      title: "무지개다리를 건넜나요?",
      content: [
        "1. 반려동물이 사망하면 24시간 이내에 신고해야 합니다.",
        "2. 장례 전에는 반드시 반려동물 등록을 말소해야 합니다.",
      ],
      image: "/images/card1.jpg",
    },
    {
      title: "장이 전 준비사항",
      content: [
        "1. 시신을 깨끗이 닦고 마른 천으로 감싸 냉장보관하세요.",
        "2. 장례 일정 전까지 안정된 곳에 보관합니다.",
      ],
      image: "/images/card2.jpg",
    },
  ];

  return (
    <div className={`w-full max-w-[1280px] mx-auto py-10 ${className || ""}`}>
      {cardList &&
        cardList.map((card, index) => (
          <div key={index} className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden mb-6">
            <img
              src={card.image}
              alt={card.title}
              className="w-full md:w-1/3 h-60 object-cover"
              onError={(e) => (e.currentTarget.src = "/images/default.jpg")}
            />
            <div className="p-6 flex-1">
              <h2 className="text-sm font-bold text-gray-500 mb-1">{`0${index + 1} | ${card.title}`}</h2>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                {card.content.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Measure;
