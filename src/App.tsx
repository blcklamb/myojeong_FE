import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dalnara from "./layouts/Dalnara";
import Story from "./layouts/Story";
import GlobalStyle from "styles/GlobalStyle";
import { IconLoader } from "components/IconLoader";
import Songpyeon from "components/songpyeon/Songpyeon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Start from "components/start/Start";

function App() {
  const queryClient = new QueryClient();
  // TODO: 소원 작성 데이터 react-query로 저장 후 Songpyeon에 props로 넘기기
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <IconLoader />
        <Routes>
          <Route path="story" Component={Story} />
          <Route path="songpyeon" Component={Songpyeon}>
            <Route path=":wishId" />
          </Route>
          <Route path="dalnara" Component={Dalnara} />
          <Route path="" Component={Start} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
