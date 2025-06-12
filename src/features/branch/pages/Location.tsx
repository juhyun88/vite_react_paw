import { branches, Branch } from "../data/branches";

function Location({ className }: { className: string }) {
  return (
    <div className={`flex justify-center bg-[#F7F7F5] ${className}`}>
      <div className="w-full max-w-[1280px] px-4 md:py-[100px] py-[80px]">
        <section className="text-center md:mb-[100px] mb-[80px]">
          <h1 className="text-[50px] md:text-[80px] text-[#3A3A3A] font-[700]">파우펙트 웨이브 지점</h1>
        </section>

        <div className="space-y-[100px]">
          {branches?.map((branch: Branch) => (
            <section
              key={branch.id}
              className="flex flex-col md:flex-row items-start overflow-hidden text-left gap-10"
            >
              <div className="flex-1 p-6 space-y-6">
              <p>
                    <span className="text-[#3A3A3A] md:text-[35px] font-[600] inline-block">
                      {branch.subtitle}
                    </span>
                  </p>
                <h2 className="text-xl text-[#4C9C8B] md:text-[35px] font-[600] whitespace-pre-line">
                  {branch.description}
                </h2>
                <p className="md:text-[25px] font-[300] whitespace-pre-line">
                  {branch.subDescription}
                </p>

                <div className="text-sm text-gray-900 space-y-4">
            
                  <p>
                    <span className="text-[#4C9C8B] md:text-[25px] font-[600] border-b-[1px] pb-4 inline-block">
                      {branch.title}
                    </span>
                  </p>
                  <div className="space-y-2 pr-2">
                    <p>
                      <span className="text-[#3A3A3A] md:text-[20px] font-[400] pr-2 mr-2 border-r border-[#4C9C8B]">
                        {branch.locationTitle}
                      </span>
                      <span className="text-[#3A3A3A] md:text-[20px] font-[400]">
                        {branch.address}
                      </span>
                    </p>
                    <p>
                      <span className="text-[#3A3A3A] md:text-[20px] font-[400] pr-2 mr-2 border-r border-[#4C9C8B]">
                        {branch.hoursTitle}
                      </span>
                      <span className="text-[#3A3A3A] md:text-[20px] font-[400]">
                        {branch.hours}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-[610px] md:h-[440px] shrink-0">
                <img
                  src={branch.imageUrl}
                  alt={branch.title}
                  className="w-full h-full object-cover rounded-[83px]"
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Location;
