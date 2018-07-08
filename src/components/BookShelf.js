import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array,
    onChangeStatus: PropTypes.func,
    shelfTitle: PropTypes.string,
    showLoading: PropTypes.bool.isRequired
  };

  render() {
    const { books, onChangeStatus, shelfTitle, showLoading } = this.props;
    return (
      <div className="bookshelf">
        <Card className="bookshelf-card">
          <h2 className="bookshelf-title">{shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {showLoading && (
                <CircularProgress size={80} className="bookshelf-loading" />
              )}
              {!showLoading &&
                books &&
                !books.error &&
                books.map((book, index) => {
                  return (
                    <li key={index}>
                      <Book book={book} onChangeStatus={onChangeStatus} />
                    </li>
                  );
                })}
              {!books ||
                (!books.length && !showLoading && <div>No books found.</div>)}
            </ol>
          </div>
        </Card>
      </div>
    );
  }
}
