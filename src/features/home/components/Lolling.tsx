function Lolling() {
  const images = [
    "https://pawfectwave.vercel.app/img/pc/sponsorbanner/sp100.jpg",
    "https://pawfectwave.vercel.app/img/pc/sponsorbanner/sp200.jpg",
    "https://pawfectwave.vercel.app/img/pc/sponsorbanner/sp300.jpg",
    "https://pawfectwave.vercel.app/img/pc/sponsorbanner/sp400.jpg",
    "https://pawfectwave.vercel.app/img/pc/sponsorbanner/sp500.jpg",
    "https://pawfectwave.vercel.app/img/pc/sponsorbanner/sp600.jpg",
    "https://pawfectwave.vercel.app/img/pc/sponsorbanner/sp700.jpg",
  ];

  return (
    <div className="py-[50px] md:py-[100px]">
        <div className="overflow-hidden whitespace-nowrap bg-white">
        <div className="animate-marquee flex w-[calc(331px*10)] ">
            {[...images, ...images].map((src, idx) => (
            <img
                key={idx}
                src={src}
                alt={`rolling-${idx}`}
                className="h-24 w-auto mx-4 flex-shrink-0 mx-2"
                style={{ width: "200px", height: "100px", flexShrink: 0 }}
            />
            ))}
        </div>
        </div>
    </div>
  );
}

export default Lolling;
