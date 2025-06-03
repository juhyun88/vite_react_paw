import { funeralPackages, itemContents } from "../data/funeral";

export type NormalFuneralProps = {
  className?: string;
};

export default function NormalFuneral({ className = "" }: NormalFuneralProps) {
  return (
    <div className={`bg-white text-gray-800 ${className}`}>
      {/* Hero Section */}
      <section className="w-full">
        <img
          src="https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/bn1.png"
          alt="Hero"
          className="w-full object-cover mt-[50px]"
        />
      </section>

      {/* 패키지 목록 */}
      <section className="max-w-[1400px] mx-auto px-4 py-[50px] space-y-16">
        {funeralPackages.map((item) => (
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


        {/* 소개 텍스트1 */}
      <section className="max-w-[1400px] mx-auto px-4 py-[50px] text-center space-y-4">
        <h2 className="text-black text-[80px] font-[700]">모든 이별을 존중하기 위해</h2>
        <p className="text-black text-[35px] font-[4]  mx-auto">
          파우펙트웨이브의 모든 장례용품은 화장 후, 재가 남지 않는 천연소재를 사용하며,<br /> 작은 소동물부터 큰 대형동물까지모든 크기와 체중을 고려하여 제작합니다.
        </p>
      </section>


      {/* 중간 배너 이미지 */}
      <section className="w-full py-[50px]">
        <img src="https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/bn2.png" alt="Middle Banner" className="w-full object-cover" />
      </section>

      {/* 소개 텍스트2 */}
      <section className="max-w-[1400px] mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-black text-[80px] font-[700]">우리가 온전히<br /> 이별할 수 있도록</h2>
        <p className="text-black text-[35px] font-[4] mx-auto">
          파우펙트 웨이브와  함께플러스는 장례 후, 아이의 유골함을<br /> 어떻게 보관할지 고민하는 보호자를 위한 선택 구성입니다.
        </p>
      </section>

      {/* 이미지 2개 (소개 텍스트와 아이템 섹션 사이) */}
        <section className="max-w-[1400px] mx-auto px-4 py-[100px] flex justify-between gap-[50px]">
        <img
            src="https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/bn3.jpg"
            alt="중간 이미지 1"
            className="w-[675px] h-[400px] object-cover rounded-2xl"
        />
        <img
            src="https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/bn4.jpg"
            alt="중간 이미지 2"
            className="w-[675px] h-[400px] object-cover rounded-2xl"
        />
        </section>


    {/* 아이템 섹션 */}
<section className="max-w-[1400px] mx-auto px-4 py-16 space-y-12 gap-[100px]">
  {itemContents.map((item, index) => (
    <div
      key={index}
      className={`flex flex-col md:flex-row items-center gap-[100px] pb-[100px] ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* 이미지 */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full md:w-[750px] h-[470px] object-cover rounded-[77px]"
      />

      {/* 텍스트 */}
      <div
        className={`${
          index === 1 || index === 3 ? "md:text-right md:items-end md:ml-auto" : "text-left"
        }`}
      >
        <p className="text-[#A5C1A0] text-[26px] font-[600] mb-2">{item.subtitle}</p>

        <h4
          className={`text-[#1E3932] text-[43px] font-[600] mb-[80px] flex items-center gap-2 ${
            index === 1 || index === 3 ? "justify-end" : ""
          }`}
        >
          {item.title}
          {item.tag && (
            <span className="text-[26px] font-[600] bg-[#1E3932] w-[117px] h-[45px] text-white text-center px-3 py-1 rounded-full">
              {item.tag}
            </span>
          )}
        </h4>

        <p className="text-[#A5C1A0] text-[18px] font-[500] mb-[30px]">{item.description}</p>
        <p className="text-[#C3B3A3] text-[18px] font-[500]">{item.description2}</p>
      </div>
    </div>
  ))}
</section>

         
    

    </div>
  );
}
