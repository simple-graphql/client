import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

// components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Hello There</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
