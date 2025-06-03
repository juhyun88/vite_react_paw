

const DonationCampaign = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-2xl font-bold mb-10">파우펙트 웨이브의 기부 캠페인</h1>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <img
              src="/images/donation1.jpg"
              alt="강아지와 보호자"
              className="rounded-xl w-full object-cover"
            />
            <blockquote className="mt-4 italic text-sm">
              "작은 손길이 마음으로, 또 하나의 생명에 따스함으로"
              <br />- 김보호자 님
            </blockquote>
          </div>

          <div>
            <img
              src="/images/donation2.jpg"
              alt="강아지 손 잡기"
              className="rounded-xl w-full object-cover"
            />
            <blockquote className="mt-4 italic text-sm">
              "우리가 줄 수 있고 보낼 수 있는 사랑"
              <br />- 정보호자 님
            </blockquote>
          </div>
        </div>
      </section>

      {/* 기부단체 소개 */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-xl font-semibold text-center mb-10">기부단체 소개</h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img
            src="/images/life_logo.png"
            alt="LIFE 로고"
            className="w-32 h-32 object-contain"
          />

          <ul className="grid gap-4 text-sm text-gray-700">
            <li>✔️ 유기동물 구조와 보호</li>
            <li>✔️ 입양 프로그램 지원</li>
            <li>✔️ 동물 병원 의료 지원</li>
            <li>✔️ 반려동물 교육 및 훈련</li>
            <li>✔️ 긴급 구조 활동 및 후원</li>
          </ul>
        </div>
      </section>

      {/* 유기견 리스트 */}
        <section className="py-16 px-4 bg-white">
        <h2 className="text-xl font-semibold text-center mb-10">입양을 기다리는 아이들</h2>

        <div className="overflow-hidden max-w-6xl mx-auto whitespace-nowrap">
          <div className="animate-marquee flex gap-6 w-[calc(220px*20)] ">
            {[
              {  src: "https://pawfectwave.vercel.app/img/boost/b700.jpg" },
              { src: "https://pawfectwave.vercel.app/img/boost/b100.jpg" },
              {  src: "https://pawfectwave.vercel.app/img/boost/b1000.jpg" },
              { src: "https://pawfectwave.vercel.app/img/boost/b200.jpg" },
              { src: "https://pawfectwave.vercel.app/img/boost/b300.jpg" },
              { src: "https://pawfectwave.vercel.app/img/boost/b400.jpg" },
              { src: "https://pawfectwave.vercel.app/img/boost/b500.jpg" },
              { src: "https://pawfectwave.vercel.app/img/boost/b600.jpg" },
              { src: "https://pawfectwave.vercel.app/img/boost/b800.jpg" },
              { src: "https://pawfectwave.vercel.app/img/boost/b900.jpg" },
            ].flatMap(dog => [ dog]).map((dog, idx) => (
               <div key={idx} className="w-[250px] flex-shrink-0 text-center">
        <img
          src={dog.src}
          className="w-[388px] h-[509px] object-cover rounded-xl shadow mb-2"
        />
               
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationCampaign;
