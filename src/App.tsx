import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./features/home/Home";
import SubRouter from './routes/SubRouter';


import { Menu } from './types/common';

import { fetchData } from './lib/crud';

import './App.css';

// 최상의 컴포넌트에서  처음부터 바로 출력되어야 하는 데이터를 연동하여 전달함 (추후 랜더링할 필요없는 데이터대상)

function App({ mclassName, cclassName }: { mclassName: string; cclassName: string }) {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    //상단데이터전달함수
    //라우터값 연동하려고 여기서 진행
    const loadMenus = async () => {
      const data = await fetchData('menu'); //데이블명
      setMenus(data);
    };

    loadMenus();
  }, []);

  return (
    <Layout mclassName={mclassName} cclassName={cclassName} menuArr={ menus }>
     <Routes>
        <Route path="/" element={<Home />} />
        {menus
          .filter(menu => String(menu.code).length === 6 && menu.path) // 6자리이며 path가 있는 경우만
          .map(menu => (
            <Route
              key={menu.code}
              path={menu.path!} // path는 null 체크 완료됨
              element={<SubRouter menu={menu}  />}
            />
          ))}
          <Route path="*" element={<div className='min-h-screen flex flex-col  items-center justify-center bg-primary text-white'>404페이지 만들어주세요. 팀소개페이지진행하면 좋겠어요</div>} />
      </Routes>

    </Layout>
  );
}

export default App;

