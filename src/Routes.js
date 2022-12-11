import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './Shopping-Cart-Class-Component-Using-Redux/App'

function Routing() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/App'>Shopping Cart Class Component Using Redux</Link>
          </li>
        </ul>
        <hr />
        <Route path='/App' component={App} />
      </div>
    </Router>
  )
}

export default Routing
