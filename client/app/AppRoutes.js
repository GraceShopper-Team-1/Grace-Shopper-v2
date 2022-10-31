import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
	AllProducts,
	AuthForm,
	Home,
	SingleProduct,
	Cart,
	ProductsDashboard,
	AddProduct,
	EditProduct,
} from "../features";
import { me } from "./store";

/**
 * COMPONENT
 */

const AppRoutes = () => {
	const isLoggedIn = useSelector((state) => !!state.auth.me.id);
	const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(me());
	}, []);

	return (
		<div>
			{isLoggedIn && isAdmin ? (
				<Routes>
					<Route path="/*" element={<Home />} />
					<Route to="/home" element={<Home />} />
					<Route path="/products" element={<AllProducts />} />
					<Route path="/products/:productId" element={<SingleProduct />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/admin/home" element={"admin home!"}></Route>
					<Route path="/admin/products" element={<ProductsDashboard />}></Route>
					<Route path="/admin/products/add" element={<AddProduct />}></Route>
					<Route
						path="/admin/products/:productId"
						element={<EditProduct />}
					></Route>
					<Route path="/admin/users" element={"users dashboard!"}></Route>
					<Route path="/orders" element={"orders!"}></Route>
				</Routes>
			) : isLoggedIn ? (
				<Routes>
					<Route path="/*" element={<Home />} />
					<Route to="/home" element={<Home />} />
					<Route path="/products" element={<AllProducts />} />
					<Route path="/products/:productId" element={<SingleProduct />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			) : (
				<Routes>
					<Route path="/*" element={<Home />} />
					<Route to="/home" element={<Home />} />
					<Route
						path="/login"
						element={<AuthForm name="login" displayName="Login" />}
					/>
					<Route
						path="/signup"
						element={<AuthForm name="signup" displayName="Sign Up" />}
					/>
					<Route path="/products" element={<AllProducts />} />
					<Route path="/products/:productId" element={<SingleProduct />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			)}
		</div>
	);
};

export default AppRoutes;
