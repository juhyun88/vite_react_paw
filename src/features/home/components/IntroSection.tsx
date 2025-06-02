

function IntroSection() {
  return (
    <div className="py-20 overflow-hidden bg-[#F7F7F5]">
  <div className="md:w-[1280px] px-[37.5px] mx-auto grid md:grid-cols-2 grid-rows-3 gap-16 px-4" id="ehwave_love">

    {/* 사랑 - 이미지 */}
    <div className="relative w-full flex justify-center items-center">
      <img
        src="https://pawfectwave.vercel.app/img/main_ci/love_1.png"
        alt="eunhye_love"
        className="md:h-auto md:w-full object-contain"
      />
      <span className="inline md:hidden absolute w-full h-full left-0 flex justify-center items-center top-0 text-white text-[22.5px] font-[600]">사랑</span>
      <div className="absolute top-1/2 -translate-y-[45%] md:top-0 md:left-0 md:translate-x-0 md:translate-y-0">
              <svg  className="w-[280px] md:w-full animate-rotate45" xmlns="http://www.w3.org/2000/svg" width="605" height="605" viewBox="0 0 605 605" fill="none">
                <path d="M503.657 604.363C477.094 604.363 442.355 591.728 403.402 577.555C375.263 567.319 343.373 555.722 310.687 547.546C273.299 538.193 240.366 534.693 210.008 536.845C161.52 540.276 120.566 537.401 88.2869 528.295C60.7205 520.52 39.1857 508.143 24.2902 491.515C-3.97561 459.962 -0.7133 421.764 1.99862 406.805C17.6337 320.633 132.641 130.769 197.331 84.3436C211.911 73.8833 224.588 62.6656 236.852 51.8208C278.305 15.1553 314.11 -16.5068 393.547 11.3051C457.819 33.8094 487.3 103.457 513.318 164.904C528.569 200.922 542.972 234.942 562.425 254.026C570.991 262.432 578.691 275.963 585.307 294.255C591.585 311.607 596.625 332.849 599.887 355.674C606.888 404.688 605.357 457.018 595.691 499.249C579.757 568.862 547.283 593.294 522.847 601.54C517.068 603.491 510.646 604.363 503.669 604.363H503.657ZM227.558 532.788C253.295 532.788 280.942 536.558 311.518 544.206C344.382 552.423 376.364 564.06 404.578 574.319C453.163 591.992 495.12 607.249 521.741 598.275C545.345 590.311 576.753 566.538 592.331 498.481C601.906 456.645 603.419 404.768 596.476 356.162C589.831 309.627 576.203 272.365 560.017 256.488C540.07 236.922 525.536 202.591 510.148 166.247C484.41 105.459 455.238 36.5579 392.406 14.5585C356.835 2.10144 328.197 0.821874 302.27 10.519C278.838 19.2809 259.55 36.3456 239.128 54.4029C226.801 65.305 214.056 76.5744 199.338 87.1437C184.144 98.0458 165.075 117.922 144.188 144.615C124.557 169.707 103.761 200.199 84.0441 232.796C42.6487 301.233 12.508 368.149 5.38135 407.425C2.75544 421.885 -0.403686 458.803 26.8474 489.225C41.3014 505.36 62.2857 517.393 89.2157 524.99C121.111 533.987 161.663 536.822 209.761 533.419C215.598 533.006 221.526 532.799 227.558 532.799V532.788Z" fill="#AC9E8D"/>
                </svg>
            </div>
          </div>

          {/* 사랑 - 텍스트 */}
            <div className="hidden md:flex items-center justify-center text-center md:text-left">
            <p className="text-[20px] md:text-[24px] leading-relaxed text-center leading-tight">
                <span className="hidden md:inline font-bold text-[#754C43] text-[42px] font-[400]">사랑</span>
                <span className="hidden md:inline text-[42px] font-[400]">은 가족의 일원으로서 사랑과 보살핌을 받으며 소중한 시간을 <br />함께한 존재로써</span>
                <span className="hidden md:inline text-[#754C43] text-[45px] font-[400]"> 사랑의 마음</span>
                <span className="hidden md:inline text-[42px] font-[400]">으로 <br /></span>
                <span className="hidden md:inline text-[#754C43] text-[45px] font-[400]">서로 메세지</span>
                <span className="hidden md:inline text-[42px] font-[400]">를 나누는 시간과<br /> 되새기는 시간을 의미합니다.</span>
            </p>
            </div>

           {/* 인사 - 텍스트 */}
            <div className="hidden md:flex items-center justify-center text-center md:text-left">
            <p className="text-[20px]  text-[24px] leading-relaxed text-center leading-tight">
                <span className="hidden md:inline font-bold text-[#754C43] text-[45px] font-[400]">인사</span>
                <span className="hidden md:inline text-[45px] font-[400] ">는 마지막 여행을 떠나는<br /> 반려동물에게 단순한 <br /></span>
                <span className="hidden md:inline text-[#754C43] text-[45px] font-[400]">작별 인사</span>
                <span className="hidden md:inline text-[45px] font-[400]">가 아닌 반려동물의 <br />
                <span className="hidden md:inline text-[#754C43] text-[45px] font-[400]">삶과 마지막 여행</span>에 대한<br /> 마음을 담았습니다.</span>
            </p>
            </div>
            
        {/* 인사 - 이미지 */}
        <div className="relative w-full flex justify-center items-center">
        <img
            src="https://pawfectwave.vercel.app/img/main_ci/Hello_2.png"
            alt="eunhye_hello"
            className="w-[385px] md:w-full md:h-auto md:w-full  object-contain"
        />
        <span className="inline md:hidden absolute w-full h-full left-0 flex justify-center items-center top-0 text-white text-[22.5px] font-[600]">인사</span>
        <div className="absolute  left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0">
              <svg className="w-[280px] md:w-full animate-rotate40" xmlns="http://www.w3.org/2000/svg" width="608" height="450" viewBox="0 0 608 450" fill="none" >
                <path d="M284.391 449.817C256.602 449.817 228.997 447.643 202.641 443.276C173.055 438.373 145.912 430.9 121.962 421.057C97.0226 410.811 76.1745 398.239 59.995 383.69C41.4833 367.049 26.8956 344.432 16.6298 316.468C7.18996 290.754 1.75541 261.635 0.480218 229.92C-1.97603 168.978 11.5633 106.064 36.6991 61.6259C49.8747 38.3332 65.3696 21.4187 82.7559 11.3487C101.76 0.341848 122.218 -1.92967 143.563 4.59828C230.704 31.2448 274.005 22.8047 308.799 16.0201C326.553 12.5593 341.885 9.57338 359.486 12.0289C395.431 17.051 537.153 76.7223 588.674 171.964C612.325 215.683 613.562 260.673 592.341 305.68C576.119 340.091 548.625 369.479 510.622 393.024C476.012 414.465 434.286 430.211 386.603 439.824C353.615 446.471 318.864 449.817 284.395 449.817H284.391ZM120.267 3.56732C89.2431 3.56732 60.9407 23.9811 38.9329 62.8921C14.0238 106.928 0.608593 169.333 3.04772 229.817C4.31436 261.263 9.69756 290.121 19.0433 315.583C29.1635 343.149 43.5201 365.424 61.7152 381.782C77.6765 396.13 98.2764 408.548 122.942 418.683C146.717 428.449 173.671 435.875 203.069 440.743C261.814 450.475 326.814 449.256 386.098 437.308C433.481 427.756 474.925 412.125 509.274 390.843C546.849 367.563 574.018 338.542 590.026 304.589C610.879 260.361 609.663 216.154 586.423 173.187C558.865 122.247 506.445 83.8534 467.325 60.6163C417.73 31.1593 374.647 16.743 359.135 14.5742C341.958 12.1743 326.823 15.126 309.295 18.544C274.223 25.3799 230.571 33.8928 142.814 7.05802C135.18 4.72233 127.649 3.56732 120.271 3.56732H120.267Z" fill="#A97D5E"/>
                </svg>
            </div>
            </div>




           {/* 추억 - 이미지 */}
             <div className="relative w-full flex justify-center items-center">
                <img
                    src="https://pawfectwave.vercel.app/img/main_ci/Memories_3.png"
                    alt="eunhye_love"
                    className="w-[385px] md:w-full md:h-auto object-contain"
                />
                <span className="inline md:hidden absolute w-full h-full left-0 flex justify-center items-center top-0 text-white text-[22.5px] font-[600]">추억</span>
             <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0">
              <svg className="w-[300px] md:w-full animate-pop" xmlns="http://www.w3.org/2000/svg" width="687" height="589" viewBox="0 0 687 589" fill="none">
            <path d="M73.9682 588.327C46.1765 588.327 24.5109 580.143 12.1712 557.315C3.72598 541.692 0.0284425 527.769 0.87625 514.753C1.66389 502.676 6.38426 491.376 15.3163 480.206C32.0537 459.268 62.4052 440.513 97.5482 418.803C142.788 390.852 199.094 356.064 248.781 302.778C276.02 273.568 298.293 242.271 316.873 207.103C337.981 167.147 353.969 122.134 364.378 73.3123C370.105 46.4624 386.306 25.6202 411.226 13.0287C447.365 -5.22362 496.964 -3.53432 540.673 17.431C540.695 17.4422 540.722 17.4534 540.744 17.4701C541.023 17.6212 568.754 32.797 595.545 60.0496C611.303 76.0812 623.681 93.1085 632.323 110.65C643.159 132.639 648.131 155.507 647.108 178.609C644.893 228.466 658.19 272.494 669.917 311.337C681.562 349.894 691.615 383.199 682.585 410.905C676.3 430.187 662.281 454.396 645.09 475.675C629.709 494.705 603.946 521.118 568.563 538.867C547.1 549.635 524.559 555.967 501.57 557.696C475.627 559.642 448.803 555.732 421.837 546.066C352.098 521.068 266.689 544.455 191.338 565.085C147.273 577.145 106.437 588.321 73.9682 588.327ZM467.92 3.7711C447.928 3.7711 428.904 7.83214 412.676 16.0325C388.68 28.1542 373.086 48.2021 367.583 74.0171C357.103 123.147 341.011 168.456 319.756 208.692C301.038 244.122 278.596 275.654 251.155 305.089C201.167 358.699 144.654 393.615 99.2493 421.673C64.3688 443.226 34.2416 461.836 17.8652 482.331C0.340215 504.253 -0.523997 526.88 15.0483 555.693C26.677 577.207 47.7737 586.459 81.4508 584.797C112.152 583.287 150.205 572.872 190.49 561.841C266.3 541.082 352.23 517.555 422.926 542.895C473.297 560.946 521.808 558.58 567.119 535.852C601.977 518.366 627.39 492.311 642.563 473.532C659.513 452.556 673.314 428.749 679.478 409.842C688.175 383.155 678.264 350.331 666.788 312.321C654.979 273.215 641.595 228.891 643.837 178.446C644.838 155.943 639.987 133.652 629.424 112.194C620.946 94.9769 608.793 78.2516 593.302 62.4773C567.266 35.9686 540.339 21.0389 539.245 20.4404C516.13 9.36483 491.363 3.7711 467.92 3.7711Z" fill="#A97D5E"/>
            </svg>
            </div>
          </div>

           {/* 추억 - 텍스트 */}
            <div className="flex items-center justify-center text-center md:text-left">
            <p className="text-[20px] md:text-[24px] leading-relaxed text-center leading-tight">
                <span className="hidden md:inline font-bold text-[#754C43] text-[45px] font-[400]">추억</span>
                <span className="hidden md:inline text-[45px] font-[400]">은 반려동물의<br /> 처음과 끝을 함께하며 <br />
                <span className="hidden md:inline text-[#754C43] text-[45px] font-[400]">많은 추억을 공유</span>했던 <br />소중한 시간들을 
                <span className="hidden md:inline text-[#754C43] text-[45px] font-[400]">기념</span>하는<br /> 의미를 담았습니다.</span>
            </p>
            </div>

        </div>

      </div>
    
  );
}

export default IntroSection;
