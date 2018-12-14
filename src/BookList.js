import React, { Component } from 'react'
import MoveBook from './MoveBook.js'
import PropTypes from 'prop-types'

class BookList extends Component {

  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map( book => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <MoveBook
                  book={book}
                  moveBook={this.props.moveBook}
                />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
      </ol>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired,
}

export default BookList
