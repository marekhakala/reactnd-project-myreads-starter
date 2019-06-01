import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

const BooksShelves = (props) => {
  const shelves = [
    { title: 'Currently Reading', label: 'currentlyReading' },
    { title: 'Want to Read', label: 'wantToRead' },
    { title: 'Read', label: 'read' } ]

  const bookShelves = shelves.map(shelf => {
    return ( <BookShelf key={shelf.label} title={shelf.title}
      books={props.books.filter(book => { return book.shelf === shelf.label })}
      onBookShelfUpdate={props.onBookShelfUpdate} /> )
  })

  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>{bookShelves}</div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div> )
}

export default BooksShelves
