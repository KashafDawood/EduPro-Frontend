import axios from "axios";

export default async function logout() {
  const mutation = `
    mutation {
      logout
    }
  `;

  const response = await axios.post(
    "http://localhost:3000/graphql",
    { query: mutation },
    { withCredentials: true }
  );
  return response.data;
}
