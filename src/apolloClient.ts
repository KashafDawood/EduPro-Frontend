import { createHttpLink } from "@apollo/client/link/http";
import { setContext } from "@apollo/client/link/context";
import { ApolloLink } from "@apollo/client/link/core";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";
import { REFRESH_TOKEN } from "@/APIs/AuthAPI/refreshAccessToken";
import { useUserStore } from "@/store/userStore";
import { Observable } from "@apollo/client/core";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
  credentials: "include",
  fetchOptions: {
    credentials: "include",
  },
});

const refreshToken = async () => {
  const userid = useUserStore.getState()._id;
  if (!userid) return;

  try {
    const client = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
    });

    const { data } = await client.mutate({
      mutation: REFRESH_TOKEN,
      variables: { _id: userid },
    });

    if (data && data.refreshAccessToken) {
      useUserStore.getState().setToken(data.refreshAccessToken.accessToken);
    } else {
      console.error("Failed to refresh token: No data returned");
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
  }
};

const authLink = setContext(async (_, { headers }) => {
  let token = useUserStore.getState().token;

  if (!token) {
    await refreshToken();
    token = useUserStore.getState().token;
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          return new Observable((observer) => {
            refreshToken()
              .then(() => {
                const token = useUserStore.getState().token;
                operation.setContext(({ headers = {} }) => ({
                  headers: {
                    ...headers,
                    authorization: token ? `Bearer ${token}` : "",
                  },
                }));
                forward(operation).subscribe(observer);
              })
              .catch((error) => observer.error(error));
          });
        }
      }
    }

    if (networkError) {
      console.log("Network error:", networkError);
    }
  }
);

const client = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
