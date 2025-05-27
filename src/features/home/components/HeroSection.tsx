import React from 'react';


interface HeroSectionProps {
  children?: React.ReactNode;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children, className = '' }) => {
  return (
    <section
      className={`hero-section relative bg-cover bg-center min-h-screen ${className}`}
     
    >
      {children}

      {/* 하단 영역 */}
      <div className="absolute bottom-0 left-0 right-0 bg-ftcolor backdrop-blur-md p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* 온라인추모관 버튼 */}
        <button className="bg-transparent text-mainbutton px-4 py-2 border-[3px] border-mainbutton rounded-full  w-[196px] h-[55px]">
          온라인추모관
        </button>

        {/* 전화번호 */}
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.73047 7.05448C2.73047 5.8709 3.20064 4.7358 4.03756 3.89889C4.87447 3.06197 6.00957 2.5918 7.19315 2.5918H9.23408C10.5134 2.5918 11.6291 3.46351 11.94 4.70413L13.5837 11.2836C13.7169 11.8162 13.69 12.3762 13.5064 12.8935C13.3227 13.4108 12.9905 13.8624 12.5513 14.1918L10.6279 15.6347C10.4271 15.785 10.384 16.0051 10.4405 16.1583C11.28 18.4415 12.6058 20.515 14.3259 22.2351C16.0461 23.9553 18.1195 25.281 20.4027 26.1205C20.5559 26.1771 20.7746 26.1339 20.9263 25.9331L22.3692 24.0097C22.6986 23.5705 23.1502 23.2383 23.6676 23.0547C24.1849 22.871 24.7449 22.8441 25.2774 22.9773L31.8569 24.6211C33.0975 24.932 33.9692 26.0477 33.9692 27.3284V29.3679C33.9692 30.5515 33.4991 31.6866 32.6622 32.5235C31.8252 33.3604 30.6901 33.8306 29.5066 33.8306H26.1595C13.2207 33.8306 2.73047 23.3403 2.73047 10.4015V7.05448Z" fill="#3A3A3A"/>
            </svg>
          <span className="semibold text-41px">1688-0000</span>
        </div>

        {/* 이름과 연락처 입력 */}
        <div className="flex flex-col md:flex-row items-center gap-2 bg-transparent">
          <input
            type="text"
            placeholder="이름"
            className="border-b border-fttextcolor  py-2  bg-transparent placeholder-fttextcolor"
          />
          <input
            type="tel"
            placeholder="연락처"
            className="border-b border-fttextcolor py-2 bg-transparent placeholder-fttextcolor"
          />
        </div>

        {/* 개인정보 동의 */}
        <div className="text-sm leading-tight mr-2">
          <label className="block flex ">
            <input type="checkbox" className="peer hidden" />
            <span className=" mr-2 w-4 h-4 border border-black flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-sm"></span>
            개인정보 취급방침에 동의합니다.(필수) <button className='px-1 text-ftcolor text-sm rounded-full bg-fttextcolor '>보기</button>
          </label>
          <label className="block flex">
          <input type="checkbox" className="peer hidden" />
          <span className=" mr-2 w-4 h-4 border border-black flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-sm"></span>
            고객 혜택, 이벤트 공지등 마케팅 문자 수신에 동의합니다.(선택)
          </label>
        </div>

        {/* 온라인예약 버튼 */}
        <button className="bg-mainbutton text-white w-[196px] h-[55px] p-[10px] rounded-full text-regular">
          온라인예약
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

