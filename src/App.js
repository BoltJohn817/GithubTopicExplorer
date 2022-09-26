import logo from "./logo.svg";
import "./App.css";
import { client } from "./apollo/client";
import { ApolloProvider } from "@apollo/client";
import { Header, ResultView } from "./components";
import { SearchContextProvider } from "./store/SearchContext";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <SearchContextProvider>
          <Header />
          <ResultView />
        </SearchContextProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
