import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import getMe from "@/APIs/UserAPI/getMe";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { setAuth, setUser } = useUserStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getMe();
        console.log(user);
        console.log(user.data.me);
        if (user) {
          setUser(user.data.me);
          setIsAuth(true);
          setAuth(true);
        } else {
          setIsAuth(false);
          setAuth(false);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setIsAuth(false);
        setAuth(false);
      }
    };

    checkAuth();
  }, [setAuth, setUser]);

  return isAuth;
};

export default useAuth;
