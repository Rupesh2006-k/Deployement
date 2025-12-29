import { useEffect, useState } from "react";
import axiosInstance from "../config/axiosInstance";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

const PublicRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  let dispatch = useDispatch();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axiosInstance.get("/user/auth/current-user");
        setIsAuthenticated(!!res.data?.user);
        dispatch(res.data.user);
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;

  if (isAuthenticated) {
    return <Navigate to="/main" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
