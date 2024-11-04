import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
const NavFooterLayout = lazy(() => import("./layout/NavFooterLayout"))
const HomePage = lazy(() => import("./pages/HomePage"))
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavFooterLayout><HomePage /></NavFooterLayout >} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
