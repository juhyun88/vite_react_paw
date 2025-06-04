function BranchIntro({ className }: { className: string }) {
    return (
      <div className={`${className} flex justify-center bg-[#F7F7F5]`}>
        <div className="w-[1280px] mx-auto">
          {/* Hero Section */}
          <section className="flex flex-col justify-center text-center py-[100px]">
            <h1 className="text-[80px] text-[#3A3A3A] font-[700] mb-[100px]">파우펙트 웨이브 본점</h1>
  
            <div className="flex flex-col md:flex-row items-between overflow-hidden text-left">
              {/* 텍스트 영역 */}
              <div className="flex-1 p-6 space-y-6">
                <h2 className="text-xl md:text-[35px] font-[600] leading-snug">
                  하늘과 별이 마주하고 자연과 함께<br className="hidden md:block" />
                  어우러지는 친환경적인 파우펙트<br className="hidden md:block" />
                  웨이브 서울지점입니다.
                </h2>
                <p className="md:text-[25px] font-[300]">
                  서울본점은 가장 넓고 쾌적한 공간에서<br />
                  보호자가 편안하게 장례를 진행할 수 있습니다.
                </p>
  
               {/* 지점 정보 */}
                    <div className="text-sm text-gray-900 space-y-4">
                        {/* 본점 타이틀 */}
                        <p>
                            <span className="text-[#4C9C8B] md:text-[25px] font-[600] border-b-[1px] pb-4 inline-block">
                            파우펙트 웨이브 서울 본점
                            </span>
                        </p>

                    {/* 주소 및 시간 묶음 */}
                        <div className="space-y-2 pr-2">
                            <p><span className="text-[#3A3A3A] md:text-[20px] font-[400]  pr-2 mr-2 border-r-[1px] border-[#4C9C8B]">지점 주소</span>
                            <span className="text-[#3A3A3A] md:text-[20px] font-[400]">서울특별시 구로구 새말로 97(구로동)</span>
                            </p>
                            <p>
                            <span className="text-[#3A3A3A] md:text-[20px] font-[400]  pr-2 mr-2 border-r-[1px] border-[#4C9C8B]">운영 시간</span>
                            <span className="text-[#3A3A3A] md:text-[20px] font-[400]">매일 09:00 - 19:00</span>
                            </p>
                        </div>
                    </div>
                 </div>
  
                    {/* 이미지 영역 */}
                    <div className="md:w-[610px] md:h-[440px]">
                        <img
                        src="https://pawfectwave.vercel.app/img/pc/03/h100.jpg"
                        alt="지점 건물"
                        className="w-full h-full object-cover rounded-[83px]"
                        />
                    </div>
                    
            </div>
          </section>
        </div>
      </div>
    );
  }
  
  export default BranchIntro;
  