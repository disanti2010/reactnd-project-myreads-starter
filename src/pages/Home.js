import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookShelf from "../components/BookShelf";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

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
        <div className="list-books-content">
          <div>
            <BookShelf
              shelfTitle="Currenty Reading"
              books={this.state.currentlyReadingBooks}
              onChangeStatus={this.changeMethodStatus}
            />
            <BookShelf
              shelfTitle="Want to Read"
              books={this.state.wantToReadBooks}
              onChangeStatus={this.changeMethodStatus}
            />
            <BookShelf
              shelfTitle="Read"
              books={this.state.readBooks}
              onChangeStatus={this.changeMethodStatus}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <Button color="secondary" variant="fab" aria-label="add">
              <Icon>add</Icon>
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
