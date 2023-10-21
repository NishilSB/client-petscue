import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/userPage/ProfilePage";
import RescueAdoptPage from "./pages/userPage/RescueAdoptPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/rescue" element={<RescueAdoptPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
