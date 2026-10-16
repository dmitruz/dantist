import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="*" element={<ServicePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
