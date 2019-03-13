import React, {Component } from 'react'
import UserList from './userList';
import ChatHistory from './chatHistory';
import UserProfile from './userProfile';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
class MenuCapsion extends Component {
    render() {
      return (
          <Router>
            <div id="menu">
            <ul className="header-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/users_profile">Users List</Link>
                </li>
                <li>
                  <Link to="/wishList-users">WishList Users</Link>
                </li>
                <li>
                  <Link to="/bench-users">Bench Users</Link>
                </li>
            </ul>
            <hr />
            <Route exact path="/" component={UserList} />
            <Route  path="/users_profile" component={UserProfile} />
            <Route  path="/chat-history/:id" component={ChatHistory} />
            <Route  path="/wishList-users" component={UserProfile} />
            <Route  path="/bench-users" component={UserProfile} />
            </div>
          </Router>
        
      )
    }
  }
export default MenuCapsion;



















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































