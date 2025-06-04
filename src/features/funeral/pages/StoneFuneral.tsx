import { stonePackages } from "../data/funeral";


export type StoneFuneralProps = {
    className?: string;
  };
  
  export default function StoneFuneral({ className = "" }: StoneFuneralProps) {
    return (
      <div className={`bg-white text-gray-800 ${className}`}>
        {/* Hero Section */}
        <section className="w-full">
          <img
            src="https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/bn1.png"
            alt="Hero"
            className="w-full object-cover mt-[50px]"
          />
  
          <div className="h-[191px] bg-[#C3B3A3] flex items-center pr-[560px] justify-center">
          <p className="text-white text-[21px] font-[400]">• 파워펙트웨이브는 체중에 따른 kg당 추가금이 없습니다.<br />
              • 모든 서비스는 비용은 부가세(VAT) 포함 금액입니다.<br />
              • 모든 서비스에는[염습, 단독추모실, 개별화장, 유골함, 보자기]가 포함되어 있습니다.<br />
              • 모든 서비스에는추모 예식 서비스 (편지쓰기, 발도장 스탬프, 인연의끈, 털 보관)가 포함되어 있습니다.</p>
          </div>
        </section>

        {/* 패키지 목록 */}
              <section className="max-w-[1400px] mx-auto px-4 py-[50px] space-y-16">
                {stonePackages.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row items-start gap-10 py-[50px]"
                  >
                    {/* 이미지 */}
                    <div className="w-full md:w-[720px] md:h-[423px] shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto rounded-[77px] object-cover"
                      />
                    </div>
        
                    {/* 텍스트 */}
                    <div className="flex-1 flex flex-col justify-between">
                         <div className="space-y-4">
                      <div className="text-[25px] font-[500] text-[#A5C1A0]">
                        {item.subtitle}
                      </div>
                      <h3 className="text-[35px] font-[700] text-[#1E3932]">
                        {item.title}
                        {item.tag && (
                          <span className="text-xs border border-gray-500 px-2 py-1 rounded-full ml-2">
                            {item.tag}
                          </span>
                        )}
                      </h3>
                      <p className="block text-[17px] font-[400] text-[#A5C1A0] whitespace-pre-line">
                        {item.description}
                      </p>
                      </div>
        
                      <div className="text-sm space-y-2 self-end w-full pt-6">
                        {item.prices.map((price, idx) => (
                          <div
                            key={idx}
                            className={`flex justify-between  items-end ${
                              idx < item.prices.length - 1 ? "border-b pb-2" : ""
                            }`}
                          >
                            <div className="flex flex-col items-start">
                              <span className="text-[20px] font-[500] text-[#1E3932] pb-[10px] ">
                                {price.mainlabel}
                              </span>
                              {price.sublabel && (
                                <span className="text-[25px] font-[600] text-[#1E3932]">
                                  {price.sublabel}
                                </span>
                              )}
                            </div>
                            <span className="text-[20px] font-[600] text-[#1E3932] align-center">
                              {price.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </section>
        
      </div>
    );
  }
  