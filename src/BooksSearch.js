import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'
import * as BooksAPI from "./BooksAPI"

class BooksSearch extends Component {
  state = { value: '', results: [] }

  searchBooks = () => {
    BooksAPI.search(this.state.value).then(results => {
      return results.map(result => {
        const bookIndex = this.props.books.find(book => { return book.id === result.id })
        return bookIndex === undefined ? {...result, shelf: 'none'} : bookIndex
      })
    }).then(results => { this.setState({ results: results }) })
    .catch(() => { this.setState({ results: [] }) })
  }

  handleOnChange = (event) => {
    const searchString = event.target.value

    this.setState({ value: event.target.value }, () => {
      if (searchString === '') {
        this.setState({ results: [] })
      } else {
        this.searchBooks()
      }
    })
  }

  render() {
    let bookList = ''

    if (this.state.results.length !== 0) {
      bookList = this.state.results.map(book => {
        return ( <li key={book.id}><Book book={book} onBookShelfUpdate={this.props.onBookShelfUpdate} /></li> )
      })
    } else {
      bookList = <li key="no-results">No results</li>
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={this.handleOnChange} value={this.state.value} placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{bookList}</ol>
        </div>
        <div className="search-books-results"><ol className="books-grid"></ol></div>
      </div>
  )}
}

export default BooksSearch
