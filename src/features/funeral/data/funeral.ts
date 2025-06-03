// data/funeralPackages.ts
export type PackageItem = {
  id: number;
  title: string;
  subtitle: string; // 추가된 필드
  description: string;
  tag?: string;
  image: string;
  features: string[];
  prices: { mainlabel: string; sublabel:string; amount: string }[];
};

export const funeralPackages: PackageItem[] = [
{
  id: 1,
  title: "기본장례",
  subtitle: "파우펙트웨이브 기본장례", // ← 이 줄 추가
  tag: "",
  image: "https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/funeral1.jpg",
  description: `장례 (염습 · 개별화장 · 단독추모실) · 추모 예식 서비스 (편지쓰기
                · 발도장 스탬프 · 인연의 끈 · 털 보관) · 백자 유골함 · 보자기`,
  features: [],
  prices: [
    { mainlabel: "15kg 이상", sublabel:"대형 동물", amount: "₩ 650,000" },
    { mainlabel: "15kg 미만", sublabel:"일반 · 소동물", amount: "₩ 350,000" },
    
  ],
},

  {
    id: 2,
    title: "Pawfect Wave 장례 Ⅰ",
    subtitle: "더 편안한 모습으로 인사하는 요람 장례",
    tag: "요람",
    image: "https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/funeral2.jpg",
    description: `장례 (염습 · 개별화장 · 단독추모실) · 추모 예식 서비스 (편지쓰기 
                    · 발도장 스탬프 · 인연의 끈 · 털 보관)· 백자 유골함 · 보자기
                    + 고급 오동나무 관 · 고급 수의 · 꽃다발 서비스`,
    features: [],
    prices: [
      { mainlabel: "15kg 이상", sublabel:"대형 동물", amount: "₩ 1,100,000" },
      { mainlabel: "15kg 미만", sublabel:"일반 · 소동물", amount: "₩ 700,000" },
    ],
  },
  {
    id: 3,
    title: "Pawfect Wave 장례 IⅠ",
    subtitle: "관&수의가 포함된 실속형 장례",
    tag: "관·수의",
    image: "https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/funeral3.jpg",
    description: `장례 (염습 · 개별화장 · 단독추모실) · 추모 예식 서비스 (편지쓰기 
                    · 발도장 스탬프 · 인연의 끈 · 털 보관)· 백자 유골함 · 보자기
                    + 고급 오동나무 관 · 고급 수의 · 꽃다발 서비스`,
    features: [],
    prices: [
         { mainlabel: "15kg 이상", sublabel:"대형 동물", amount: "₩ 750,000" },
         { mainlabel: "15kg 미만", sublabel:"일반 · 소동물", amount: "₩ 1,200,000" },
        { mainlabel: "상담 후 이용", sublabel:"소동물", amount: "₩ 650,000" }
    ],
  },
  {
    id: 4,
    title: "프리미언 소풍 장례",
    subtitle: "잠시, 먼 소풍을 떠나는 거예요",
    image: "https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/funeral4.jpg",
    description: `장례 (염습 · 개별화장 · 단독추모실) · 추모 예식 서비스(편지쓰기
                · 발도장 스탬프 · 인연의 끈 · 털 보관) · 백자 유골함 · 보자기
                + 프리미엄 관 M · 최고급 수의 · 무지개 다리 · 소풍 가방 · 들꽃 바구니`,
    features: [],
    prices: [
      { mainlabel: "15kg 미만", sublabel: "일반 · 소동물", amount: "₩ 1,350,000" },
    ],
  },
];

export const itemContents = [
  {
    title: "집에서 함께",
    subtitle: "가장 많은 선택을 받았어요",
    tag: "추천",
    description: `우리가 쌓아 올린 추억이 가득한 집에서 아이의 흔적을 보관하세요.\n
                    자택에서 아이의 유골함을 보관할 때, 보존 기간을 크게 늘려주는\n
                    '레인보우 유골함 or 웨이브 유골함'이 포함된 구성입니다.`,
     description2: `레인보우 유골함 or 웨이브 유골함 · 원목 안치함 · 천년포\n
                    · 발도장 클레이 · 원목액자`,
    image: "https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/funeral5.jpg",
  },
  {
    title: "자연과 함께 ",
    tag: "추천",
    description: `이제 아픔도, 목줄도 없는 곳에서 마음껏 뛰어 놀 수 있기를.\n
                    1 - 2년간 아이의 흔적을 보관한 후에 자연의 품으로 돌려보낼 수\n
                    있는 '한지 유골함(토양 매립 유골함)'이 포함된 구성입니다.`,
    description2: `한지 유골함(토양 매립 유골함) · 발도장 액자`,
    image: "https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/funeral6.jpg",
  },
  {
    title: "오래도록 함께",
    description: `우리가 다시 만날 그 날까지, 오래도록 함께 지내고 싶다면.\n
                    특별한 관리 없이 아이의 흔적을 오랜 시간 보관하기 위한\n
                    '루세떼'는 화장 후 남은 유골분으로 제작하는 추모 보석입니다.`,
    description2: `루세떼 제작 · 케이스 · 유리병`,
    image: "https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/funeral7.jpg",
  },
  {
    title: "친구와 함께",
    description: `파우우펙트웨이브의 봉안당은 4,200석에 이르는 국내 \n
                    최대 규모의반려동물 봉안당입니다. 사계절 모두 아이들이 \n
                    안전하게 쉴 수 있도록 항상 적정 온·습도를 유지하고 있습니다.`,
    description2: `봉안당`,
    image: "https://pawfectwave.vercel.app/img/pc/sub_normalfuneral/funeral8.jpg",
  },
];