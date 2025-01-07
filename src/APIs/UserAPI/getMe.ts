import axios from "axios";

interface MeResponse {
  data: {
    me: {
      id: string;
      email: string;
      name: string;
      accessToken: string;
    };
  };
}

export default async function getMe(): Promise<MeResponse> {
  const query = `
    query {
      me {
        id
        email
        name
        accessToken
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
