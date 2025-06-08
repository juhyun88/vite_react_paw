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
            <div className="max-w-[1280px] mx-auto px-4 py-[100px]  bg-[#f4f6f3]">
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
             
            {/* 상단 배경 이미지 + 텍스트 */}
            <div className="relative w-full h-[1500px] my-[100px]">
                <img
                src="https://pawfectwave.vercel.app/img/pc/04/200/100.jpg"
                alt="펫로스 메인"
                className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col text-white text-start pl-[130px] pt-[120px]">
                <h2 className="text-sm md:text-[46px] font-[500] mb-2 leading-[1.2]">파우펙트 웨이브  비동행 장례 서비스</h2>
                <h1 className="text-2xl md:text-[100px] font-[700] text-[#E8E8E8] leading-[1.2]">
                    함께하지 못해도 <br />마음은 더 가까이
                </h1>
                <p className="mt-4 text-sm md:text-[40px] font-[500] leading-[1.2]">
                   마지막 순간을 함께 하기 어렵다면,<br />
                    반려동물 장례지도사가 모든 과정을<br />
                    대신 진행하는 비동행 장례를 신청해보세요.
                </p>
                </div>
            </div>

            {/* 인트로 섹션 */}
            <div className="text-center space-y-4 ">
                <h2 className="md:text-[60px] font-[600] my-[50px]">‘비동행 장례’란?</h2>
                <span className=" text-xl md:text-[35px] font-[400]">
                보호자가 <span className="text-[#4C9C8B]">장례식장에 직접 방문하지 않고<br /></span>
                아이만 운구하여 장례를 대신 진행하는 <br />
                파우펙트 웨이브의 <span className="text-[#4C9C8B]">장례 대행 서비스 입니다.</span>
                </span>
            </div>

            {/* 감정 분류 박스 */}
            <div className="flex md:w-[1280px] justify-center items-center gap-[105px] flex-wrap my-[100px]">
                <div className="flex w-[500px] flex-col items-start bg-[#F0E2DC] rounded-lg text-sm text-gray-700 shadow">
                
                    <div className="w-full text-white flex bg-[#E8CFC2] py-[25.607px] justify-center items-center gap-[25.607px] align-stretch md:text-[50px] font-[700] text-center">
                    일반장례
                    </div>
                    <div className="flex bg-white w-full h-[256.065px] py-[25.607px] justify-center items-center gap-[25.607px] align-stretch text-start text-[#BF957F]  md:text-[40px] font-[400]">
                    1. 보호자 직접 방문<br /><br />
                    2. 장례식장에서 추모<br /><br />
                    3. 유골함과 함께 귀가
                    </div>
                </div>

                <div className="flex w-[640px] flex-col items-start bg-[#F0E2DC] rounded-lg text-sm text-gray-700 shadow">
                
                    <div className="w-full text-white flex bg-[#A5C1A0] py-[25.607px] justify-center items-center gap-[25.607px] align-stretch md:text-[50px] font-[700] text-center">
                    비동행 장례
                    </div>
                    <div className="flex bg-white w-full h-[256.065px] py-[25.607px] justify-center items-center gap-[25.607px] align-stretch text-start text-[#A5C1A0]  md:text-[40px] font-[400]">
                    1. 아이만 장례식장 운구<br /><br />
                    2. 장례 과정을 사진으로 전달<br /><br />
                    3. 자택까지 유골함 인도
                    </div>
                </div>
            </div>

            {/* 사례 섹션 */}
            <div className="space-y-10 md:w-[1280px]">
                <h3 className="text-center text-[60px] font-[600] my-[50px]">
                “왜 비동행 장례를 이용하게 되었을까요?”
                </h3>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative flex-1 h-[3040px] ">
                        <img
                        src="https://pawfectwave.vercel.app/img/pc/04/200/200.jpg"
                        alt="사례1"
                        className="w-full h-full object-cover"
                        />
                       
                    </div>

                </div>
            </div>

                <div className="w-[1280px] relative text-white text-center mx-auto my-[100px]">
            {/* 배경 이미지 영역 */}
            <div
                className="h-[1520px] bg-cover bg-center relative"
                style={{
                backgroundImage:
                    "url('https://pawfectwave.vercel.app/img/pc/04/200/300.jpg')",
                }}
            >
                    {/* 상단 텍스트 */}
                    <div className="absolute top-[200px] left-[166px] flex flex-col w-[945px] items-center  space-y-2">
                    <p className="text-sm md:text-[45px] font-[500]">파우펙트 웨이브  비동행 장례 서비스</p>
                    <p className="text-md md:text-[100px] font-[700] text-[#E8E8E8]">갑작스러운 이별의 순간</p>
                    <p className="text-md md:text-[40px] font-[500]">직접 지켜보지 않아도 이별의 과정이 부족하지 않도록 </p>
                    </div>

                    {/* 하단 텍스트 */}
                    <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center space-y-2">
                    <p className="text-sm md:text-[80px] font-[500] leading-[1.2]">집에서 다시 집으로</p>
                    <p className="text-md md:text-[40px] font-[300] pb-[200px]">파우펙트 웨이브가 장례를 대신 진행합니다.</p>
            
                    </div>
                </div>
                </div>


            {/* 상담 박스 */}
            <div className="w-[1280px] bg-[#C3B3A3] relative text-white text-center mx-auto">
                <div className="flex flex-col items-center py-[100px] gap-[100px]">
                    <span className="text-[#3A3A3A] text-[60px] font-[600]">비동행 장례절차</span>

                    {/* 장례절차 박스1 */}
                    <div className="flex justify-start items-center bg-white rounded-[50px] w-[1126px] h-[358px] overflow-hidden shadow">
                    {/* 왼쪽 이미지 */}
                    <img
                        src="https://pawfectwave.vercel.app/img/pc/04/200/car100.jpg"
                        alt="상담사진"
                        className="w-[50%] h-full object-cover"
                    />

                        {/* 오른쪽 텍스트 */}
                        <div className="flex flex-col justify-center items-start h-full px-8 text-start text-[#3A3A3A]">
                            <span className="text-[50px] font-[400]">01</span>
                            <span className="text-[32px] font-[400] mt-6 leading-snug">
                            아이가 떠났을 때, 파우펙트 웨이브<br />
                            고객센터 (0000-0000) 에서<br />
                            비동행 장례서비스를 <br />
                            신청합니다.
                            </span>
                        </div>
                    </div>
               
            


                {/* 장례절차 박스2 */}
                    <div className="flex justify-start items-center bg-white rounded-[50px] w-[1126px] h-[358px] overflow-hidden shadow">
                    {/* 왼쪽 이미지 */}
                    <img
                        src="https://pawfectwave.vercel.app/img/pc/04/200/car200.jpg"
                        alt="상담사진"
                        className="w-[50%] h-full object-cover"
                    />

                        {/* 오른쪽 텍스트 */}
                        <div className="flex flex-col justify-center items-start h-full px-8 text-start text-[#3A3A3A]">
                            <span className="text-[50px] font-[400]">02</span>
                            <span className="text-[32px] font-[400] mt-6 leading-snug">
                            카카오T펫이 아이가<br />
                            있는 곳까지 출동하여<br />
                            안전하게 아이를 탑승시킵니다.
                            </span>
                        </div>
                    </div>


                {/* 장례절차 박스 3 */}
                    <div className="flex justify-start items-center bg-white rounded-[50px] w-[1126px] h-[358px] overflow-hidden shadow">
                    {/* 왼쪽 이미지 */}
                    <img
                        src="https://pawfectwave.vercel.app/img/pc/04/200/car300.jpg"
                        alt="상담사진"
                        className="w-[50%] h-full object-cover"
                    />

                        {/* 오른쪽 텍스트 */}
                        <div className="flex flex-col justify-center items-start h-full px-8 text-start text-[#3A3A3A]">
                            <span className="text-[50px] font-[400]">03</span>
                            <span className="text-[32px] font-[400] mt-6 leading-snug">
                            파우펙트 웨이브 장례지도사가 <br />
                            보호자를 대신하여<br />
                            장례의 모든 과정을 진행합니다.
                            </span>
                        </div>
                    </div>

                     {/* 장례절차 박스 */}
                    <div className="flex justify-start items-center bg-white rounded-[50px] w-[1126px] h-[358px] overflow-hidden shadow">
                    {/* 왼쪽 이미지 */}
                    <img
                        src="https://pawfectwave.vercel.app/img/pc/04/200/car400.jpg"
                        alt="상담사진"
                        className="w-[50%] h-full object-cover"
                    />

                        {/* 오른쪽 텍스트 */}
                        <div className="flex flex-col justify-center items-start h-full px-8 text-start text-[#3A3A3A]">
                            <span className="text-[50px] font-[400]">04</span>
                            <span className="text-[32px] font-[400] mt-6 leading-snug">
                            장례 후 프리미언 전달 서비스,<br />
                            발렉스(Valex)가 아이의 유해를 <br />
                            보호자님께 직접 인도합니다. 
                            </span>
                        </div>
                    </div>


             </div>
             </div>
        </div>
     </div>
    );
}

export default Noncompaniedservice;