import React from 'react';
import { Link } from 'react-router-dom';
import footerlink from '../../db/ft.json';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-ftcolor text-white text-sm">
    <div className="max-w-screen-xl mx-auto px-4 py-10 flex flex-col gap-6">
  
      {/* PC에서는 flex-row로 두 블록을 나란히 배치 */}
      <div className="order-1 lg:flex lg:justify-between lg:items-start">
        
        {/* 대표전화 영역 - 모바일에서는 위, PC에서는 왼쪽 */}
        <div className="order-1 w-full lg:order-1 lg:w-auto text-center lg:text-left">
          <h2 className="text-2xl font-bold text-fttextcolor">대표전화 1688-1688</h2>
          <p className="mt-1 text-mint">연중무휴 24시간 상담 가능</p>
        </div>
  
        {/* SNS 아이콘 영역 - 모바일에서는 아래, PC에서는 오른쪽 */}
        <div className="order-2 w-full mt-4 lg:order-2 lg:mt-0 lg:w-auto flex justify-center lg:justify-end">
          <div className="flex flex-row lg:flex-col items-center gap-3">
            {footerlink.snslink.map((v, i) => (
              <Link key={i} to={v.to} className={v.className}>
                <img src={v.imgSrc} alt={v.alt} className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>

        {/* 모바일용 링크 목록 */}
        <div className="lg:hidden flex flex-wrap justify-center gap-2 text-fttextcolor order-2">
          {footerlink.fnavi.map((v, i) => (
            <React.Fragment key={i}>
              {i !== 0 && <span>|</span>}
              <Link to={v.to} className="hover:underline">
                {v.text}
              </Link>
            </React.Fragment>
          ))}
        </div>

        {/* 회사 정보 및 이메일 */}
        <div className="text-start lg:text-left text-fttextcolor text-sm order-3 leading-relaxed">
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
