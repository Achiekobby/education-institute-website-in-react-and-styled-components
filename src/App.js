import GlobalStyle from "./global/GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path="/form" exact component={Form}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
