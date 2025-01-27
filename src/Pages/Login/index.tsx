import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AlertSuccess from "@/components/Alerts/successAlert";
import AlertError from "@/components/Alerts/errorAlert";
import useAuth from "@/hooks/useAuth";
import { useUserStore } from "@/store/userStore";
import LoginForm from "@/Pages/Login/Form/LoginForm";

const Login: React.FC = () => {
  const { isAuth } = useUserStore();
  const navigate = useNavigate();
  const { message: authSuccess } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuth) navigate("/dashboard");
  }, [isAuth, navigate]);

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {isAuth && <AlertSuccess>{authSuccess}</AlertSuccess>}
            {error && <AlertError>{error}</AlertError>}
            <h2 className="mb-4 text-center text-4xl font-bold">Login</h2>
            <LoginForm setError={setError} />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-green-100 lg:block">
        <img
          src="images/login-bg.png"
          alt="Login Background"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Login;
