import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import allProducts from "../features/allProducts/allProducts";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import singleProduct from "../features/singleProduct/singleProduct";
import cart from "../features/cart/cart";
import { me } from "./store";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/products" element={<allProducts />} />
          <Route path="/products/:productId" element={<singleProduct />} />
          <Route path="/cart" element={<cart />} />
          <Route path="*" element={"Not found!"} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/products" element={<allProducts />} />
          <Route path="/products/:productId" element={<singleProduct />} />
          <Route path="/cart" element={<cart />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
