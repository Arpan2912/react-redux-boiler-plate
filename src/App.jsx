import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './router/Routes';
import reactLogo from './assets/React-icon.png';
import { Provider } from 'react-redux';
import store from "./store";


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <main className="container">
           {/* place heade code here */}
            <ul className="left">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <Routes />
            {/* place footer code here */}
          </main>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;

