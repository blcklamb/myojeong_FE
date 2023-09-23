import { Route } from "react-router-dom";
import "./App.css";
import Dalnara from "./layouts/Dalnara";
import Story from "./layouts/Story";

function App() {
  return (
    <div className="App">
      <Route path="/story" Component={Story} />
      <Route path="/dalnara" Component={Dalnara} />
    </div>
  );
}

export default App;
