import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "./components/auth/AuthLayout";
import Login from "./components/auth/Login";
import PasswordReset from "./components/auth/PasswordReset";
import Register from "./components/auth/Register";
import Verification from "./components/auth/Verification";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Flowers from "./components/MainFlow/flowers/Flowers";
import FlowerDetail from "./components/MainFlow/flowerDetail/FlowerDetail";
import Order from "./components/pages/Order";
import Favorite from "./components/pages/Favorite";
import Cart from "./components/cart/Cart";
import NotFoundPage from "./components/pages/NotFoundPage";
import Layout from "./components/layout/Layout";
import OrderDetail from "./components/order/OrderDetail";
import PaymentDetail from "./components/payment/PaymentDetail";
import Profile from "./components/profile/Profile";
import { Toaster } from "sonner";

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/flower" element={<Flowers />} />
          <Route path="/flower/:id" element={<FlowerDetail />} />
          <Route path="orders" element={<Order />} />
          <Route path="order/:id" element={<OrderDetail />} />
          <Route path="/wishlist" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PaymentDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="verification" element={<Verification />} />
          <Route path="password-reset" element={<PasswordReset />} />
        </Route>

        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>

      <ToastContainer autoClose={3000} hideProgressBar />
    </Router>
  );
}

export default App;
