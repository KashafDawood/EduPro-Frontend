import PasswordInput from "@/components/custom/passwordInput";
import EmailInput from "@/components/custom/emailInput";
import { Button } from "@/components/ui/button";

const Login: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen m-12 gap-8">
      <div className="flex justify-center items-center w-1/2">
        <img
          src="images/login-bg.png"
          alt="Login Background"
          className="max-w-90"
        />
      </div>
      <div className="w-1/2 space-y-4 p-12 text-md">
        <h2 className="text-3xl text-center font-bold text-black">Login</h2>
        <form className="m-4 p-12 space-y-4">
          <EmailInput className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <PasswordInput className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <Button className="w-full py-5 text-md rounded-md">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
