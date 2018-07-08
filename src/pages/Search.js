import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookShelf from "../components/BookShelf";
import Snackbar from "@material-ui/core/Snackbar";

export default class Search extends Component {
  state = {
    query: null,
    books: [],
    showLoading: false,
    openSnack: false,
    snackMessage: ""
  };

  searchBooks = event => {
    const query = event.target.value;
    this.setState({
      query
    });
    if (!query) {
      this.setState({
        books: []
      });
      return false;
    }
    this.setState({ showLoading: true });
    BooksAPI.search(this.state.query, 20).then(books => {
      if (!books || !books.length) {
        books = [];
      }
      this.setState({
        books,
        showLoading: false
      });
    });
  };

  changeMethodStatus = (book, shelf) => {
    this.setState({ showLoading: true });
    BooksAPI.update(book, shelf).then(() => {
      this.setState({
        showLoading: false,
        openSnack: true,
        snackMessage: "Book added sucessfully!"
      });
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              onChange={this.searchBooks}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <div className="container-loading-books">
            <BookShelf
              books={this.state.books}
              onChangeStatus={this.changeMethodStatus}
              showLoading={this.state.showLoading}
            />
          </div>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={this.state.openSnack}
          message={<span>{this.state.snackMessage}</span>}
        />
      </div>
    );
  }
}
