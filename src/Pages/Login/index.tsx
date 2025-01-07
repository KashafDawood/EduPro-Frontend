// import PasswordInput from "@/components/custom/passwordInput";
// import EmailInput from "@/components/custom/emailInput";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

type FormFields = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center w-1/2 bg-blue-100">
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
            className="input"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="input"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
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
