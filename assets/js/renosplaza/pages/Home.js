import React, { Component } from 'react';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {};
	}
	clickedBtn = () => {};

	loopCategories = () => {
		let testArray = [1, 2, 3, 4, 5, 6, 7];
		return testArray.map(item => {
			return (
				<div key={item} className={'categories'}>
					<div className={'title'}>Community</div>
					<div className={'groupLinks'}>
						<a href="#" className={'link'}>
							Community
						</a>
						<a href="#" className={'link'}>
							General
						</a>
						<a href="#" className={'link'}>
							Activities
						</a>
						<a href="#" className={'link'}>
							Groups
						</a>
						<a href="#" className={'link'}>
							Artists
						</a>
						<a href="#" className={'link'}>
							Local News
						</a>
						<a href="#" className={'link'}>
							Child Care
						</a>
						<a href="#" className={'link'}>
							Lost+Found
						</a>
						<a href="#" className={'link'}>
							Classes
						</a>
						<a href="#" className={'link'}>
							Musicians
						</a>
						<a href="#" className={'link'}>
							Events
						</a>
						<a href="#" className={'link'}>
							Pets
						</a>
					</div>
				</div>
			);
		});
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
