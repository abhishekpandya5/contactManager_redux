import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Layout/Header";
import Contact from "./components/Contacts/Contact";
import AddContact from "./components/Contacts/AddContact";
import EditContact from "./components/Contacts/EditContact";

import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import Test from "./components/Layout/Test/Test";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contact} />
                <Route extact path="/contacts/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route path="/test" component={Test} />
                <Route path="/contacts/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
