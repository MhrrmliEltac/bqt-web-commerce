import "./App.css";
import AuthLayout from "./components/auth/AuthLayout";
import Login from "./components/auth/Login";
import PasswordReset from "./components/auth/PasswordReset";
import Register from "./components/auth/Register";
import Verification from "./components/auth/Verification";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <div className="bg-[#F5EFE9] min-h-screen flex flex-col font-kodchasan">
        <main className="w-[90%] mx-auto flex-grow max-w-[1920px]">
          <Navbar />
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="verification" element={<Verification />} />
              <Route path="password-reset" element={<PasswordReset />} />
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
