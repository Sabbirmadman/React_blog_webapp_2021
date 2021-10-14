import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Topbar from "./componnent/topbar/Topbar";
import Topbar2 from "./componnent/topbar2/Topbar2";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  const user = true;
  return (
    <Router>
      {/* <Topbar /> */}
      <Topbar2 />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
