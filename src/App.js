import React from "react";
import { AppContainer } from "./Styles/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  USER_DETAILS_ROUTE,
  POST_DETAILS_ROUTE,
  POSTLIST_ROUTE as HOME_PAGE_ROUTE,
} from "./Constant";
import PostsList from "./Component/PostsList";
import PostDetails from "./Component/PostDetails";
import UserDetails from "./Component/UserDetails";

function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path={HOME_PAGE_ROUTE} component={PostsList} />
          <Route path={POST_DETAILS_ROUTE} component={PostDetails} />
          <Route path={USER_DETAILS_ROUTE} component={UserDetails} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
