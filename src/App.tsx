import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./features/home/Home";
import SubRouter from './routes/SubRouter';


import { Menu } from './types/common';
import { fetchData } from './lib/crud';

import { ValidComponentPath } from './routes/SubRouter';

import './App.css';

// ✅ path가 유효한 string인지 확인
function isMenuWithValidPath(menu: Menu): menu is Menu & { path: string } {

  return typeof menu.path === 'string' && menu.path.trim().length > 0;
}

function App({ mclassName, cclassName }: { mclassName: string; cclassName: string }) {
  const [menus, setMenus] = useState<Menu[]>([]); // 데이터를 저장해야하는 상태변수

  useEffect(() => {
    const loadMenus = async () => {
      const data = await fetchData('menu');
      setMenus(data);
    };

    loadMenus();
  }, []);

  return (
    <Layout mclassName={mclassName} cclassName={cclassName} menuArr={menus}>
      <Routes>
        <Route path="/" element={<Home />} />

        {menus
          .filter(isMenuWithValidPath) 
          .filter(menu => String(menu.code).length === 6)
          //소메뉴들만 라우터 생성함
          .map(menu => (
            <Route
              key={menu.code}
              path={`/${menu.path}`}
              element={
                <SubRouter
                  menu={menu} // 각자 해당 정보만 넘긴다
                  componentNm={menu.path as ValidComponentPath} // 타입 단언 (이미 필터링으로 안전)
                />
              }
            />
          ))}

        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white">
              404페이지 만들어주세요. 팀소개페이지 진행하면 좋겠어요.
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
