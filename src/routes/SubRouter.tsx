import React from "react";
import { Menu } from "../types/common";
import BrandIntro from "../features/brand/pages/BrandIntro";
import DonationCampaign from "../features/brand/pages/DonationCampaign";
import FuneralProcedure from "../features/funeral/pages/FuneralProcedure";
import NormalFuneral from "../features/funeral/pages/NormalFuneral";
import StoneFuneral from "../features/funeral/pages/StoneFuneral";
import BranchIntro from "../features/branch/pages/BranchIntro";
import Location from "../features/branch/pages/Location";
import Noncompaniedservice from "../features/services/pages/Noncompaniedservice";
import Cybermemorial from "../features/services/pages/Cybermemorial";
import Funeralservice from "../features/services/pages/Funeralservice";
import Boneservice from "../features/services/pages/Boneservice";
import Measure from "../features/support/components/Measure";
import Insurance from "../features/support/components/Insurance";
import Petroscare from "../features/support/components/Petroscare";
import Question from "../features/support/components/Question";
import Inquire from "../features/support/components/Inquire";

//import Funeral from "../features/funeral/Funeral"; // ✅ Funeral 추가

//서브라우터들 수파베이스로 값을 연동하고 싶어
export type ValidComponentPath =
  | "campain"
  | "brandstory"
  | "procedures"
  | "price"
  | "stoneprice"
  | "store"
  | "way"
  | "boneservice"
  | "cybermemorial"
  | "funeralservice"
  | "noncompaniedservice"
  | "measure"
  | "insurance"
  | "petlose"
  | "question"
  | "inquire"
  

type ComponentProps = {
    className: string;
};
  

const COMPONENT_MAP: Record<
  ValidComponentPath,
  React.FC<ComponentProps>
> = {
  campain: DonationCampaign,
  brandstory: BrandIntro,
  procedures: FuneralProcedure,
  price: NormalFuneral,
  stoneprice: StoneFuneral,
  store: BranchIntro,
  way: Location,
  boneservice: Boneservice,
  cybermemorial: Cybermemorial,
  funeralservice: Funeralservice,
  noncompaniedservice: Noncompaniedservice,
  measure: Measure,
  insurance: Insurance,
  petlose: Petroscare,
  question: Question,  
  inquire: Inquire,
};
 

type SubRouterProps = {
  menu: Menu;
  componentNm: ValidComponentPath;
};



const SubRouter: React.FC<SubRouterProps> = ({ menu, componentNm }) => {
  const DynamicComponent = COMPONENT_MAP[componentNm];
  return (
            <section>
            <div
          className="flex items-center justify-start bg-white text-black p-8 text-white
                    h-[70vw] md:h-[600px] " // 모바일 높이 고정 (70vw 정도가 적절)
          style={{
            background: `url(https://juhyun88.github.io/pawfectwave_team_react/img/subpage/${menu.code}.jpg) no-repeat center center`,
            backgroundSize: "cover", // 너비/높이 모두 꽉 채우기
          }}
        >
        <div className="max-w-[1200px] mx-auto w-[100%]">
          <h1 className="md:text-[80px] font-[700] md:mb-4  mb-2" style={{ fontSize: 'clamp(20px, 6vw, 80px)', lineHeight : 1 }}>{menu.title}</h1>
          <p className="mt-2 text-sm"  >
            {menu.sub_title}
          </p>
        </div>
      </div>

      {/* ✅ Brand와 Funeral 컴포넌트를 올바르게 렌더링 */}
      <div>
      {DynamicComponent ? (
         <div>
          <DynamicComponent className="" />
          </div>
        ) : (
          <div className="text-center py-12 text-red-500">잘못된 컴포넌트 경로입니다.</div>
        )}       
      </div>
    </section>
  );
};

export default SubRouter;
