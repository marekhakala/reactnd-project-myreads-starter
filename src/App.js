import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import BooksShelves from './BooksShelves'
import BooksSearch from './BooksSearch'

import './App.css'

class BooksApp extends React.Component {
  state = { books: [] }

  componentDidMount() {
    BooksAPI.getAll().then(books => {this.setState({ books })})
  }

  handleBookShelfUpdate = (book, bookShelf) => {
    const newBooks = [...this.state.books]
    const index = this.state.books.indexOf(book)

    if (bookShelf === 'none') {
      newBooks.splice(index, 1)
    } else {
      const updatedBook = {...book, shelf: bookShelf}

      if (book.shelf === 'none') {
        newBooks.push(updatedBook)
      } else {
        newBooks[index] = updatedBook
      }
    }

    BooksAPI.update(book, bookShelf).then(() => { this.setState({ books: newBooks }) })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksShelves books={this.state.books} onBookShelfUpdate={this.handleBookShelfUpdate} />
        )} />
        <Route exact path="/search" render={() => (
          <BooksSearch books={this.state.books} onBookShelfUpdate={this.handleBookShelfUpdate} />
        )} />
      </div>
    )
  }
}

export default BooksApp
