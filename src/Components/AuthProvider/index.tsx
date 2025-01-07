// import getMe from "@/APIs/UserAPI/getMe";
// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext(undefined);

// export const useAuth = () => {
//   const authContext = useContext(AuthContext);

//   if(!authContext){
//     throw new Error('AuthContext must be used inside the AuthProvider');
//   }

//   return authContext
// };

// const AuthProvider = ({children}) =>{
//     const [token, setToken] = useState<string | undefined | null>(undefined);

//     useEffect(() => {
//         const fetchMe = async () =>{
//             try{
//                 const response = await getMe();
//                 setToken(response.data.me.accessToken)
//             }
//             catch{
//                 setToken(null)
//             }
//         };

//         fetchMe()
//     }, [])

// }
