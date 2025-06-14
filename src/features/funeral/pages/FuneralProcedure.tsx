import { Link } from "react-router-dom";

// 하나의 단계 컴포넌트
type FuneralProcedureProps = {
  className?: string;
  imageSrc: string;
  stepTitle: string;
  stepSubTitle: string;
  stepDesc: string;
  buttons: { label: string; link: string }[]; // 버튼 여러 개 받을 수 있도록
};

function FuneralProcedure({
  imageSrc,
  stepTitle,
  stepSubTitle,
  stepDesc,
  buttons,
  className = "",
}: FuneralProcedureProps) {
  return (
    <div className={`flex flex-col md:flex-row items-start gap-[80px] md:py-[100px] py-[80px] border-b border-gray-200 ${className}`}>
      <img
        src={imageSrc}
        alt={stepTitle}
        className="w-[445px] h-[323px] rounded-[70px] shrink-0"
      />

      <div className="flex-1">
        <h3 className="text-[21px] font-semibold mb-2">{stepTitle}</h3>
        <p className="text-[20px] font-normal mb-2">{stepSubTitle}</p>
        <p className="text-[18px] font-normal text-[#A97D5E] mb-[80px]">{stepDesc}</p>
        <div className="flex gap-4">
          {buttons.map(({ label, link }, idx) => (
            <Link
              key={idx}
              to={link}
              className="inline-block bg-[#C3B3A3] text-white px-6 py-2 rounded-full text-[13px] hover:bg-[#c9b7a8] transition"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// 페이지 전체 컴포넌트
export default function ProcessPage() {
  return (
    <section className="bg-[#FAF9F7] md:mt-[100px]">
      {/* 상단 전체 너비 이미지 */}
      <div className="w-full">
        <img
          src="https://pawfectwave.vercel.app/img/explanation/banner.png"
          alt="Top banner"
          className="w-full object-cover md:mb-[50px] mb-[0px] mt-[80px]"
        />
      </div>

      {/* 본문: 중앙 정렬, 최대 1280px */}
      <div className="max-w-[1280px] mx-auto px-6 whitespace-pre-line">
        <FuneralProcedure
        className=""
          imageSrc="https://pawfectwave.vercel.app/img/explanation/e100.jpg"
          stepTitle="01. 온라인 예약"
          stepSubTitle="대표번호 0000-0000로 전화 및 온라인 예약을 합니다."
          stepDesc={`·추모에 쓰일 물품(간식, 장난감, 즐겨입던 옷)을 함께 챙겨오셔도 됩니다.\n·차량운전 및 방문이 힘드실 경우 대표번호(0000-0000)로 방문장례를 요청하실 있습니다.`}
           buttons={[
            { label: "온라인 예약 >", link: "/inquire" },
            { label: "선택형 예약 서비스 >", link: "/inquire" },
          ]}
        />

        <FuneralProcedure
          imageSrc="https://pawfectwave.vercel.app/img/explanation/e300.jpg"
          stepTitle="02. 장례시설 방문"
          stepSubTitle={`아이가 평소에 사용하던 이불 및 수건으로 감싸거나 박스에\n 안치하여 예약 일정에 맞추어 장례식장에 방문을 합니다.`}
          stepDesc={`·추모에 쓰일 물품(간식, 장난감, 즐겨입던 옷)을 함께 챙겨오셔도 됩니다.\n·차량운전 및 방문이 힘드실 경우 대표번호(0000-0000)로 방문장례를 요청하실 수 있습니다.`}
          buttons={[
            { label: "운구서비스 >", link: "/funeralservice" },
            { label: "비동행 장례서비스 >", link: "/noncompaniedservice" },
          ]}
        />
       
         <FuneralProcedure
          imageSrc="https://pawfectwave.vercel.app/img/explanation/e200.jpg"
          stepTitle="03. 상담"
          stepSubTitle={`아이가 평소에 사용하던 이불 및 수건으로 감싸거나 박스에\n 안치하여 예약 일정에 맞추어 장례식장에 방문을 합니다.`}
          stepDesc="·장례용품 추가를 원하실 경우 직접 보고 선택하실 수 있습니다."
         buttons={[
            { label: "장례비용 >", link: "/price" },
            
          ]}
        />
         <FuneralProcedure
          imageSrc="https://pawfectwave.vercel.app/img/explanation/e400.jpg"
          stepTitle="04. 염습"
          stepSubTitle={`아이의 깨끗하고 단정된 모습으로 인사를 나누실 수 있도록\n 2차 손상이 오지 않게 최소한의 손길로 정리합니다.`}
          stepDesc=""
           buttons={[
          
            
          ]}
        />
         <FuneralProcedure
          imageSrc="https://pawfectwave.vercel.app/img/explanation/e500.jpg"
          stepTitle="05. 입복 및 입관"
          stepSubTitle={`염습 과정이 끝난 아이는 이쁜 모습으로 보호자님과 마지막 인사를\n 나누실 수 있도록 정성스럽게 입복 및 입관을 진행합니다.`}
          stepDesc={`·장례용품 추가를 하신 경우 입복 및 입관을 진행합니다.\n·입복 및 입관과 꽃 장식은 장례지도사가 정성스럽게 준비해 드립니다.`}
          buttons={[
            { label: "장례용품 >", link: "/stoneprice" },
         
          ]}
        />
         <FuneralProcedure
          imageSrc="https://pawfectwave.vercel.app/img/explanation/e600.jpg"
          stepTitle="06. 추모"
          stepSubTitle={`프라이빗 한 단독 추모실에서 아이와의 마지막 인사를 나누는\n 시간을 가집니다.`}
          stepDesc={`·아이의 사진을 미리 보내주시면 추모 사진을 준비해 드립니다.\n (추모 사진과 함께 동영상 재생을 원하시는 보호자님께서는 동영상도 함께\n 보내주세요.)
                    \n·단독 추모실에는 추모 서비스 (편지지, 붉은 실, 발 도장 키트, 털 간직 키트) 가\n 준비되어 있습니다.`}
            buttons={[
            
             
            ]}
        />
         <FuneralProcedure
          imageSrc="https://pawfectwave.vercel.app/img/explanation/e700.jpg"
          stepTitle="07. 개별화장"
          stepSubTitle={`아이와의 마지막 인사 후 개별화장이 진행되며 보호자님께서는\n 단독 참관실에서참관이 가능합니다.`}
          stepDesc={`·파우펙트웨이브는 개별화장을 원칙으로 하며 합동화장을 일절 하지 않습니다.\n
                    ·초대형 화장로를 설치하여 100kg의 아이들까지 몸무게 제한없이 화장이 가능합니다.\n
                    ·화장이 진행되는 동안 대기실에서 티타임과 간식, 상비약이 준비되어 있습니다.`}
            buttons={[
             
            ]}
        />
         <FuneralProcedure
          imageSrc="https://pawfectwave.vercel.app/img/explanation/e800.jpg"
          stepTitle="08. 분골"
          stepSubTitle={`화장이 끝난 아이는 유골 수습 후 보호자님께서 분골 전\n
                            유골 확인을 하신 뒤 분골이 진행됩니다.`}
          stepDesc={`·유골 확인 절차는 "선택사항"이므로 참관하지 않으셔도 무관합니다"`}
            buttons={[
           
            ]}
        />
         <FuneralProcedure
          imageSrc="https://pawfectwave.vercel.app/img/explanation/e900.jpg"
          stepTitle="09. 봉안 및 인도"
          stepSubTitle={`분골이 끝난 아이의 유골분은 부패방지와 방습을 위해 밀봉 후\n 유골함에 담아 보호자님께 안전하게 인도합니다.`}
          stepDesc=""
            buttons={[
            
             
            ]}
        />
         <FuneralProcedure
          imageSrc="https://pawfectwave.vercel.app/img/explanation/e1000.jpg"
          stepTitle="10. 메모리얼 스톤 제작(선택사항)"
          stepSubTitle={`메모리얼 스톤 제작을 희망하시는 보호자님께서는 메모리얼 스톤\n 제작 후 스톤함에 담아 보호자님께 안전하게 인도합니다`}
          stepDesc=""
          buttons={[
            { label: "메모리얼 스톤 >", link: "/stoneprice" },
        
          ]}
        />
         <FuneralProcedure
          imageSrc="https://pawfectwave.vercel.app/img/explanation/e1100.jpg"
          stepTitle="11. 봉안당 안치(선택사항)"
          stepSubTitle={`안치를 희망하시는 보호자님께서는 파워펙트웨이브에서 운영 중인\n 봉안당에 안치 방법을 선택해 주셔도 됩니다.`}
          stepDesc=""
         buttons={[
            { label: "봉안당 >", link: "/boneservice" },
      
          ]}
        />
         <FuneralProcedure
          imageSrc="https://pawfectwave.vercel.app/img/explanation/e1200.jpg"
          stepTitle="12. 서류 및 안내문 발급"
          stepSubTitle={`분골이 끝난 아이의 유골분은 부패방지와 방습을 위해 밀봉 후\n 유골함에 담아 보호자님께 안전하게 인도합니다.`}
          stepDesc=""
            buttons={[
               
             
            ]}
        />

        {/* 추가 단계는 여기에 계속 추가하면 됩니다 */}
      </div>
    </section>
  );
}
