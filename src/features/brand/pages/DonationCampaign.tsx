

const DonationCampaign = () => {
  return (
    <div className="w-[auto]   bg-[#F7F7F5] ">
      {/* Hero Section */}
      <section className="text-center px-4 py-[100px]">
        <h1 className="text-[80px] text-[#3A3A3A] font-[700] mb-[100px]">파우펙트 웨이브의 기부 캠페인</h1>

        <div className="flex flex-col items-center  gap-10 max-w-[1280px] mx-auto">
          {/* 첫 번째 섹션 - 이미지 왼쪽, 텍스트 오른쪽 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="https://pawfectwave.vercel.app/img/pc/sub_campaign/campaign.jpg"
              alt="강아지와 보호자"
              className="rounded-xl w-full md:w-1/2 object-cover"
            />
            <blockquote className="mt-4  md:mt-0 md:w-1/2 ">
              <span className="block font-ice text-[45.71px] font-normal not-italic mb-[73px]">"떠난 아이의 이름으로,<br /> 또하나의 생명을 지켜주세요"<br /></span>
              <span className="font-hakgyo text-hakgyo font-light300 not-italic">
                “당신의 추모가 누군가에게 희망이 됩니다.”<br />
                반려동물을 떠나보낸 그 마음, 이제 새로운 생명을<br />
                지키는 힘으로 전해주세요.
              </span>
            </blockquote>
          </div>

          {/* 두 번째 섹션 - 텍스트 왼쪽, 이미지 오른쪽 */}
          <div className="flex flex-col md:flex-row-reverse  gap-6 items-center">
            <img
              src="https://pawfectwave.vercel.app/img/pc/sub_campaign/campaign1.jpg"
              alt="강아지 손 잡기"
              className="rounded-xl w-full md:w-1/2 object-cover"
            />
            <blockquote className="mt-4 italic text-sm md:mt-0 md:w-1/2">
             <span className="block font-ice text-[45.71px] font-normal not-italic mb-[73px] leading-[1.6]"> “유기동물 그리고<br /> 보호자를 위해”<br /></span>
              <span className="font-hakgyo text-hakgyo font-light300 not-italic">
                사랑이 끝난 자리에, 다시 사랑이 시작될 수 있도록. <br />
                반려의 끝에도, 우리는 함께합니다.
              </span>
            </blockquote>
          </div>
        </div>

      </section>

      {/* 기부단체 소개 */}
<section className="bg-[#F7F7F5] pt-[100px] px-4">
  <h2 className="text-[80px] text-[#3A3A3A] font-[700] text-center mb-[100px]">기부단체 소개</h2>

  <div className="w-full flex justify-center">
    <div
      className="w-[1280px] h-[1230px] bg-no-repeat bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url('https://pawfectwave.vercel.app/img/pc/sub_campaign/campaign9.png')`,
      }}
    >
      {/* 배경 위에 내용 넣으려면 여기에 */}
    </div>
  </div>
</section>



      {/* 유기견 리스트 */}
        <section className="py-[200px] px-4 bg-white">
      

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
               <div key={idx} className="w-[350px] flex-shrink-0 text-center">
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
