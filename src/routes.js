import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import WritePage from "./pages/WritePage";

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
