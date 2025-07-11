import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";


import CI  from '../ui/CI';
import Logotext  from '../ui/Logotext';
import { Menu } from '../../types/common';
import 'bootstrap-icons/font/bootstrap-icons.css'


type HeaderProps = {
  menuArr: Menu[];
};


const Header: React.FC<HeaderProps> = ({ menuArr }) => {

   const parentMenus = menuArr.filter(menu => String(menu.code).length === 3);  
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

const toggleSubMenu = (code: number) => {
  const key = String(code);
  setOpenMenus((prev) => {
    const isCurrentlyOpen = prev[key];
    // 모든 메뉴를 닫고, 현재 메뉴만 토글
    return isCurrentlyOpen ? {} : { [key]: true };
  });
};
  
  const [scrolled, setScrolled] = useState(false);

  

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 200);
  };

  

    window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  




    return (
        <header className={`px-[15px] md:px-[30px] xl:px-[50px] z-20 fixed left-0 right-0 top-0 transition-colors duration-500 ${scrolled ? 'bg-[rgba(31,38,37,0.9)]' : ''}`}>
            <div className={`flex justify-between items-center   ${scrolled ? '' : 'pt-[26px]' }`}>

                <h1 className="mb-0 flex flex-col justify-center z-20 xl:h-[55px] h-[40px]">
                    <a href="/" className="logo_container flex items-center gap-2 text-white h-full">   
                     
                        <CI></CI>
                        <span>
                            <Logotext></Logotext>
                        </span>                    
                    </a>
                </h1>

                
                <div className="flex lg:hidden z-50">
                    {/* 햄버거 버튼 */}
                    <div
                      className="hamburger-menu flex flex-col gap-[6px] w-[29px] justify-center cursor-pointer"
                      onClick={() => setIsMenuOpen(true)}
                      id="allmenu"
                    >
                      <span className="bg-white h-[3px] rounded block"></span>
                      <span className="bg-white h-[3px] rounded block"></span>
                      <span className="bg-white h-[3px] rounded block"></span>
                    </div>

                    {/* 모바일 메뉴 */}
                    {isMenuOpen && (
                      <div
                        className="fixed top-0 left-0 bottom-0 w-screen bg-white shadow-md p-4 z-40"
                        onClick={(e) => e.stopPropagation()} // 메뉴 영역 외 클릭 시 닫히는 것 방지
                      >
                        {/* 닫기 버튼 */}
                        <div className="flex justify-end mb-4">
                          <button
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                            className="text-2xl font-bold text-gray-700 hover:text-gray-900"
                          >
                            ×
                          </button>
                        </div>

                        {/* 메뉴 리스트 */}
                        <ul className="flex flex-col divide-y divide-gray-200 border-b border-gray-200">
                          {parentMenus &&
                            parentMenus.map((d1menu) => {
                              const subMenus = menuArr.filter(
                                (menu) =>
                                  String(menu.code).length === 6 &&
                                  String(menu.code).startsWith(String(d1menu.code))
                              );

                              const isOpen = !!openMenus[String(d1menu.code)];

                              return (
                                <li key={d1menu.code} className="py-3">
                                  <div className="flex items-center">
                                    <Link
                                      to={`/${d1menu.path ?? "#none"}`}
                                      className="font-semibold text-lg text-gray-800 pl-4"
                                      onClick={() => {
                                        if (subMenus.length > 0) {
                                          toggleSubMenu(d1menu.code);
                                        } else {
                                          setIsMenuOpen(false);
                                        }
                                      }}
                                    >
                                      {d1menu.title}
                                    </Link>

                                    {subMenus.length > 0 && (
                                      <button
                                      onClick={() => toggleSubMenu(d1menu.code)}
                                      aria-label={isOpen ? "Collapse submenu" : "Expand submenu"}
                                      className="text-black hover:text-black focus:outline-none pl-2"
                                    >
                                      <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                                    
                                    </button>
                                    )}
                                  </div>

                                  {isOpen && subMenus.length > 0 && (
                                    <ul className="pl-4 mt-2">
                                      {subMenus.map((submenu) => (
                                        <li key={submenu.code} className="py-1">
                                          <Link
                                            to={`/${submenu.path ?? "#none"}`}
                                            className="text-sm text-gray-600 hover:text-gray-800"
                                            onClick={() => setIsMenuOpen(false)}
                                          >
                                            {submenu.title}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    )}
                  </div>


                <div className="topmenu lg:flex justify-center items-center hidden ">
                    <ul className="flex flex-col lg:flex-row h-full gnb_ul " >
                    {parentMenus &&
                        parentMenus.map((d1menu) => {
                          // 하위 메뉴 필터링: code가 6자리이면서 앞 3자리가 d1menu.code와 같은 것
                          const subMenus = menuArr.filter(
                            (menu) =>
                              String(menu.code).length === 6 &&
                              String(menu.code).startsWith(String(d1menu.code))
                          );

                        return (
                          <li
                            key={d1menu.code}
                            className="relative text-center px-[33px] py-0 h-full transition-all duration-300 ease-in-out"
                          >
                            <Link
                              to={d1menu.path ?? "#none"}
                              className="flex justify-center items-center text-white font-semibold text-[21px] whitespace-nowrap h-full py-[28px] relative"
                            >
                              {d1menu.title}
                            </Link>

                            {/* 하위 메뉴 존재할 경우만 출력 */}
                            {subMenus.length > 0 && (
                              <ul className="absolute text-white p-0 m-0 left-0 right-0 top-100 py-[18px]  bg-opacity-80 z-10">
                                {subMenus.map((submenu) => (
                                  <li key={submenu.code}>
                                    <Link
                                      to={submenu.path ?? "#none"} // ✅ submenu.link가 path임
                                      className="text-topcolor whitespace-nowrap py-[10px] block font-light"
                                    >
                                      {submenu.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
  })}
                    </ul>
                    <div className='topmenuleft absolute left-[114px] top-full mt-2 hidden transition-all  duration-300 z-0'>
                    <img src="https://pawfectwave.vercel.app/img/maintop/onlinehall.jpg" alt="이미지1"className="w-full h-full object-cover" />
                    </div>
                    <div className='topmenuright absolute right-[75px] top-full mt-2 hidden transition-all duration-300 z-0'>
                    <img src="https://pawfectwave.vercel.app/img/maintop/doctor2.jpg" alt="이미지1"className="w-full h-full object-cover" />
                    </div>

                    {/* <button className="closebtn lg:hidden md:block">
                    <img src="https://pawfectwave.vercel.app/img/svg/X boxbutton_line.svg" alt="닫기 버튼" />
                    </button> */}
                </div>

                <div className="hidden lg:flex items-center z-20 ">
                    <ul className="reservation flex justify-end items-center mb-0 p-0 gap-[30px]">
                        
                        
                       
                        <li className="whitespace-nowrap ">
                        <Link to="/reservation" className="reservation-button flex items-center justify-center text-white w-[225px] h-[70px] gap-[15px] py-[10px] px-[20px] bg-[#8087A04D] rounded-[80px] font-light">
                        
                                
                            
                            <span className='text-[20px] font-[700]'>협력병원바로가기</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.59034 18.7744C9.59034 18.9568 9.66278 19.1316 9.79171 19.2606C9.92064 19.3895 10.0955 19.4619 10.2778 19.4619H19.4023C19.9494 19.4619 20.474 19.2446 20.8608 18.8578C21.2475 18.471 21.4648 17.9464 21.4648 17.3994V3.64941C21.4648 3.10241 21.2475 2.5778 20.8608 2.19101C20.474 1.80421 19.9494 1.58691 19.4023 1.58691H5.65234C5.10533 1.58691 4.58073 1.80421 4.19394 2.19101C3.80714 2.5778 3.58984 3.10241 3.58984 3.64941V12.7739C3.58984 12.9563 3.66228 13.1311 3.79121 13.26C3.92014 13.389 4.09501 13.4614 4.27734 13.4614C4.45968 13.4614 4.63455 13.389 4.76348 13.26C4.89241 13.1311 4.96484 12.9563 4.96484 12.7739V3.64941C4.96484 3.46708 5.03728 3.29221 5.16621 3.16328C5.29514 3.03435 5.47001 2.96191 5.65234 2.96191H19.4023C19.5847 2.96191 19.7595 3.03435 19.8885 3.16328C20.0174 3.29221 20.0898 3.46708 20.0898 3.64941V17.3994C20.0898 17.5818 20.0174 17.7566 19.8885 17.8856C19.7595 18.0145 19.5847 18.0869 19.4023 18.0869H10.2778C10.0955 18.0869 9.92064 18.1593 9.79171 18.2883C9.66278 18.4172 9.59034 18.5921 9.59034 18.7744Z" fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.9657 7.77441C15.9657 7.59208 15.8933 7.41721 15.7643 7.28828C15.6354 7.15935 15.4605 7.08691 15.2782 7.08691H8.40321C8.22088 7.08691 8.04601 7.15935 7.91708 7.28828C7.78815 7.41721 7.71571 7.59208 7.71571 7.77441C7.71571 7.95675 7.78815 8.13162 7.91708 8.26055C8.04601 8.38948 8.22088 8.46191 8.40321 8.46191H13.6186L2.41646 19.6627C2.28737 19.7918 2.21484 19.9668 2.21484 20.1494C2.21484 20.332 2.28737 20.5071 2.41646 20.6362C2.54556 20.7653 2.72065 20.8378 2.90321 20.8378C3.08578 20.8378 3.26087 20.7653 3.38996 20.6362L14.5907 9.43404V14.6494C14.5907 14.8318 14.6631 15.0066 14.7921 15.1356C14.921 15.2645 15.0959 15.3369 15.2782 15.3369C15.4605 15.3369 15.6354 15.2645 15.7643 15.1356C15.8933 15.0066 15.9657 14.8318 15.9657 14.6494V7.77441Z"  fill="currentColor"/>
                             </svg>
                          
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </header>
    );
}

export default Header;