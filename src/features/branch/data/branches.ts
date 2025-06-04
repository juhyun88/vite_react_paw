// data/BranchData.ts

export interface Branch {
    id: number;
    subtitle: string;
    title: string;
    description: string;
    subDescription: string;
    locationTitle: string;
    address: string;
    hoursTitle: string;
    hours: string;
    imageUrl: string;
  }
  
  export const branches: Branch[] = [
    {
      id: 1,
      subtitle: '넓고 쾌적한 프라이빗 공간',
      title: '파우펙트 웨이브 경기 김포 1호점',
      description: '파우펙트 웨이브 경기 김포 1호점',
      subDescription: '경기 김포점은 가장 넓고 쾌적한 공간에서\n보호자가 편안하게 장례를 진행할 수 있습니다.',
      locationTitle: '지점 주소',
      address: '경기도 김포시 마산동 1234-56',
      hoursTitle: '운영 시간',
      hours: '매일 09:00 - 19:00',
      imageUrl: 'https://pawfectwave.vercel.app/img/pc/03/h200.jpg',
    },
    {
      id: 2,
      subtitle: '수도권에서 가까운',
      title: '파우펙트 웨이브 경기 화성 2호점',
      description: '파우펙트 웨이브 경기화성 2호점',
      subDescription: '경기화성점은 가장 넓고 쾌적한 공간에서\n 보호자가 편안하게 장례를 진행할 수 있습니다.',
      locationTitle: '지점 주소',
      address: '경기도 화성시 동탄순환대로 789-10',
      hoursTitle: '운영 시간',
      hours: '매일 10:00 - 18:00',
      imageUrl: 'https://pawfectwave.vercel.app/img/pc/03/h300.jpg',
    },
    {
      id: 3,
      subtitle: '포근하고 넓은 프라이빗 공간',
      title: '파우펙트 웨이브 세종 3호점',
      description: '파우펙트 웨이브 세종 3호점',
      subDescription: '세종점은 가장 넓고 쾌적한 공간에서\n보호자가 편안하게 장례를 진행할 수 있습니다.',
      locationTitle: '지점 주소',
      address: '세종특별자치시 한누리대로 3000',
      hoursTitle: '운영 시간',
      hours: '매일 09:00 - 17:00',
      imageUrl: 'https://pawfectwave.vercel.app/img/pc/03/h400.jpg',
    },
    {
      id: 4,
      subtitle: '부산 1위 반려동물 장례식장',
      title: '파우펙트 웨이브 부산 4호점',
      description: '파우펙트 웨이브 부산 4호점',
      subDescription: '부산점은가장 넓고 쾌적한 공간에서\n보호자가 편안하게 장례를 진행할 수 있습니다.',
      locationTitle: '지점 주소',
      address: '부산광역시 해운대구 센텀서로 45',
      hoursTitle: '운영 시간',
      hours: '매일 09:00 - 19:00',
      imageUrl: 'https://pawfectwave.vercel.app/img/pc/03/h500.jpg',
    },
  ];
  