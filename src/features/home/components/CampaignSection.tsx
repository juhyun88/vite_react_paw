// 협력병원 소개


function CampaignSection() {
    return (
             <div className="bg-white text-gray-800">
                 <section className="py-16 bg-gray-50">
                    <h3 className="text-center text-xl font-bold mb-10">파우펙트웨이브와 함께하는 협력병원</h3>
                    <div className="max-w-3xl mx-auto px-4">
                    <div className="rounded-lg overflow-hidden shadow-lg border-2 border-yellow-500">
                        <img src="https://pawfectwave.vercel.app/img/bottom/memorial1.jpg" alt="hospital" />
                        <div className="p-4 text-center font-semibold">
                        나는 수의사다2<br />
                        국내 최대 규모의 반려동물 의료센터
                        </div>
                    </div>
                    </div>
                </section>
             </div>
    );
}

export default CampaignSection;