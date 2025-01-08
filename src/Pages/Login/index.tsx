import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import userLogin from "@/APIs/UserAPI/login";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import AlertSuccess from "@/components/Alerts/successAlert";
import AlertError from "@/components/Alerts/errorAlert";

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

  const { isAuth, setAuth } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate("/dashboard");
  }, [isAuth, navigate]);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await userLogin(data);
      if (response.data) {
        console.log(response.data.signIn);
        setAuth(true);
        reset();
      } else {
        throw new Error(response.errors[0].message);
      }
    } catch (error) {
      console.error(error ?? "An error occurred");
      setError("root", { message: (error as Error).message });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isAuth && <AlertSuccess>You Logged In Successfully</AlertSuccess>}
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
