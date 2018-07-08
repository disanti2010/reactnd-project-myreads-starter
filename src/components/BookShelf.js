import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";

export default class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeStatus: PropTypes.func
  };
  render() {
    const { books, onChangeStatus } = this.props;
    return (
      <div className="bookshelf">
        <Card>
          <h2>Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books &&
                books.map((book, index) => {
                  return (
                    <li key={index}>
                      <Book book={book} onChangeStatus={onChangeStatus} />
                    </li>
                  );
                })}
            </ol>
          </div>
        </Card>
      </div>
    );
  }
}
