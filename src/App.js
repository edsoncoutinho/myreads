import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import PageNotFound from './components/PageNotFound'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({ books }))
      })
  }

  handleBooks = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books })
      })
  }

  render() {
    const books = this.state.books
    return (
      <div className="app">
        <Switch>
          <Route exact path='/search' render={() => (
            <SearchBooks
              books={books}
              handleBooks={this.handleBooks}
            />
          )} />
          <Route exact path='/' render={() => (
            <ListBooks
              books={books}
              handleBooks={this.handleBooks}
            />
          )} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
