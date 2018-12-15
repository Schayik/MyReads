import React, { Component } from 'react'
import BookList from './BookList.js'
import { Link } from 'react-router-dom'

class Bookcase extends Component {

  render() {
    return (
      <div>
        <div className="list-books-content">
          <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <BookList
                books={this.props.booksCurrentlyReading}
                moveBook={this.props.moveBook}
              />
            </div>
          </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <BookList
                  books={this.props.booksWantToRead}
                  moveBook={this.props.moveBook}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <BookList
                  books={this.props.booksRead}
                  moveBook={this.props.moveBook}
                />
              </div>
            </div>
          </div>
        </div>
        <Link
          className='open-search'
          to='/search'>
            Add a book
        </Link>
      </div>
    )
  }
}

export default Bookcase
