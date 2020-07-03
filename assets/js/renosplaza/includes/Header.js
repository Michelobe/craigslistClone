import React, { Component } from 'react';
import axios from 'axios';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			cityDropdown: false,
			selectedCity: 'Portland',
			citiesData: []
		};
	}

	clickedCityDropdown = () => {
		this.setState({
			cityDropdown: !this.state.cityDropdown
		});
	};

	componentWillMount() {
		const self = this;
		axios
			.get(`/api/cities`)
			.then(function(response) {
				self.setState(
					{
						citiesData: response.data
					},
					() => {
						console.log(self.state);
					}
				);
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	selectCity = city => {
		console.log(city);
		this.setState({
			selectedCity: city
		});
	};

	loopCities = () => {
		const self = this;
		return this.state.citiesData.map((item, i) => {
			return (
				<li key={i} onClick={self.selectCity.bind(null, item.title)}>
					{item.title}
				</li>
			);
		});
	};

	render() {
		return (
			<div className="container">
				<header>
					<div className={'leftMenu'}>
						<div className={'logo'}>RenosPlaza</div>
						<div className={'cityDropdown'} onClick={this.clickedCityDropdown}>
							{this.state.selectedCity}
							<i className={'fas fa-chevron-down'}></i>
							<div
								className={`scrollArea ${
									this.state.cityDropdown ? 'active' : ''
								}`}
							>
								<ul>{this.loopCities()}</ul>
							</div>
						</div>
					</div>
					<div className={'rightMenu'}>
						<div className={'userImg'}>AvatarIMG</div>
						<div className={'userDropdown'}>
							My Account<i className={'fas fa-chevron-down'}></i>
						</div>
						<div className={'postBtn'}>Post to Indexed</div>
					</div>
				</header>
			</div>
		);
	}
}
