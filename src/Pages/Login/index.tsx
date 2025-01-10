import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LOGIN_MUTATION } from "@/APIs/UserAPI/login";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import AlertSuccess from "@/components/Alerts/successAlert";
import AlertError from "@/components/Alerts/errorAlert";
import useAuth from "@/hooks/useAuth";
import { useUserStore } from "@/store/userStore";
import { useMutation } from "@apollo/client/react/hooks";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const { isAuth, setToken } = useUserStore();
  const navigate = useNavigate();
  const { message: authSuccess, error: authError } = useAuth();
  const [login, { error: loginError, data: loginData }] =
    useMutation(LOGIN_MUTATION);

  useEffect(() => {
    if (isAuth) navigate("/dashboard");
  }, [isAuth, navigate]);

  useEffect(() => {
    if (loginData) {
      const { accessToken } = loginData.signIn;
      setToken(accessToken);
      reset();
    }
  }, [loginData, reset, setToken]);

  useEffect(() => {
    if (loginError) {
      setError("root", {
        message:
          loginError.message ?? "Something went wrong, please try again later.",
      });
    }
  }, [loginError, setError]);

  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    try {
      await login({ variables: formData });
    } catch (error) {
      setError("root", {
        message:
          (error as Error).message ??
          authError?.message ??
          "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isAuth && <AlertSuccess>{authSuccess}</AlertSuccess>}
      {!isAuth && errors.root?.message && (
        <AlertError>{errors.root.message}</AlertError>
      )}
      <div className="flex justify-center items-center w-1/2 bg-green-100">
        <img
          src="images/login-bg.png"
          alt="Login Background"
          className="max-w-90"
        />
      </div>
      <div className="w-1/2 space-y-4 p-20 text-md">
        <h2 className="text-3xl text-center font-bold text-black">Login</h2>
        <form className="m-4 p-12 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email")}
            type="email"
            placeholder="Email"
            className={`input ${errors.email && "border-red-500"}`}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
            className={`input ${errors.password && "border-red-500"}`}
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-5 text-md rounded-md"
          >
            {isSubmitting ? "Loading..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
