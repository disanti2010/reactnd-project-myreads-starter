import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const Home = props => {
  const { books, onShelfChange, showLoading } = props;

  const shelfChange = (book, shelf) => {
    if (onShelfChange && typeof onShelfChange === "function") {
      onShelfChange(book, shelf);
    }
  };

  /* Função para filtrar todos os livros por prateleira e exibi-los em seguida */
  const Shelves = () => {
    const shelfContent = [
      {
        title: "Currently Reading",
        name: "currentlyReading"
      },
      {
        title: "Want to Read",
        name: "wantToRead"
      },
      {
        title: "Read",
        name: "read"
      }
    ];
    return shelfContent.map((shelf, index) => {
      let listBooks = books.filter(book => {
        return book.shelf === shelf.name;
      });

      return (
        <BookShelf
          key={index}
          shelfTitle={shelf.title}
          books={listBooks}
          onChangeStatus={shelfChange}
          showLoading={showLoading}
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
};

export default Home;
