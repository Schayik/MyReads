import React from 'react'
import PropTypes from 'prop-types'

function MoveBook (props) {
  return (
    <div className="book-shelf-changer">
      <select defaultValue={props.book.shelf || "none"} onChange={event => props.moveBook(props.book, event.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

MoveBook.propTypes = {
  book: PropTypes.object.isRequired,
  moveBook: PropTypes.func.isRequired,
}

export default MoveBook
