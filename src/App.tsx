import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import ContactUsPage from './pages/ContactUs/ContactUsPage'
import FAQSPage from './pages/FAQSPage/FAQSPage'
import AboutusPage from './pages/AboutusPage/AboutusPage'
import NewsPage from './pages/NewsPage/NewsPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/faqs" element={<FAQSPage />} />
          <Route path="/about" element={<AboutusPage />} />
          <Route path="/news" element={< NewsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
