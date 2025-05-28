import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./features/home/Home";

import './App.css';

function App({ mclassName, cclassName }: { mclassName: string ; cclassName:string }) {
  return (
    <>
      <Layout mclassName={mclassName} cclassName={cclassName}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home 컴포넌트로 변경 */}
          <Route path="/about" element={<div>소개</div>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

