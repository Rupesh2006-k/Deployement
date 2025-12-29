import { useEffect, useState } from "react";
import axiosInstance from "../config/axiosInstance";
import { isLogin } from "../features/AuthSlice";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axiosInstance.get("/user/auth/current-user");
        const userExists = !!data?.user;
        setIsAuthenticated(userExists);
        if (userExists) dispatch(isLogin(data.user));
      } catch (err) {
        console.error(err);
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, [dispatch]);

  if (isAuthenticated === null) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
};
export default ProtectedRoute;