import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const tabList = [
    { key: "carry", label: "운구서비스" },
    { key: "nonvisit", label: "비동행장례서비스" },
    { key: "storage", label: "임시안치,산골" },
  ];

function Funeralservice({className} : {className:string}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const currentTab = searchParams.get("tab") || "carry";
    const [activeTab, setActiveTab] = useState(currentTab);

    useEffect(() => {
        setSearchParams({ tab: activeTab });
      }, [activeTab, setSearchParams]);
    
  
            return (
                <div className={className}>
                    <div className={`${className} flex justify-center bg-[#F7F7F5]`}>
                <div className="w-[1280px] mx-auto">
                {/* Hero Section */}
                        <section className="flex flex-col justify-center text-center md:my-[100px] my-[80px]">
                            <h1 className=" text-[35px] md:text-[80px] text-[#3A3A3A] font-[700] md:mb-[100px] mb-[80px]">파우펙트 웨이브의 운구 서비스</h1>
                            <p className="text-[19px] md:text-[35px] text-[#3A3A3A] font-[400] md:mb-[50px]">장례식장 방문 시, 차량이 없거나 운전이 불가능할 경우<br />
                            운구차량으로 보호자님과 아이를 안전하게 모시는 서비스입니다.</p>
                         </section>
                    
                    <div className="flex justify-center gap-4 bg-[#F7F7F7]">
            {tabList.map((tab) => (
                <button
                key={tab.key}
                className={`px-6 py-2 rounded-full border text-sm md:text-base transition-all duration-200
                    ${
                    activeTab === tab.key
                        ? "bg-[#4C9C8B] text-white border-[#4C9C8B]"
                        : "bg-white text-[#4C9C8B] border-[#4C9C8B] hover:bg-[#e9f4f1]"
                    }`}
                onClick={() => setActiveTab(tab.key)}
                >
                {tab.label}
                </button>
            ))}
            </div>


   
                    <div className="max-w-[1280px] mx-auto px-4 bg-[#F7F7F5]">
                    {/* 상단 이미지 */}
                    <div className="flex justify-center mt-[100px]">
                        <img
                        src="https://pawfectwave.vercel.app/img/pc/04/100/Rectangle 111.jpg" // 이미지 경로
                        alt="Taxi Fare Header"
                        className="rounded-full h-40 object-cover w-full max-w-4xl mb-[100px]"
                        />
                    </div>

                    {/* 요금 테이블 */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-[17px] md:text-[25px] font-[400] border border-gray-200 ">
                        <thead>
                            <tr className="bg-[#A5C1A0] text-center text-white py-[50px]">
                            <th className="border border-gray-200 px-4 py-[50px] w-1/6">이용지점</th>
                            <th className="border border-gray-200 px-4  py-[50px]">출발 지역 : 서울시</th>
                            <th className="border border-gray-200 px-4  py-[50px] w-1/6">비용</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-gray-200">
                            <td className="border border-gray-200 px-4 md:py-[40px] py-[20px] text-[13px] md:text-[20px] font-[400]" rowSpan={2}>
                                경기 / 광주점<br />(1호점)
                            </td>
                            <td className="border border-gray-200 px-4 md:py-[40px] py-[20px] text-[13px] md:text-[18px] font-[400]">
                                강남구, 강동구, 관악구, 광진구, 구로구, 금천구, 동작구, 서초구, 성동구, 송파구, 용산구
                            </td>
                            <td className="border border-gray-200 px-4 md:py-[40px] py-[20px] text-[8px] text-center" rowSpan={2}>
                                100,000원
                            </td>
                            </tr>
                            <tr className="border-t border-gray-200">
                            <td className="border border-gray-200 px-4 md:py-[40px] py-[20px] text-[13px] md:text-[18px] font-[400]">
                                강서구, 강북구, 노원구, 도봉구, 마포구, 서대문구, 성북구, 동대문구, 양천구, 영등포구, 은평구, 종로구, 중랑구
                            </td>
                            </tr>
                            <tr className="border-t border-gray-200">
                            <td className="border border-gray-200 px-4 md:py-[40px] py-[20px] text-[12px] md:text-[20px] font-[400]" rowSpan={2}>
                                남양주점<br />(3호점)
                            </td>
                            <td className="border border-gray-200 px-4 md:py-[40px] py-[20px] text-[13px] md:text-[18px] font-[400]">
                                강동구, 광진구, 강남구, 송파구, 노원구, 도봉구, 중랑구, 서초구, 성동구, 용산구, 성북구, 동대문구, 중구
                            </td>
                            <td className="border border-gray-200 px-4 py-2  text-[8px] text-center" rowSpan={2}>
                                100,000원
                            </td>
                            </tr>
                            <tr className="border-t border-gray-200">
                            <td className="border border-gray-200 px-4 md:py-[40px] py-[20px] text-[13px] md:text-[18px] font-[400]">
                                강북구, 종로구, 동작구, 강서구, 서대문구, 은평구, 관악구, 구로구, 금천구, 마포구, 양천구, 영등포구
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>

                    {/* 하단 안내 문구 */}
                    <div className="text-[15px] md:text-[18px] font-[400] my-[100px] space-y-1 leading-relaxed">
                        <p>※ 운구서비스 이용 시, 아이를 직접 안고 탑승해주세요.</p>
                        <p>
                        ※ 운구서비스는 출발지에서 파우펙트 웨이브 반려동물 장례식장까지 오시는
                        ‘편도’만 운영하며, 장례 후에는 일반 택시를 불러드립니다.
                        </p>
                        <p>※ 위 표에 안내되어 있지 않은 지역은 별도 문의(1688-1240) 해주세요.</p>
                        <p>※ 파우펙트 웨이브는 운구서비스는 탑승 3시간 전 예약이 가능합니다.</p>
                    </div>
                    </div>
  

            </div>
        </div>
        </div>
    );
}

export default Funeralservice;