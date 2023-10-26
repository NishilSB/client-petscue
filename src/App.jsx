import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/userPage/ProfilePage";
import RescuePage from "./pages/userPage/RescuePage";
import ExpertSignupPage from "./pages/expertPage/ExpertSignupPage";
import ExpertHomePage from "./pages/expertPage/ExpertHomePage";
import AdminLoginPage from "./pages/adminPage/AdminLoginPage";




const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/rescue" element={<RescuePage />} />

          <Route path="/expert" element={<ExpertSignupPage/>} />
          <Route path="/expert/home" element={<ExpertHomePage/>} />

          <Route path="/admin" element={<AdminLoginPage/>} />
          {/* <Route path="/admin/home" element={<AdminHomePage/>} /> */}







        </Routes>
      </Router>
    </div>
  );
};

export default App;
