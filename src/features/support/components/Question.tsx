import { useState } from "react";

const faqData = [
  { question: "장례 후 인증번호 알림톡이 오지 않아요.", answer: "장례 후 인증번호는 자동으로 발송됩니다. 만약 받지 못하셨다면 고객센터로 문의해주세요." },
  { question: "장례 비용은 어떻게 결제하나요?", answer: "장례 비용은 카드 결제 및 계좌 이체가 가능합니다." },
  { question: "장례 절차는 어떻게 진행되나요?", answer: "장례 절차는 상담 후 예약, 운구, 장례 진행 순으로 이루어집니다." },
  { question: "반려동물 장례 시 필요한 서류가 있나요?", answer: "반려동물 장례 시 별도의 서류는 필요하지 않습니다." },
  { question: "장례식장 방문 예약은 필수인가요?", answer: "네, 원활한 진행을 위해 방문 예약이 필요합니다." },
  { question: "장례 후 유골은 어떻게 처리되나요?", answer: "유골은 유골함에 담아 전달되며, 산골 서비스도 가능합니다." },
  { question: "장례식장 운영 시간은 어떻게 되나요?", answer: "장례식장은 24시간 운영되며, 예약제로 진행됩니다." },
  { question: "장례 후 추가 서비스가 있나요?", answer: "장례 후 추모관 서비스 및 유골 보관 서비스가 제공됩니다." },
  { question: "장례 예약은 어떻게 하나요?", answer: "장례 예약은 홈페이지 또는 고객센터를 통해 가능합니다." },
  { question: "장례 후 반려동물의 사진을 받을 수 있나요?", answer: "네, 장례 후 추모 사진을 제공해드립니다." },
];

function Question({ className }: { className: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`max-w-[1400px] mx-auto my-[80px] md:my-[100px] p-[20px] ${className}`}>
      <h1 className="text-[26px] md:text-[40px] font-[600] text-center mb-[80px] md:mb-[100px]">자주 문의하는 질문에 대한 답변을 확인하실수 있습니다.</h1>

      <div className="border-t border-b border-gray-300">
        {faqData.map((faq, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center py-[20px] border-t border-b border-gray-300 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex items-center gap-[20px]">
                <span className="md:text-[24px] font-bold text-[#4C9C8B]">Q</span>
                <span className="text-[15px] md:text-[20px] font-medium">{faq.question}</span>
              </div>
              <span className="md:text-[24px] font-bold text-gray-500 transition-transform duration-200">
                {openIndex === index ? "▼" : "▲"}
              </span>
            </div>

            {openIndex === index && (
              <div className="py-[15px] px-[20px] bg-gray-100 text-[18px] text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
