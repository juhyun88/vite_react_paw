import React from 'react';
import { Link } from 'react-router-dom';
import footerlink from '../../db/ft.json';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-ftcolor text-white text-sm">
    <div className="max-w-screen-xl mx-auto px-4 py-10 flex flex-col gap-6">
  
       {/* 대표전화 + SNS 아이콘 묶음 */}
    <div className="flex flex-col lg:flex-row lg:items-start">
      
      {/* 대표전화 영역 */}
      <div className="w-full lg:w-auto text-center lg:text-left">
        <h2 className="text-2xl font-bold text-fttextcolor">대표전화 1688-1688</h2>
        <p className="mt-1 text-mint">연중무휴 24시간 상담 가능</p>
      </div>
</div>
      {/* SNS 영역 - 오른쪽 정렬 */}
      <div className="xl:absolute w-[170px] h-[200px] flex right-[70px]">
        <div className="flex flex-row lg:flex-col items-center gap-[40px]">
          {footerlink.snslink.map((v, i) => (
            <Link key={i} to={v.to} className={v.className}>
              <img src={v.imgSrc} alt={v.alt} className="w-6 h-6" />
            </Link>
            ))}
          </div>
        </div>
        
 
        {/* 모바일용 링크 목록 */}
        <div className="lg:hidden flex flex-wrap justify-center gap-2 text-fttextcolor">
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
