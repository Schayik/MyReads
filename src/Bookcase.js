import React from 'react'
import BookList from './BookList.js'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Bookcase(props) {
  return (
    <div>
      <div className="list-books-content">
        <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <BookList
              books={props.booksCurrentlyReading}
              moveBook={props.moveBook}
            />
          </div>
        </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <BookList
                books={props.booksWantToRead}
                moveBook={props.moveBook}
              />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <BookList
                books={props.booksRead}
                moveBook={props.moveBook}
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

Bookcase.propTypes = {
  booksCurrentlyReading: PropTypes.array.isRequired,
  booksWantToRead: PropTypes.array.isRequired,
  booksRead: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired,
}

export default Bookcase
