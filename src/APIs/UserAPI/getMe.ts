import axios from "axios";

interface MeResponse {
  data: {
    me: {
      _id: string;
      email: string;
      name: string;
    };
  };
}

export default async function getMe(accessToken: string): Promise<MeResponse> {
  const query = `
    mutation {
      me(accessToken: "${accessToken}") {
        _id
        email
        name
      }
    }
  `;

  const response = await axios.post<MeResponse>(
    "http://localhost:3000/graphql",
    { query },
    { withCredentials: true }
  );
  return response.data;
}
