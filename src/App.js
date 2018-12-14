
import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Bookcase from './Bookcase.js'
import BookSearch from './BookSearch.js'

class BooksApp extends React.Component {
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

  addBookToShelf(book, shelf) {
    if (shelf === 'currentlyReading') {
      this.setState({
        booksCurrentlyReading: [...this.state.booksCurrentlyReading, book]
      })
    } else if (shelf === 'wantToRead') {
      this.setState({
        booksWantToRead: [...this.state.booksWantToRead, book]
      })
    } else if (shelf === 'read') {
      console.log(this.state.booksRead)
      this.setState({
        booksRead: [...this.state.booksRead, book]
      })
    }
  }

  render() {
    console.log(this.state.booksRead)
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          {this.state.showSearchPage ?
            <BookSearch
              allBooks={this.state.books}
              addBookToShelf={this.addBookToShelf}
            /> :
            <Bookcase allBooks={this.state.books} />}
        </div>
      </div>
    )
  }
}

export default BooksApp
