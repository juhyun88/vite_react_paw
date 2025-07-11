import { Link } from "react-router-dom";

function InfoHighlightSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto bg-[#F7F7F5]">
    <div className=" container px-[37.5px] md:px-[80px] py-[50px] md:py-[100px] pb-[50px] space-y-10 " id="sy_imagead">
      {/* 타이틀 영역 */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div className="font-bold leading-snug font-[#1E1E1E] md:text-[60px] text-[28px] text-center md:text-start">
          사라지지 않는 사랑, <br />
          기억은 영원히 남습니다.
        </div>
        <div className="md:text-start md:text-end md:text-sm text-[14px] font-[700] md:text-base mt-3 md:mt-0 leading-relaxed text-[rgba(0, 0, 0, 0.70);] text-center">
          장례 전 사후 조치 방법과 장례 진행 절차,
          <br />
          장례 후 보호자분들의 마음을 위한 펫로스 케어
          <br />
          심리 상담 서비스까지 모든 준비가 되어있습니다.
        </div>
      </div>

      {/* 이미지 배너 리스트 */}
      <ul className="flex flex-col md:flex-row gap-8 m-0 p-0 list-none mb-[50px]">
        {/* 첫 번째 아이템 */}
        <li className="flex-1">
          <Link to="/question" className="relative block">
            <img
              src="https://pawfectwave.vercel.app/img/slogan/slogan_0.jpg"
              alt="사후 조치 요령 안내"
              className="w-full object-cover rounded-3xl"
            />
            
          </Link>
          <p className="mt-4 text-center text-sm md:text-base leading-relaxed text-[#6A6969] font-[700]">
            아름다운 이별을 준비하기 위한
            <br />
            <span className="font-[700] text-[#754C43]">사후 조치 요령 방법</span>을 안내 드립니다.
          </p>
        </li>

        {/* 두 번째 아이템 */}
        <li className="flex-1">
          <Link to="/procedures" className="relative block">
            <img
              src="https://pawfectwave.vercel.app/img/bottom/memorial1.jpg"
              alt="장례 절차 안내"
              className="w-full object-cover"
            />
           
          </Link>
          <p className="mt-4 text-center text-sm md:text-base leading-relaxed text-[#6A6969] font-[700]">
            소중한 아이를 떠나보내는 <span className="text-[#754C43] font-[700]">장례 절차를</span>
            <br />
            처음부터 끝까지 꼼꼼히 알려 드립니다.
          </p>
        </li>

        {/* 세 번째 아이템 */}
        <li className="flex-1">
          <Link to="/inquire" className="relative block">
            <img
              src="https://pawfectwave.vercel.app/img/bottom/holding1.jpg"
              alt="펫로스 상담 예약하기"
              className="w-full object-cover"
            />
            
          </Link>
          <p className="mt-4 text-center text-sm md:text-base leading-relaxed text-[#6A6969] font-[700]">
            장례 이후 힘드신 보호자분들을 위해
            <br />
            <span className="text-[#754C43] font-[700]">펫로스 상담 서비스</span>가 준비되어있습니다.
          </p>
        </li>
      </ul>
    </div>
    </section>
  );
}

export default InfoHighlightSection;
