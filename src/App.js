import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </div>
    );
  }
}

export default BooksApp;
