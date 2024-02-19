import "./App.css";
import GlobalStyle from "styles/GlobalStyle";
import { IconLoader } from "components/IconLoader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Router from "Router";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <IconLoader />
        <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;
