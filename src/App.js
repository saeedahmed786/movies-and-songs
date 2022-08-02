import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Movie } from "./pages/Movies/Movie";
import { Song } from "./pages/Song/Song";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Song} />
          <Route exact path="/movie" component={Movie} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
