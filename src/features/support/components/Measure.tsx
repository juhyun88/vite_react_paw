import React from "react";

interface InfoCardProps {
  number: string;
  title: string;
  list: string[];
  image: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ number, title, list, image }) => {
  return (
    <div className="w-full h-[376px] flex flex-col md:flex-row overflow-hidden rounded-xl shadow-md mb-6">
      {/* 이미지 영역 */}
      <div className="w-full md:w-1/2 h-[200px] md:h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 텍스트 영역 */}
      <div className="w-full md:w-1/2 bg-white px-6 py-6 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-600 mb-2">
          {number} <span className="text-black text-xl ml-2">{title}</span>
        </h3>
        <ul className="text-sm text-gray-700 space-y-1 leading-relaxed">
          {list.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Measure: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={`${className} max-w-[1280px] mx-auto px-4 py-[80px] md:py-[100px]`}>
      <InfoCard
        number="01"
        title="무지개다리를 건넜나요?"
        list={[
          "반려동물이 숨을 거두었다면 조용한 곳에 편히 눕혀 주세요.",
          "이불이나 수건으로 감싸 체온이 빠르게 식을 수 있도록 합니다.",
        ]}
        image="https://pawfectwave.vercel.app/img/goupimg/g500.jpg"
      />
      <InfoCard
        number="02"
        title="물이 굳어가기 전 조치사항"
        list={[
          "다리와 꼬리를 모으고 편안한 자세를 유지해 주세요.",
          "얼음팩을 복부 아래에 두면 부패를 줄일 수 있어요.",
        ]}
        image="https://pawfectwave.vercel.app/img/goupimg/g400.jpg"
      />
      <InfoCard
        number="03"
        title="몸 속의 분비물 방지하기"
        list={[
          "머리 아래 수건을 받쳐 분비물을 방지해 주세요.",
          "코와 항문 부위를 깨끗한 티슈로 닦아 주세요.",
        ]}
        image="https://pawfectwave.vercel.app/img/goupimg/g300.jpg"
      />
      <InfoCard
        number="04"
        title="함께 시간을 보내도 될까요?"
        list={[
          "마지막 인사를 위해 잠시 함께 있어 주세요.",
          "실내 온도를 낮춰 시신이 상하지 않도록 주의해 주세요.",
        ]}
        image="https://pawfectwave.vercel.app/img/goupimg/g200.jpg"
      />
      <InfoCard
        number="05"
        title="장례식장 이동"
        list={[
          "예약된 시간에 맞춰 조심스럽게 이동해 주세요.",
          "이동 중 충격을 줄이기 위해 담요로 감싸 주세요.",
        ]}
        image="https://pawfectwave.vercel.app/img/goupimg/g100.jpg"
      />
    </div>
  );
};

export default Measure;
