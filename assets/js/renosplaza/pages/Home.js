import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			categoriesData: ''
		};
	}

	componentWillMount() {}

	componentDidMount() {
		const { match, location, history } = this.props;
		if (match.params.city == undefined) {
			history.push('/pdx');
		}

		const self = this;
		axios
			.get(`/api/${match.params.city}`)
			.then(function(response) {
				self.setState({
					categoriesData: response.data
				});
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	clickedBtn = () => {};

	loopCategories = () => {
		// loops through each main category on home page ===================================
		if (this.state.categoriesData != '') {
			return this.state.categoriesData.map((category, i) => {
				const loopListings = () => {
					//loops through each listing underneath all main categories ==========
					return category.listings.map((listing, i) => {
						return (
							<a
								href={`${category.title}/${listing.slug}`}
								className={'link'}
								key={i}
							>
								{listing.name}
							</a>
						);
					});
				};

				return (
					<div className={'categories'} key={i}>
						<div className={'title'}>{category.title}</div>
						<div
							className={`groupLinks ${
								category.title == 'jobs' || category.title == 'housing'
									? 'singleCol'
									: ''
							}`}
						>
							{loopListings()}
						</div>
					</div>
				);
			});
		} else {
			return 'LOADING';
		}
	};

	loopTags = () => {
		let testTags = [1, 2, 3, 4, 5, 6, 7];

		return testTags.map(item => {
			return (
				<div key={item} className={'tag'}>
					Apple Macbook
				</div>
			);
		});
	};

	render() {
		return (
			<div className={'home'}>
				<div className="container">
					<h1>
						Connecting People <br /> Everywhere{' '}
						<span className="happyFace">:-)</span>
					</h1>

					<section className={'links'}>{this.loopCategories()}</section>

					<section className={'trending'}>
						<input
							type="text"
							name="search"
							className="search"
							placeholder="Search Classifieds, Jobs, Housing, Discussions, Personals..."
						/>
						<div className={'title'}>
							<i className="far fa-clock"></i>Trending Now
						</div>
						<div className={'trendingTags'}>{this.loopTags()}</div>
					</section>
				</div>
			</div>
		);
	}
}
