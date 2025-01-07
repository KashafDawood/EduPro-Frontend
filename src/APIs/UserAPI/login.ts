import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}

// interface LoginResponse {
//   data: {
//     accessToken: string;
//     refreshToken: string;
//   };
// }

export default async function userLogin(data: LoginData) {
  const query = `
    mutation {
      signIn(signInInput: { email: "${data.email}", password: "${data.password}" }) {
        accessToken
        refreshToken
      }
    }
  `;

  const response = await axios.post(
    "http://localhost:3000/graphql",
    { query },
    { withCredentials: true }
  );
  return response.data;
}
