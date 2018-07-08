import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              MyReads
            </Typography>
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </div>
    );
  }
}

export default BooksApp;
