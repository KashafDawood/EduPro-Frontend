import { Outlet, useNavigate } from "react-router";
import { useUserStore } from "../store/userStore";
import { useEffect } from "react";

function AuthLayout() {
  const navigate = useNavigate();
  const { isAuth } = useUserStore();

  useEffect(() => {
    if (isAuth) navigate("/dashboard");
  }, [isAuth, navigate]);

  return (
    <>
      <header className="bg-green-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-center">
          <h1 className="text-4xl font-bold">EduPro</h1>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default AuthLayout;
