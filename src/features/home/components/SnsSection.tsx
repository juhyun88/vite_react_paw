import React from 'react';


function SnsSection() {
    return (
         <div className="bg-white text-gray-800">

            <section className="py-16">
                <h3 className="text-center text-xl font-bold mb-10">파우펙펙트웨이브 유튜브 SNS</h3>
                <div className="flex justify-center items-center gap-4 px-4 overflow-x-auto">
                {[1, 2, 3].map((i) => (
                    <div
                    key={i}
                    className={`w-72 flex-shrink-0 rounded-lg overflow-hidden shadow-lg border ${
                        i === 2 ? 'scale-105 border-black' : 'opacity-70'
                    }`}
                    >
                    <img src={`https://pawfectwave.vercel.app/img/slogan/slogan_${(i - 1) % 3}.jpg`} alt={`video ${i}`} />
                    <div className="p-4 text-sm font-semibold">
                        마지막 여정을 함께한 반려동물의 따뜻한 영상
                    </div>
                    </div>
                ))}
                </div>
            </section>
         </div>
    );
}

export default SnsSection;

