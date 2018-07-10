import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: [],
    showLoadingShelfBooks: false,
    openSnack: false,
    snackMessage: ""
  };

  getAllBooks = () => {
    this.setState({
      showLoadingShelfBooks: true
    });
    BooksAPI.getAll().then(books => {
      this.setState({
        showLoadingShelfBooks: false,
        books
      });
    });
  };

  changeMethodStatus = (book, selectedValue) => {
    BooksAPI.update(book, selectedValue).then(() => {
      this.setState({
        snackMessage: "Shelf changed successfully!",
        openSnack: true
      });
      this.getAllBooks();
    });
  };

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    const { books, showLoadingShelfBooks } = this.state;
    return (
      <div className="app">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              MyReads
            </Typography>
          </Toolbar>
        </AppBar>

        <Route
          exact
          path="/"
          render={() => {
            return (
              <Home
                books={books}
                onShelfChange={this.changeMethodStatus}
                showLoading={showLoadingShelfBooks}
              />
            );
          }}
        />

        <Route
          exact
          path="/search"
          render={() => {
            return (
              <Search
                booksShelf={books}
                onShelfChange={this.changeMethodStatus}
              />
            );
          }}
        />
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.openSnack}
          autoHideDuration={4000}
          onClose={() => {
            this.setState({ openSnack: false });
          }}
          message={<span>{this.state.snackMessage}</span>}
        />
      </div>
    );
  }
}

export default BooksApp;
