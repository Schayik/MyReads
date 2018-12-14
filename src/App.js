import React, { Component } from 'react';
import './App.css'
import * as BooksAPI from './BooksAPI'
import Bookcase from './Bookcase.js'
import BookSearch from './BookSearch.js'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    books: [],
    booksCurrentlyReading: [],
    booksWantToRead: [],
    booksRead: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
  }

  componentDidMount() {
    BooksAPI.getAll().then( books => (
      this.setState(() => ({
        books: books
      }))
    ))
  }

  moveBook = (book, shelf) => {
    if (shelf === 'currentlyReading') {
      console.log("new current")
      this.setState({
        booksCurrentlyReading: [...this.state.booksCurrentlyReading, book]
      })
    } else if (shelf === 'wantToRead') {
      console.log("new wantto")
      this.setState({
        booksWantToRead: [...this.state.booksWantToRead, book]
      })
    } else if (shelf === 'read') {
      this.setState({
        booksRead: [...this.state.booksRead, book]
      })
    }
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
              booksCurrentlyReading={this.state.booksCurrentlyReading}
              booksWantToRead={this.state.booksWantToRead}
              booksRead={this.state.booksRead}
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
