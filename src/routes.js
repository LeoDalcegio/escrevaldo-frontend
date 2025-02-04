import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import SearchPage from "./pages/SearchPage";
import WritePage from "./pages/WritePage";

const history = createBrowserHistory();

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);

history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/*" component={WritePage} />
      </Switch>
    </BrowserRouter>
  );
}
