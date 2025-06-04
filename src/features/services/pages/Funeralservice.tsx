import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const tabList = [
    { key: "carry", label: "운구서비스" },
    { key: "nonvisit", label: "비동행장례서비스" },
    { key: "storage", label: "원시안치,산골" },
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
                        <section className="flex flex-col justify-center text-center ">
                            <h1 className="text-[80px] text-[#3A3A3A] font-[700] mb-[100px]">파우펙트 웨이브의 운구 서비스</h1>
                            <p className="text-[35px] text-[#3A3A3A] font-[400] mb-[100px]">장례식장 방문 시, 차량이 없거나 운전이 불가능할 경우<br />
                            운구차량으로 보호자님과 아이를 안전하게 모시는 서비스입니다.</p>
                         </section>
                    
                    <div className="flex justify-center gap-4 py-6 bg-[#F7F7F7]">
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
            </div>
        </div>
        </div>
    );
}

export default Funeralservice;