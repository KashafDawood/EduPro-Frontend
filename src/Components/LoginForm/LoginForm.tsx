import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LOGIN_MUTATION } from "@/APIs/UserAPI/login";
import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";
import AlertError from "@/components/Alerts/errorAlert";
import { useMutation } from "@apollo/client/react/hooks";
import { Loader2 } from "lucide-react";

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
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const { setToken } = useUserStore();
  const [login, { error: loginError, loading, data: loginData }] =
    useMutation(LOGIN_MUTATION);

  useEffect(() => {
    if (loginData?.signIn) {
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

  const onSubmit: SubmitHandler<FormFields> = (formData) => {
    try {
      setError(null);
      login({ variables: formData });
    } catch (error) {
      setError(
        (error as Error).message ??
          "Something went wrong, please try again later."
      );
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {errors.root?.message && <AlertError>{errors.root.message}</AlertError>}
      <div className="mb-4">
        <Input
          {...register("email")}
          type="email"
          placeholder="Email"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.email && "border-red-500"
          }`}
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
      </div>
      <div className="mb-4">
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.password && "border-red-500"
          }`}
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
      </div>
      <Button
        disabled={loading}
        type="submit"
        className="w-full py-3 text-md font-semibold rounded-md bg-primary text-white"
      >
        {loading && <Loader2 className="animate-spin" />}
        {loading ? "Loading..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
