import "./App.css";
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
import OrderLayout from "./components/order/OrderLayout";
import Order from "./components/pages/Order";
import Favorite from "./components/pages/Favorite";
import Cart from "./components/cart/Cart";
import NotFoundPage from "./components/pages/NotFoundPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Əsas səhifələr Layout içində olacaq */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/flower" element={<Flowers />} />
          <Route path="/flower/:id" element={<FlowerDetail />} />
          <Route element={<OrderLayout />}>
            <Route path="orders" element={<Order />} />
          </Route>
          <Route path="/wishlist" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        {/* Auth səhifələri ayrıca Layout istifadə edir */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="verification" element={<Verification />} />
          <Route path="password-reset" element={<PasswordReset />} />
        </Route>

        {/* Not Found səhifəsi fərqli Layout istifadə edir */}
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
