import React from 'react';
import { Link } from 'react-router-dom';
import footerlink from '../../db/ft.json'; // JSON으로 관리한다고 가정
// ↑ 경로와 형식은 실제 구조에 맞게 수정하세요.



const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-ftcolor text-white text-sm ">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        {/* Info box */}
        <div className="flex flex-col lg:flex-row justify-between text-center lg:text-left space-y-6 lg:space-y-0">
          <div>
            <h2 className="text-2xl font-bold text-black text-fttextcolor">대표전화 1688-1688</h2>
            <p className="mt-2 text-mint">연중무휴 24시간 상담 가능</p>
            <p className="mt-2 leading-relaxed text-sm text-fttextcolor pb-[24px]">
              주식회사 파우펙트 웨이브｜ 서울 특별시 강남구 논현로 000 ｜ 대표 정은혜, 신주현 <br />
              <span className="hidden lg:inline">TEL 00 0000 0000｜FAX 00 0000 0000 ｜</span>
              사업자등록번호 000 00 00000 <br />
              <span className="hidden lg:inline  ">
                제휴 문의 dfdfdf@fawfectwave.com｜서비스 이용 문의 dfdfdf@fawfectwave.com
              </span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center gap-5 ">
            {footerlink.snslink.map((v, i) => (
              <Link key={i} to={v.to} className={v.className}>
                <img src={v.imgSrc} alt={v.alt} className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Copy */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center pt-[15px] gap-4 text-gray-400 text-sm border-t border-black">
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-fttextcolor">
            {footerlink.fnavi.map((v, i) => (
              <React.Fragment key={i}>
                {i !== 0 && <span className="mx-1">|</span>}
                <Link to={v.to} className="hover:underline">
                  {v.text}
                </Link>
              </React.Fragment>
            ))}
          </div>
          <p className="text-center lg:text-right text-fttextcolor">(주)파우펙트웨이브<br />
            © 2025, powtectwave. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
