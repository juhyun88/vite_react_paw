import React from 'react';
import { Link } from 'react-router-dom';
import footerlink from '../../db/ft.json';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-ftcolor text-white text-sm">
    <div className="max-w-screen-xl mx-auto px-4 md:py-10 flex flex-col gap-6 pb-[40px]">
  
          {/* ✅ PC 전용: 대표전화 영역 */}
          <div className="hidden lg:block w-full relative">

            {/* 대표전화 */}
            <div className="text-left">
              <h2 className="text-2xl font-bold text-fttextcolor">대표전화 1688-1688</h2>
              <p className="mt-1 text-mint">연중무휴 24시간 상담 가능</p>
            </div>

            {/* SNS - 우측 하단 고정 */}
            <div className="absolute right-0 bottom-0 top-0 w-[170px] h-[200px] flex justify-end">
              <div className="flex flex-col items-center gap-[40px]">
                {footerlink.snslink.map((v, i) => (
                  <Link key={i} to={v.to} className={v.className}>
                    <img src={v.imgSrc} alt={v.alt} className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>


          {/* ✅ 모바일 전용 영역 */}
          <div className="flex flex-col-reverse lg:hidden items-center text-center mt-4">

          {/* 대표전화 영역 */}
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-fttextcolor">대표전화 1688-1688</h2>
            <p className="mt-1 text-mint">연중무휴 24시간 상담 가능</p>
          </div>

          {/* 모바일용 링크 목록 */}
          <div className="flex flex-wrap justify-center gap-2 text-fttextcolor tracking-tighter mt-4">
            {footerlink.fnavi.map((v, i) => (
              <React.Fragment key={i}>
                {i !== 0 && <span className="mx-[-4px]">|</span>}
                <Link to={v.to} className="hover:underline">
                  {v.text}
                </Link>
              </React.Fragment>
            ))}
          </div>

          {/* SNS 영역 */}
          <div className="mt-4">
            <div className="flex flex-row items-center gap-[40px] justify-center">
              {footerlink.snslink.map((v, i) => (
                <Link key={i} to={v.to} className={v.className}>
                  <img src={v.imgSrc} alt={v.alt} className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
          </div>


 
     

        {/* 회사 정보 및 이메일 */}
        <div className="text-start lg:text-left text-fttextcolor text-sm leading-relaxed">
          <p>
            주식회사 파우펙트 웨이브 ｜ 서울 특별시 강남구 논현로 000<br />
            대표 정은혜 신주현｜TEL 02-6000-0000<br />
            FAX 02-888-8888 ｜ 사업자등록번호 111-11-11111<br />
            제휴 문의 p@fawfectwave.com｜ <br />
            서비스 이용 문의 p@fawfectwave.com｜
          </p>
        </div>

        {/* PC용 링크 목록 + 카피라이트 */}
        <div className="hidden lg:flex justify-between items-start gap-4 text-sm border-t border-black pt-4 text-fttextcolor order-4">
          {/* 링크 목록 */}
          <div className="flex flex-wrap gap-2">
            {footerlink.fnavi.map((v, i) => (
              <React.Fragment key={i}>
                {i !== 0 && <span className="mx-1">|</span>}
                <Link to={v.to} className="hover:underline">
                  {v.text}
                </Link>
              </React.Fragment>
            ))}
          </div>

          {/* 카피라이트 */}
          <div className="text-right">
            <p>(주)파우펙트웨이브</p>
            <p>© 2025, pawpectwave.com. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
