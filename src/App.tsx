import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";

import './App.css'


function App({className}: {className: string}) {
 

  return (
    <>
      
       <Layout className={className}>
              <Routes>
                 <Route path="/" element={<div>메인</div>} />
                 <Route path="/about" element={<div>소개</div>} />  
              </Routes>
       </Layout>
      
    </>
  )
}

export default App
