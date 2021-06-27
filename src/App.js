import Home from "./pages/home";
import CoinDetails from "./pages/coinDetail";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/coin/:coinID">
          <CoinDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
