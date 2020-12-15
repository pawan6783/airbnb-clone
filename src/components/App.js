import React, { useState } from 'react';
import '../stylesheets/App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import Details from './Details';
import Search from './Search';
import Register from './Register';
import Login from './Login';
import LoginHome from './LoginHome';
import Profile from './Profile';

class App extends React.Component{

  // constructor(props) {
  //   super(props);
  //   this.logOut = this.logOut.bind(this);

  //   this.state = {
  //     showModeratorBoard: false,
  //     showAdminBoard: false,
  //     currentUser: undefined,
  //   };
  // }

  // componentDidMount() {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     this.setState({
  //       currentUser: user,
  //       showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
  //       showAdminBoard: user.roles.includes("ROLE_ADMIN"),
  //     });
  //   }
  // }

  // logOut() {
  //   AuthService.logout();
  // }

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
        
                   <Route exact path="/sign-up" component={Register}>
                  </Route>
        
                  <Route exact path="/login" component={Login}>
                  </Route> }
        
                  <Route exact path="/login-home" component={LoginHome}>
                  </Route>
        
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


// import React, { Component } from "react";
// import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";

// import AuthService from "./AuthService";

// import Login from "./Login.component";
// import Register from "./Register";
// import Home from "./Home";
// import Profile from "./Profile";
// import BoardUser from "./BoardUser";
// import BoardModerator from "./BoardModerator";
// import BoardAdmin from "./BoardAdmin";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.logOut = this.logOut.bind(this);

//     this.state = {
//       showModeratorBoard: false,
//       showAdminBoard: false,
//       currentUser: undefined,
//     };
//   }

//   componentDidMount() {
//     const user = AuthService.getCurrentUser();

//     if (user) {
//       this.setState({
//         currentUser: user,
//         showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
//         showAdminBoard: user.roles.includes("ROLE_ADMIN"),
//       });
//     }
//   }

//   logOut() {
//     AuthService.logout();
//   }

//   render() {
//     const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

//     return (
//       <div>
//          <Router>
//         <nav className="navbar navbar-expand navbar-dark bg-dark">
//           <Link to={"/"} className="navbar-brand">
//             bezKoder
//           </Link>
//           <div className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to={"/home"} className="nav-link">
//                 Home
//               </Link>
//             </li>

//             {showModeratorBoard && (
//               <li className="nav-item">
//                 <Link to={"/mod"} className="nav-link">
//                   Moderator Board
//                 </Link>
//               </li>
//             )}

//             {showAdminBoard && (
//               <li className="nav-item">
//                 <Link to={"/admin"} className="nav-link">
//                   Admin Board
//                 </Link>
//               </li>
//             )}

//             {currentUser && (
//               <li className="nav-item">
//                 <Link to={"/user"} className="nav-link">
//                   User
//                 </Link>
//               </li>
//             )}
//           </div>

//           {currentUser ? (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/profile"} className="nav-link">
//                   {currentUser.username}
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <a href="/login" className="nav-link" onClick={this.logOut}>
//                   LogOut
//                 </a>
//               </li>
//             </div>
//           ) : (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/login"} className="nav-link">
//                   Login
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to={"/register"} className="nav-link">
//                   Sign Up
//                 </Link>
//               </li>
//             </div>
//           )}
//         </nav>

//         <div className="container mt-3">
         
//           <Switch>
//             <Route exact path={["/", "/home"]} component={Home} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/register" component={Register} />
//             <Route exact path="/profile" component={Profile} />
//             <Route path="/user" component={BoardUser} />
//             <Route path="/mod" component={BoardModerator} />
//             <Route path="/admin" component={BoardAdmin} />
//           </Switch>
          
         
//         </div>
//         </Router>
//       </div>
//     );
//   }
// }

// export default App;