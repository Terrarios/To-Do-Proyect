import { Fragment } from "react";
import { Route } from "react-router";
import Header from "./components/Layout/Header";

import Home from "./pages/Home";
import Pendientes from "./pages/Pendientes";
import Realizadas from "./pages/Realizadas";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Route path="resumen">
          <Home />
        </Route>
        <Route path="toDo">
          <Pendientes />
        </Route>
        <Route path="completed">
          <Realizadas />
        </Route>
      </main>
    </Fragment>
  );
};
export default App;
