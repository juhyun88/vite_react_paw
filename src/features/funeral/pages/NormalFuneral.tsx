import { funeralPackages, itemContents } from "../data/funeral";

export type NormalFuneralProps = {
  className?: string;
};

export default function NormalFuneral({ className = "" }: NormalFuneralProps) {
  return (
    <div className={`bg-white text-gray-800 md:py-[100px] py-[80px] ${className}`}>
      {/* Hero Section */}
      <section className="w-full">
        <img
          src="https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/bn1.png"
          alt="Hero"
          className="w-full object-cover"
        />
        <div className="h-auto md:h-[191px] bg-[#C3B3A3] flex flex-col md:flex-row items-center justify-center px-6 md:pr-[560px] py-6">
          <p className="text-white text-[13px] md:text-[21px] font-[400] leading-relaxed text-center md:text-left">
            • 파워펙트웨이브는 체중에 따른 kg당 추가금이 없습니다.<br />
            • 모든 서비스는 비용은 부가세(VAT) 포함 금액입니다.<br />
            • 모든 서비스에는 [염습, 단독추모실, 개별화장, 유골함, 보자기]가 포함되어 있습니다.<br />
            • 모든 서비스에는 추모 예식 서비스 (편지쓰기, 발도장 스탬프, 인연의끈, 털 보관)가 포함되어 있습니다.
          </p>
        </div>
      </section>

      {/* Funeral Packages */}
      <section className="max-w-[1400px] mx-auto px-4 md:py-[50px] py-[80px] space-y-16">
        {funeralPackages.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-start gap-10 md:py-[50px] py-[0]"
          >
            {/* 이미지 */}
            <div className="w-full md:w-[720px] md:h-[423px] shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-[40px] md:rounded-[77px] object-cover"
              />
            </div>

            {/* 텍스트 */}
            <div className="flex-1 flex flex-col justify-between w-full space-y-6">
              <div className="space-y-2">
                <div className="text-[20px] md:text-[25px] font-[500] text-[#A5C1A0]">
                  {item.subtitle}
                </div>
                <h3 className="text-[24px] md:text-[35px] font-[700] text-[#1E3932]">
                  {item.title}
                  {item.tag && (
                    <span className="text-xs border border-gray-500 px-2 py-1 rounded-full ml-2">
                      {item.tag}
                    </span>
                  )}
                </h3>
                <p className="block text-[12px] md:text-[17px] font-[400] text-[#A5C1A0] whitespace-pre-line">
                  {item.description}
                </p>
              </div>

              <div className="text-sm space-y-2 pt-4">
                {item.prices.map((price, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-end ${
                      idx < item.prices.length - 1 ? "border-b pb-2" : ""
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-[18px] md:text-[20px] font-[500] text-[#1E3932] pb-2">
                        {price.mainlabel}
                      </span>
                      {price.sublabel && (
                        <span className="text-[20px] md:text-[25px] font-[600] text-[#1E3932]">
                          {price.sublabel}
                        </span>
                      )}
                    </div>
                    <span className="text-[18px] md:text-[20px] font-[600] text-[#1E3932]">
                      {price.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 소개 텍스트 1 */}
      <section className="max-w-[1400px] mx-auto px-4 py-[50px] text-center space-y-4">
        <h2 className="text-black text-[30px] md:text-[80px] font-[700] leading-snug">
          모든 이별을 존중하기 위해
        </h2>
        <p className="text-black text-[18px] md:text-[35px] font-[400] mx-auto leading-relaxed">
          파우펙트웨이브의 모든 장례용품은 화장 후, 재가 남지 않는 천연소재를 사용하며,<br className="hidden md:block" />
          작은 소동물부터 큰 대형동물까지 모든 크기와 체중을 고려하여 제작합니다.
        </p>
      </section>

      {/* 중간 배너 */}
      <section className="w-full py-[50px]">
        <img
          src="https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/bn2.png"
          alt="Middle Banner"
          className="w-full object-cover"
        />
      </section>

      {/* 소개 텍스트 2 */}
      <section className="max-w-[1400px] mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-black text-[24px] md:text-[80px] font-[700] leading-snug">
          우리가 온전히<br className="hidden md:block" /> 이별할 수 있도록
        </h2>
        <p className="text-black text-[18px] md:text-[35px] font-[400] mx-auto leading-relaxed">
          파우펙트 웨이브와 함께플러스는 장례 후, 아이의 유골함을<br className="hidden md:block" />
          어떻게 보관할지 고민하는 보호자를 위한 선택 구성입니다.
        </p>
      </section>

      {/* 2개 이미지 섹션 */}
      <section className="max-w-[1400px] mx-auto px-4 py-[50px] flex flex-col md:flex-row justify-between gap-[30px] md:gap-[50px]">
        <img
          src="https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/bn3.jpg"
          alt="중간 이미지 1"
          className="w-full md:w-1/2 h-auto object-cover rounded-2xl"
        />
        <img
          src="https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/bn4.jpg"
          alt="중간 이미지 2"
          className="w-full md:w-1/2 h-auto object-cover rounded-2xl"
        />
      </section>

      {/* 아이템 섹션 */}
      <section className="max-w-[1400px] mx-auto px-4 py-16 space-y-12">
        {itemContents.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-[50px] pb-[100px] ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-[750px] h-auto object-cover rounded-[40px] md:rounded-[77px]"
            />
            <div
              className={`w-full ${
                index % 2 !== 0
                  ? "md:text-right md:items-end md:ml-auto"
                  : "text-left"
              }`}
            >
              <p className="text-[#A5C1A0] text-[20px] md:text-[26px] font-[600] mb-2">
                {item.subtitle}
              </p>
              <h4
                className={`text-[#1E3932] text-[28px] md:text-[43px] font-[600] mb-8 flex items-center gap-2 ${
                  index % 2 !== 0 ? "justify-end" : ""
                }`}
              >
                {item.title}
                {item.tag && (
                  <span className="text-[18px] md:text-[26px] font-[600] bg-[#1E3932] text-white text-center px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
              </h4>
              <p className="text-[#A5C1A0] text-[16px] md:text-[18px] font-[500] mb-6 leading-relaxed">
                {item.description}
              </p>
              <p className="text-[#C3B3A3] text-[16px] md:text-[18px] font-[500] leading-relaxed">
                {item.description2}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
