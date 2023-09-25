import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dalnara from "./layouts/Dalnara";
import Story from "./layouts/Story";
import GlobalStyle from "styles/GlobalStyle";
import { IconLoader } from "components/IconLoader";
import Songpyeon from "components/songpyeon/Songpyeon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <IconLoader />
        <Routes>
          <Route path="/story" Component={Story} />
          <Route path="/songpyeon?/:wishId" Component={Songpyeon} />
          <Route path="/dalnara" Component={Dalnara} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
