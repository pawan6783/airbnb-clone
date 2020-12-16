import React from 'react';
import '../stylesheets/App.css';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import Details from './Details';
import Search from './Search';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';

class App extends React.Component{
    render(){
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
        
                   {/* <Route exact path="/sign-up" component={Register}>
                  </Route>
        
                  <Route exact path="/login" component={Login}>
                  </Route> 
         */}
              
                  <Route exact path="/" component={Home}>
                  </Route>

                  <Route exact path="/profile" component={Profile}>
                  </Route>
        
                </Switch>
                <Footer />
              </Router>
            </div>
          );
    }
  
}

export default App;

