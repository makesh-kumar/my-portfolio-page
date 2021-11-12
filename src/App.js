import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Others from "./components/Others";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Content /> */}
        {/* <About /> */}
        {/* <Skills /> */}
        {/* <Work /> */}
        {/* <Others/> */}
        <Switch>
          <Route path="/" exact component={Content} />
          <Route path="/about" exact component={About} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/work" exact component={Work} />
          <Route path="/others" exact component={Others} />
          <Route path="**" exact component={Content} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
