import React, { Component } from 'react';
import axios from 'axios';

export default class Category extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentWillMount() {
		const { match, history } = this.props;
		const self = this;

		axios
			.get(`/api/${match.params.city}/${match.params.category}`)
			.then(function(response) {
				self.setState({
					itemsData: response.data
				});
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	loopItems = () => {
		return this.state.itemsData.map((item, i) => {
			return (
				<div className="item">
					<div className="image">
						<div className="price">${item.price}</div>
						image
					</div>
					<div className="details">
						<i className="far fa-star"></i>
						<h5>{item.title}</h5>
					</div>
				</div>
			);
		});
	};

	render() {
		const { match, history } = this.props;
		return (
			<div className={'category'}>
				<div className="container">
					this category is a {match.params.category}
				</div>
			</div>
		);
	}
}
