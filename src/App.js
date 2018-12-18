import React, { Component } from 'react';
import './App.css'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import Bookcase from './Bookcase.js'
import BookSearch from './BookSearch.js'

class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then( books => (
      this.setState(() => ({
        books: books
      }))
    ))
  }

  moveBook = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf)
    this.setState(state => ({
      books: this.state.books.filter(b => b.id !== book.id).concat([book])
    }))
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Route exact path='/' render={() => (
            <Bookcase
              booksCurrentlyReading={this.state.books.filter( book => {
                return book.shelf === 'currentlyReading'
              })}
              booksWantToRead={this.state.books.filter( book => {
                return book.shelf === 'wantToRead'
              })}
              booksRead={this.state.books.filter( book => {
                return book.shelf === 'read'
              })}
              moveBook={this.moveBook}
            />
          )} />
          <Route exact path='/search' render={() => (
            <BookSearch
              allBooks={this.state.books}
              moveBook={this.moveBook}
            />
          )} />
        </div>
      </div>
    )
  }
}

export default BooksApp
