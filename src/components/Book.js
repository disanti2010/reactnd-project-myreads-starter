import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "./Select";

class Book extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    urlImage: PropTypes.string.isRequired
  };

  render() {
    const { label, authors, urlImage } = this.props;

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
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: "url(" + urlImage + ")"
            }}
          />
          <div className="book-shelf-changer">
            <Select label={labelSelect} options={optionsSelect} />
          </div>
        </div>
        <div className="book-title">{label}</div>
        <div className="book-authors">
          <ol>
            {authors &&
              authors.map((author, index) => {
                return <li key={index}>{author}</li>;
              })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Book;
