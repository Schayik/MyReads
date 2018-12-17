import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList.js'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import DebounceInput from 'react-debounce-input'

class BookSearch extends Component {

  static propTypes = {
    allBooks: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
  }

  state = {
    query: '',
    showingBooks: [],
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })

    if (query === '') {
      this.setState({
        showingBooks: []
      })
    } else {
      BooksAPI.search(query).then( data => {
        data.length ? this.setState({ showingBooks: data.map((book) => {
          this.props.allBooks.forEach((b) => {
            if (b.id === book.id) {
              book.shelf = b.shelf
            }
          })
          return book
        }) }) : this.setState({ showingBooks: [] })
      })
    }
  }

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className='close-search'
            to='/'>
              Close
          </Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
              debounceTimeout={400}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookList
              books={this.state.showingBooks}
              moveBook={this.props.moveBook}
            />
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
