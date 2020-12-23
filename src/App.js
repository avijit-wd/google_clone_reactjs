import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
