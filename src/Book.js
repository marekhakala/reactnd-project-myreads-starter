import React from 'react'

class Book extends React.Component {
  state = { value: this.props.book.shelf ? this.props.book.shelf : 'none' }

  handleOnChange = event => {
    this.props.onBookShelfUpdate(this.props.book, event.target.value)
    this.setState({ value: event.target.value })
  }

  render() {
    let authors = []
    let thumbnail = ''

    if (this.props.book.authors) {
      authors = this.props.book.authors
    }
    if (this.props.book.imageLinks) {
      thumbnail = this.props.book.imageLinks.thumbnail
    }

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: 'url('+thumbnail+')' }}>
          </div>
          <div className="book-shelf-changer">
            <select value={this.state.value} onChange={this.handleOnChange}>
              <option value="disabled" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{authors.join(", ")}</div>
      </div>
    )
  }
}

export default Book
