import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookShelf from "../components/BookShelf";
import { DebounceInput } from "react-debounce-input";

export default class Search extends Component {
  state = {
    query: null,
    books: [],
    showLoading: false
  };

  componentWillReceiveProps(prop) {
    this.setShelfBookStatus(this.state.books);
  }

  /* Função para buscar os livros e validando caso input esteja vazio*/
  searchBooks = event => {
    const consulta = event.target.value;
    const { query } = this.state;
    this.setState({
      query: consulta
    });
    if (!consulta) {
      this.setState({
        books: []
      });
      return false;
    }
    this.setState({ showLoading: true });
    BooksAPI.search(query, 20).then(books => {
      if (!books || !books.length) {
        books = [];
      }
      this.setShelfBookStatus(books);
    });
  };

  /* Inserindo atributo shelf para os livros buscados, levando em consideração os das prateleiras */
  setShelfBookStatus = books => {
    books.map(book => {
      for (let item of this.props.booksShelf) {
        if (item.id === book.id) {
          book.shelf = item.shelf;
        }
      }

      if (!book.shelf) book.shelf = "none";
      return book;
    });
    this.setState({
      books,
      showLoading: false
    });
  };

  render() {
    const { onShelfChange } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <DebounceInput
              minLength={2}
              placeholder="Search by title or author"
              debounceTimeout={800}
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          <div className="container-loading-books">
            <BookShelf
              books={this.state.books}
              onChangeStatus={onShelfChange}
              showLoading={this.state.showLoading}
            />
          </div>
        </div>
      </div>
    );
  }
}
