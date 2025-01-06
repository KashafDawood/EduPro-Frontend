import { Input } from "@/components/ui/input";

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
      <div className="w-1/2 space-y-4 p-12">
        <form>
          <Input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
