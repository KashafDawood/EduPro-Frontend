import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import { onError } from "@apollo/client/link/error";
import { REFRESH_TOKEN } from "@/APIs/AuthAPI/refreshAccessToken";
import { useUserStore } from "@/store/userStore";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
  credentials: "include",
});

const refreshToken = async () => {
  const userid = useUserStore.getState()._id;
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  if (!userid) return;

  const { data } = await client.mutate({
    mutation: REFRESH_TOKEN,
    variables: { _id: userid },
  });

  if (data && data.refreshAccessToken) {
    useUserStore.getState().setToken(data.refreshAccessToken.accessToken);
  }
};

const authLink = setContext(async (_, { headers }) => {
  const token = useUserStore.getState().token;

  if (!token) {
    await refreshToken();
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// const errorLink = onError(
//   ({ graphQLErrors, networkError, operation, forward }) => {
//     if (graphQLErrors) {
//       for (let err of graphQLErrors) {
//         if (err.extensions.code === "UNAUTHENTICATED") {
//           return refreshToken().then(() => {
//             const token = useUserStore.getState().token;
//             operation.setContext(({ headers = {} }) => ({
//               headers: {
//                 ...headers,
//                 authorization: token ? `Bearer ${token}` : "",
//               },
//             }));
//             return forward(operation);
//           });
//         }
//       }
//     }
//   }
// );

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
