import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList.js'
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {

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
        data.length ? this.setState({ showingBooks: data }) : this.setState({ showingBooks: [] })
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
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
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
