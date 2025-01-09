import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import getMe from "@/APIs/UserAPI/getMe";

const useAuth = () => {
  const { setAuth, setUser, token } = useUserStore();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getMe(token);
        if (user && user.data && user.data.me) {
          setUser(user.data.me);
          setAuth(true);
          setError(null);
        } else {
          throw new Error("Unauthorized");
        }
      } catch (error) {
        setAuth(false);
        setError((error as Error).message);
      }
    };

    checkAuth();
  }, [token, setAuth, setUser]);

  return { message: "You Logged In Successfully!", error };
};

export default useAuth;
