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
import Flowers from "./components/MainFlow/flowers/Flowers";
import { Suspense } from "react";
import FlowerDetail from "./components/MainFlow/flowerDetail/FlowerDetail";
import OrderLayout from "./components/order/OrderLayout";
import Order from "./components/pages/Order";
import Favorite from "./components/pages/Favorite";

function App() {
  return (
    <Router>
      <main className="w-[90%] mx-auto flex-1 max-w-[1164px] min-h-[calc(100vh-84px)]">
        <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="verification" element={<Verification />} />
              <Route path="password-reset" element={<PasswordReset />} />
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="/flower" element={<Flowers />} />
            <Route path="/flower/:id" element={<FlowerDetail />} />

            <Route element={<OrderLayout />}>
              <Route path="orders" element={<Order />} />
            </Route>

            <Route path="/wishlist" element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
