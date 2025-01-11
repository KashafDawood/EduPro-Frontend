import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LOGIN_MUTATION } from "@/APIs/UserAPI/login";
import { useEffect } from "react";
import { useMutation } from "@apollo/client/react/hooks";
import { useUserStore } from "@/store/userStore";
import AlertError from "@/components/Alerts/errorAlert";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

interface LoginFormProps {
  setError: (error: string | null) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setError }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const { setToken } = useUserStore();
  const [login, { error: loginError, data: loginData }] =
    useMutation(LOGIN_MUTATION);

  useEffect(() => {
    if (loginData) {
      const { accessToken } = loginData.signIn;
      setToken(accessToken);
      reset();
      setError(null);
    }
  }, [loginData, reset, setToken, setError]);

  useEffect(() => {
    if (loginError) {
      setError(
        loginError.message ?? "Something went wrong, please try again later."
      );
    }
  }, [loginError, setError]);

  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    try {
      await login({ variables: formData });
    } catch (error) {
      setError(
        (error as Error).message ??
          "Something went wrong, please try again later."
      );
    }
  };

  return (
    <form className="m-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {errors.root?.message && <AlertError>{errors.root.message}</AlertError>}
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
  );
};

export default LoginForm;
