import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const NavFooterLayout = lazy(() => import("./layout/NavFooterLayout"));
import FAQPage from "./pages/FAQPage";
const HomePage = lazy(() => import("./pages/HomePage"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <NavFooterLayout>
                <HomePage />
              </NavFooterLayout>
            }
          />
          <Route
            path="/faqs"
            element={
              <NavFooterLayout>
                <FAQPage />
              </NavFooterLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
