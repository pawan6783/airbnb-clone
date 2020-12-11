import '../stylesheets/App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import LoginHome from './LoginHome';
import Details from './Details';
import Search from './Search';

function App() {
  return (
    <div className="app">
      <Router>

        <Switch>
          <Route exact path="/search-details/:id" component={Details}>
          </Route>

          <Route exact path="/search" component={SearchPage}>
          </Route>

          <Route exact path="/search-info" component={Search}>
          </Route>

          {/* <Route exact path="/signUp" component={SignUp}>
          </Route>

          <Route exact path="/logIn" component={Login}>
          </Route> */}

          <Route exact path="/login-home" component={LoginHome}>
          </Route>

          <Route exact path="/" component={Home}>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
