import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const tabList = [
    { key: "carry", label: "운구서비스" },
    { key: "nonvisit", label: "비동행장례서비스" },
    { key: "storage", label: "임시안치,산골" },
  ];

function Noncompaniedservice({className} : {className:string}) {

        const [searchParams, setSearchParams] = useSearchParams();
        const currentTab = searchParams.get("tab") || "carry";
        const [activeTab, setActiveTab] = useState(currentTab);

         useEffect(() => {
        setSearchParams({ tab: activeTab });
      }, [activeTab, setSearchParams]);

    return (
        <div className={className}>
            <div className="max-w-[1280px] w-full mx-auto px-4 md:py-[100px] py-[80px] bg-[#f4f6f3]">
                {/* 탭 */}
                <div className="flex justify-center gap-2 sm:gap-4 bg-[#F7F7F7]">
                {tabList.map((tab) => (
                    <button
                    key={tab.key}
                    className={`px-2 sm:px-6 py-2 rounded-full border text-[13px] sm:text-base transition-all duration-200 ${
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
             
            {/* 상단 배경 이미지 + 텍스트 */}
            <div className="relative w-full aspect-[2/1] sm:aspect-[16/9] my-20">
                <img
                    src="https://pawfectwave.vercel.app/img/pc/04/200/100.jpg"
                    alt="펫로스 메인"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-opacity-40 flex flex-col text-white px-3 sm:px-20 justify-center">
                    <h2 className="text-sm sm:text-3xl font-medium mb-2">파우펙트 웨이브 비동행 장례 서비스</h2>
                    <h1 className="text-xl sm:text-6xl font-bold text-[#E8E8E8] leading-tight">
                    함께하지 못해도 <br />마음은 더 가까이
                    </h1>
                    <p className="mt-4 text-sm sm:text-2xl font-medium leading-relaxed">
                    마지막 순간을 함께 하기 어렵다면,<br />
                    반려동물 장례지도사가 모든 과정을<br />
                    대신 진행하는 비동행 장례를 신청해보세요.
                    </p>
                </div>
                </div>

            {/* 인트로 */}
                <div className="text-center space-y-4">
                    <h2 className="text-2xl sm:text-5xl font-semibold my-10">‘비동행 장례’란?</h2>
                        <p className="text-base sm:text-2xl font-normal leading-relaxed">
                            보호자가 <span className="text-[#4C9C8B]">장례식장에 직접 방문하지 않고</span><br />
                            아이만 운구하여 장례를 대신 진행하는<br />
                            파우펙트 웨이브의 <span className="text-[#4C9C8B]">장례 대행 서비스입니다.</span>
                        </p>
                </div>

            {/* 비교 박스 */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 my-20">
                {/* 일반장례 */}
                    <div className="w-full max-w-[500px] md:bg-[#F0E2DC] rounded-lg md:shadow overflow-hidden">
                        <div className="bg-[#E8CFC2] text-white text-center py-6 text-xl sm:text-4xl font-bold">일반장례</div>
                            <div className="bg-white text-[#BF957F] p-6 text-left text-base sm:text-2xl font-medium">
                            1. 보호자 직접 방문<br /><br />
                            2. 장례식장에서 추모<br /><br />
                            3. 유골함과 함께 귀가
                    </div>
                </div>

                  {/* 비동행장례 */}
                    <div className="w-full max-w-[500px] bg-[#F0E2DC] rounded-lg shadow overflow-hidden">
                        <div className="bg-[#A5C1A0] text-white text-center py-6 text-xl sm:text-4xl font-bold">비동행 장례</div>
                        <div className="bg-white text-[#A5C1A0] p-6 text-left text-base sm:text-2xl font-medium">
                        1. 아이만 장례식장 운구<br /><br />
                        2. 장례 과정을 사진으로 전달<br /><br />
                        3. 자택까지 유골함 인도
                        </div>
                    </div>
                    </div>

               {/* 절차 박스 */}
                    <div className="space-y-20">
                        <h3 className="text-center text-[18px] sm:text-5xl font-semibold">
                            “왜 비동행 장례를 이용하게 되었을까요?”
                        </h3>

                            <div className="relative w-full aspect-[3/4] sm:aspect-[16/9] overflow-hidden">
                                <img
                                src="https://pawfectwave.vercel.app/img/pc/04/200/200.jpg"
                                alt="사례1"
                                className="absolute inset-0 w-full h-full md:object-cover"
                                />
                        </div>
                    </div>


                    {/* 배경 텍스트 박스 */}
                    <div className="relative w-full my-20">
                        <div
                            className="relative bg-cover bg-center h-[800px] sm:h-[1000px] flex flex-col justify-between text-white text-center"
                            style={{ backgroundImage: "url('https://pawfectwave.vercel.app/img/pc/04/200/300.jpg')" }}
                        >
                            <div className="mt-20 sm:mt-32 px-6">
                                <p className="text-sm sm:text-2xl font-medium">파우펙트 웨이브 비동행 장례 서비스</p>
                                <p className="text-2xl sm:text-6xl font-bold text-[#E8E8E8] mt-2">갑작스러운 이별의 순간</p>
                                <p className="text-base sm:text-2xl mt-2">직접 지켜보지 않아도 이별의 과정이 부족하지 않도록</p>
                            </div>

                            <div className="mb-20 px-6">
                                <p className="text-xl sm:text-5xl font-medium">집에서 다시 집으로</p>
                                <p className="text-[15px] sm:text-2xl font-light mt-2">파우펙트 웨이브가 장례를 대신 진행합니다.</p>
                            </div>
                        </div>
                    </div>


                {/* 절차 단계 박스 */}
                    <div className="bg-[#C3B3A3] py-20 px-4 text-white text-center">
                         <h4 className="text-[#3A3A3A] text-3xl sm:text-5xl font-semibold mb-16">비동행 장례절차</h4>

                            {[1, 2, 3, 4].map((step) => (
                                <div key={step} className="flex flex-col md:flex-row w-full max-w-[1126px] mx-auto bg-white text-[#3A3A3A] rounded-[30px] overflow-hidden shadow mb-12">
                                <img
                                    src={`https://pawfectwave.vercel.app/img/pc/04/200/car${step}00.jpg`}
                                    alt={`단계${step}`}
                                    className="w-full md:w-1/2 h-[200px] md:h-auto object-cover"
                                />
                                <div className="flex flex-col justify-center p-6 text-left space-y-4">
                                    <span className="text-2xl sm:text-4xl font-bold">{`0${step}`}</span>
                                    <span className="text-base sm:text-2xl leading-relaxed">
                                    {[
                                        "아이가 떠났을 때, 파우펙트 웨이브 고객센터 (0000-0000) 에서 비동행 장례서비스를 신청합니다.",
                                        "카카오T펫이 아이가 있는 곳까지 출동하여 안전하게 아이를 탑승시킵니다.",
                                        "파우펙트 웨이브 장례지도사가 보호자를 대신하여 장례의 모든 과정을 진행합니다.",
                                        "장례 후 프리미엄 전달 서비스, 발렉스(Valex)가 아이의 유해를 보호자님께 직접 인도합니다.",
                                    ][step - 1]}
                                    </span>
                                </div>
                            </div>
                    ))}
                    </div>
        </div>
     </div>
    );
}

export default Noncompaniedservice;