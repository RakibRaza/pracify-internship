import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { theme } from "./theme";
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <CssBaseline />
      </Router>
    </ThemeProvider>
  );
}

export default App;
