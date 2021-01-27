import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

export const UserContext = createContext();
export default function App() {

  const [foodId, setFoodId] = useState({})

  console.log("App.js", foodId)
  return (
    <UserContext.Provider value={[foodId, setFoodId]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
