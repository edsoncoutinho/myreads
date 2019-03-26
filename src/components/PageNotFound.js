import React, { Component }  from 'react'
import { Link } from 'react-router-dom'

class PageNotFound extends Component {
  render() {
    return(
      <div className="pagenotfound">
        <p className="pagenotfound-code">404</p>
        <p>Page Not Found</p>
        <Link className="pagenotfound-link" to="/">Return to Home Page</Link>
      </div>
    )
  }
}

export default PageNotFound