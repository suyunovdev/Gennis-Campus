import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import Progress from "./pages/progress/Progress";
import Teachers from "./pages/teachers/Teachers";
import News from "./pages/news/News";
import Login from "./Login/Login";
import Teacher_admin from "./admins/teacher_admin/Teacher_admin";
import Advantages from "./pages/advantages/Advantages";
import Contact from "./pages/contact/Contact";
import Consulting from "./pages/consulting/Consulting";

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
        <Route path="/advantages" element={<Advantages />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Teacher_admin" element={<Teacher_admin />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};
export default App;
