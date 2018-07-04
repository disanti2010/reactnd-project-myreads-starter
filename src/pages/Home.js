import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";

export default class Home extends Component {
  state = {
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: []
  };

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      const currentlyReadingBooks = books.filter(book => {
        return book.shelf === "currentlyReading";
      });

      const readBooks = books.filter(book => {
        return book.shelf === "read";
      });

      const wantToReadBooks = books.filter(book => {
        return book.shelf === "wantToRead";
      });

      this.setState({
        currentlyReadingBooks,
        readBooks,
        wantToReadBooks
      });
    });
  };

  changeMethodStatus = (book, selectedValue) => {
    BooksAPI.update(book, selectedValue).then(() => {
      this.getAllBooks();
    });
  };

  componentDidMount() {
    this.getAllBooks();
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.currentlyReadingBooks &&
                    this.state.currentlyReadingBooks.map((book, index) => {
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
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.wantToReadBooks &&
                    this.state.wantToReadBooks.map((book, index) => {
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
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books" />
              <ol className="books-grid">
                {this.state.readBooks &&
                  this.state.readBooks.map((book, index) => {
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
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}
