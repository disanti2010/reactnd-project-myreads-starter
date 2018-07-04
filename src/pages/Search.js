import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";

export default class Search extends Component {
  state = {
    query: null,
    books: []
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

    BooksAPI.search(this.state.query, 20).then(books => {
      this.setState({
        books
      });
    });
  };

  changeMethodStatus = (book, shelf) => {
    BooksAPI.update(book, shelf);
  };

  render() {
    const validateBooksPresence = () => {
      return this.state.books && !this.state.books.error;
    };

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
          <ol className="books-grid">
            {validateBooksPresence() &&
              this.state.books.map((book, index) => {
                return (
                  <li key={index}>
                    <Book
                      book={book}
                      onChangeStatus={this.changeMethodStatus}
                    />
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    );
  }
}
