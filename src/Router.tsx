import { Navigate, Route, Routes } from "react-router-dom";
import Story from "layouts/Story";
import Dalnara from "layouts/Dalnara";
import Credit from "layouts/Credit";
import Songpyeon from "components/songpyeon/Songpyeon";
import Start from "components/start/Start";

const Router = () => {
  return (
    <Routes>
      <Route path="story" Component={Story} />
      <Route path="songpyeon" Component={Songpyeon}>
        <Route path=":wishId">
          <Route path=":pw" />
        </Route>
      </Route>
      <Route path="dalnara" Component={Dalnara} />
      <Route path="" Component={Start} />
      <Route path="credit" Component={Credit} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
