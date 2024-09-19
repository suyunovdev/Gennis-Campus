import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import Progress from "./pages/progress/Progress";
import Teachers from "./pages/teachers/Teachers";
import News from "./pages/news/News";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
