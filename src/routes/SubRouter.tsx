import React from "react";
import { Menu } from "../types/common";
import Brand from "../features/brand/Brand";
import Funeral from "../features/funeral/Funeral"; // ✅ Funeral 추가

// 타입 정의
export type BrandComponentPath = "/campaign" | "/brandstory";
export type FuneralComponentPath = "/procedures" | "/price" | "/stoneprice"; // ✅ Funeral 관련 경로 추가

export type ValidComponentPath = BrandComponentPath | FuneralComponentPath;

// `ValidComponentPath`인지 확인하는 함수
export const isValidComponentPath = (path: string): path is ValidComponentPath => {
  return ["/campaign", "/brandstory", "/procedures", "/price", "/stoneprice"].includes(path);
};

// ✅ Funeral 관련 타입 가드 함수 추가
const isBrandComponentPath = (path: ValidComponentPath): path is BrandComponentPath => {
  return ["/campaign", "/brandstory"].includes(path);
};

const isFuneralComponentPath = (path: ValidComponentPath): path is FuneralComponentPath => {
  return ["/procedures", "/price", "/stoneprice"].includes(path);
};

type SubRouterProps = {
  menu: Menu;
  componentNm: ValidComponentPath;
};

const SubRouter: React.FC<SubRouterProps> = ({ menu, componentNm }) => {
  return (
    <section>
      <div
        className="flex items-center justify-center bg-white text-black p-8 xl:h-[600px] h-[100vw] text-white"
        style={{
          background: `url(https://juhyun88.github.io/pawfectwave_team_react/img/subpage/${menu.code}.jpg) no-repeat center`,
          backgroundSize: "100%",
        }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{menu.title}</h1>
          <p className="mt-2 text-sm">
            {menu.sub_title}
            {componentNm}
          </p>
        </div>
      </div>

      {/* ✅ Brand와 Funeral 컴포넌트를 올바르게 렌더링 */}
      <div>
        {isBrandComponentPath(componentNm) && (
          <Brand className="container mx-auto" componentNm={componentNm} />
        )}
        {isFuneralComponentPath(componentNm) && (
          <Funeral className="container mx-auto" componentNm={componentNm} />
        )}
      </div>
    </section>
  );
};

export default SubRouter;
