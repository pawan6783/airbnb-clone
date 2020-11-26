import '../stylesheets/App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPage from './SearchPage';
import LogIn from './LogIn';
import SignUp from './SignUp';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>

          <Route path="/signUp">
            <SignUp/>
          </Route>

          <Route path="/logIn">
            <LogIn/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
          
        </Switch>
        <Footer/>
      </Router>
     </div>
  );
}

export default App;
