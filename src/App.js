import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import "./assets/css/styles.css";
import "./index.css";
import 'animate.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbars/Navbar.jsx"
import Home from "./Pages/Landing/Home"
import Tutorials from "./Pages/Tutorials/Tutorials"
import Courses from "./Pages/Courses/Courses.jsx"
import About from "./Pages/About"
import Services from "./Pages/Services/Services.jsx"
import Contact from "./Pages/Contact"
import ErrorPage from "./Pages/ErrorPage"
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Profile';
import Programs from './Pages/Programs';


function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

function AppRoutes() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/login" && pathname !== "/register" && pathname !== "/dashboard" && pathname !== "/dashboard/profile" && pathname !== "/dashboard/programs" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Profile />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/programs" element={<Programs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
