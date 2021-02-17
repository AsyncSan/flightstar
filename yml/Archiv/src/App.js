import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/landing";

import { Route, BrowserRouter } from "react-router-dom";

import Contact from "./components/contact";
import Mailsent from "./components/mailsent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <NavBar />
          </div>

          <Route
            exact
            path="/"
            component={() => (
              <div>
                <Landing />
              </div>
            )}
          />
          <Route
            exact
            path="/contact"
            component={() => (
              <div>
                <Contact />
              </div>
            )}
          />
          <Route
            exact
            path="/mailsent"
            component={() => (
              <div>
                <Mailsent />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
