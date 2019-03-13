import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired
	}
	render() {
		return (
			<div className="list-books-title">
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}

export default Header