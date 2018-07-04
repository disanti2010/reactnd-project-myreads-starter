import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "./Select";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeStatus: PropTypes.func
  };

  render() {
    const { book, onChangeStatus } = this.props;

    const labelSelect = {
      value: "moveto",
      description: "move to..."
    };

    var optionsSelect = [
      {
        value: "currentlyReading",
        description: "Currently Reading"
      },
      {
        value: "wantToRead",
        description: "Want to Read"
      },
      {
        value: "read",
        description: "Read"
      },
      {
        value: "none",
        description: "None"
      }
    ];

    const onChangeStatusBook = selectedValue => {
      if (onChangeStatus && typeof onChangeStatus === "function") {
        onChangeStatus(book, selectedValue);
      }
    };
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks &&
                book.imageLinks.thumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <Select
              label={labelSelect}
              options={optionsSelect}
              changeMethod={selectedValue => {
                onChangeStatusBook(selectedValue);
              }}
            />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          <ol>
            {book.authors &&
              book.authors.map((author, index) => {
                return <li key={index}>{author}</li>;
              })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Book;
