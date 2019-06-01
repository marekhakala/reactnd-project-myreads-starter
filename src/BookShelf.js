import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
  let bookShelf = null

  if (props.books.length !== 0) {
    bookShelf = props.books.map(book => {
      return (<li key={book.id}><Book book={book} onBookShelfUpdate={props.onBookShelfUpdate} /></li>)
    })
  } else {
    bookShelf = <li key="empty">A list is empty.</li>
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{bookShelf}</ol>
      </div>
    </div> )
}

export default BookShelf
