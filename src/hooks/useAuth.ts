import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";
import { GET_ME } from "@/APIs/UserAPI/getMe";
import { useMutation } from "@apollo/client/react/hooks";

const useAuth = () => {
  const { setAuth, setUser, token } = useUserStore();
  const [getMe, { error, data }] = useMutation(GET_ME);

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        await getMe({ variables: { accessToken: token } });
      }
    };
    fetchData();
  }, [token, getMe]);

  useEffect(() => {
    const checkAuth = () => {
      if (data) {
        setUser(data.me);
        setAuth(true);
      } else {
        setAuth(false);
      }
    };

    checkAuth();
  }, [token, setAuth, setUser, data, error]);

  return { message: "You Logged In Successfully!", error };
};

export default useAuth;
