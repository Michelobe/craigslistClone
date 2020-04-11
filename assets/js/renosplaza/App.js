import React, { Component } from 'react';
import Header from './includes/Header.js';
import Home from './pages/Home.js';

export default class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div>
				<Header />
				<Home />
			</div>
		);
	}
}
