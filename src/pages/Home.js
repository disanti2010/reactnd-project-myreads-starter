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
    readBooks: [],
    showLoadingShelfBooks: false
  };

  getAllBooks = () => {
    this.setState({ showLoadingShelfBooks: true });
    BooksAPI.getAll().then(books => {
      this.setState({ showLoadingShelfBooks: false });
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
    const Shelves = () => {
      const shelfContent = [
        {
          title: "Currenty Reading",
          books: this.state.currentlyReadingBooks
        },
        {
          title: "Want to Read",
          books: this.state.wantToReadBooks
        },
        {
          title: "Read",
          books: this.state.readBooks
        }
      ];
      return shelfContent.map((shelf, index) => {
        return (
          <BookShelf
            key={index}
            shelfTitle={shelf.title}
            books={shelf.books}
            onChangeStatus={this.changeMethodStatus}
            showLoading={this.state.showLoadingShelfBooks}
          />
        );
      });
    };
    return (
      <div className="list-books">
        <div className="list-books-content">
          <div>
            <Shelves />
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
