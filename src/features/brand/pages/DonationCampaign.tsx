import React, { useEffect, useState } from 'react';
import 'swiper/css';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <div className="relative h-screen flex flex-col">
      {/* 상단 Hero 영역 */}
      <header
        className="bg-cover bg-center h-[300px] text-white p-6"
        style={{
          backgroundImage: `url('https://pawfectwave.vercel.app/img/main/Main_background1.jpg')`,
        }}
      >
        <h1 className="text-3xl font-bold">기본 홈페이지</h1>
      </header>

      {/* 스크롤 가능한 메인 콘텐츠 */}
      <main className="flex-1 overflow-y-auto bg-[#f0f4f5] px-4 py-6 space-y-12">
        {/* 기능 안내 영역 */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">반려동물 이별준비</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded">📦 준비물 안내</div>
            <div className="bg-gray-100 p-4 rounded">📋 절차 소개</div>
          </div>
        </section>

        {/* 소개 영역 */}
        <section className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-bold mb-4">기본단체 소개</h2>
          <p className="text-gray-700">반려동물과 보호자의 마지막 인사를 함께 준비합니다.</p>
        </section>

        {/* 게시글 카드 리스트 */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">최신 소식</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {posts.slice(0, 3).map((post) => (
              <div key={post.id} className="border p-4 rounded shadow-sm">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.body.slice(0, 80)}...</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 하단 고정 영역 */}
      <footer className="fixed bottom-0 left-0 right-0 bg-ftcolor backdrop-blur-md p-4 flex flex-wrap items-center justify-between gap-4 z-50">
        <button className="bg-transparent text-mainbutton px-4 py-2 border-[3px] border-mainbutton rounded-full w-[196px] h-[55px]">
          온라인추모관
        </button>

        <div className="flex items-center gap-2 text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.73047 7.05448C2.73047 5.8709 3.20064 4.7358 4.03756 3.89889C4.87447 3.06197 6.00957 2.5918 7.19315 2.5918H9.23408C10.5134 2.5918 11.6291 3.46351 11.94 4.70413L13.5837 11.2836C13.7169 11.8162 13.69 12.3762 13.5064 12.8935C13.3227 13.4108 12.9905 13.8624 12.5513 14.1918L10.6279 15.6347C10.4271 15.785 10.384 16.0051 10.4405 16.1583C11.28 18.4415 12.6058 20.515 14.3259 22.2351C16.0461 23.9553 18.1195 25.281 20.4027 26.1205C20.5559 26.1771 20.7746 26.1339 20.9263 25.9331L22.3692 24.0097C22.6986 23.5705 23.1502 23.2383 23.6676 23.0547C24.1849 22.871 24.7449 22.8441 25.2774 22.9773L31.8569 24.6211C33.0975 24.932 33.9692 26.0477 33.9692 27.3284V29.3679C33.9692 30.5515 33.4991 31.6866 32.6622 32.5235C31.8252 33.3604 30.6901 33.8306 29.5066 33.8306H26.1595C13.2207 33.8306 2.73047 23.3403 2.73047 10.4015V7.05448Z"
              fill="#3A3A3A"
            />
          </svg>
          <span className="font-semibold text-xl">1688-0000</span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 bg-transparent">
          <input type="text" placeholder="이름" className="border-b border-gray-400 py-2 bg-transparent placeholder-gray-600" />
          <input type="tel" placeholder="연락처" className="border-b border-gray-400 py-2 bg-transparent placeholder-gray-600" />
        </div>

        <div className="text-sm leading-tight text-black">
          <label className="block flex items-center">
            <input type="checkbox" className="peer hidden" />
            <span className="mr-2 w-4 h-4 border border-black flex items-center justify-center peer-checked:after:content-['✔']"></span>
            개인정보 취급방침에 동의합니다.(필수)
          </label>
          <label className="block flex items-center">
            <input type="checkbox" className="peer hidden" />
            <span className="mr-2 w-4 h-4 border border-black flex items-center justify-center peer-checked:after:content-['✔']"></span>
            마케팅 수신 동의(선택)
          </label>
        </div>

        <button className="bg-mainbutton text-white w-[196px] h-[55px] p-[10px] rounded-full text-regular">
          온라인예약
        </button>
      </footer>
    </div>
  );
};

export default Home;
