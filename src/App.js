import { Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import AllMeetups from "./components/pages/AllMeetups";
import Favourits from "./components/pages/Favourits";
import NewMeetups from "./components/pages/NewMeetups";

function App() {
  return (
    <div>
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetups">
          <NewMeetups />
        </Route>
        <Route path="/favorites">
          <Favourits />
        </Route>
      </Switch>
      </Layout>
    </div>
    
  );
}

export default App;
