import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Topbar from "./componnent/topbar/Topbar";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import Topbar2 from "./componnent/topbar2/Topbar2";
import Login2 from "./pages/login_reg2/login/Login";
import Register2 from "./pages/login_reg2/register/Register";

// test
import Test from "./componnent/test/Test";

function App() {
  const user = false;
  return (
    <>
      <Router>
        {/* <Topbar /> */}
        <Topbar2 />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/test">
            <Login2 />
          </Route>

          <Route path="/reg2">
            <Register2 />
          </Route>

          <Route path="/register">{user ? <Home /> : <Register2 />}</Route>
          <Route path="/login">{user ? <Home /> : <Login2 />}</Route>
          <Route path="/write">{user ? <Write /> : <Register2 />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Register2 />}</Route>

          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
