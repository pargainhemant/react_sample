import React, {Component } from 'react'
import UserList from './userList';
import ChatHistory from './chatHistory';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
class MenuCapsion extends Component {
    render() {
      return (
        
          <Router>
            <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users_list">Users</Link>
              </li>
              <li>
                <Link to="/chat-history">ChatHistory</Link>
              </li>
            </ul>
            <hr />
            <Route exact path="/" component={UserList} />
            <Route  path="/users_list" component={UserList} />
            <Route  path="/chat-history" component={ChatHistory} />
            </div>
          </Router>
        
      )
    }
  }
export default MenuCapsion;


















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































