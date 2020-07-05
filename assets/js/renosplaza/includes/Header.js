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

	componentWillMount() {
		const { match, history } = this.props;
		const self = this;
		axios
			.get(`/api/cities`)
			.then(function(response) {
				const { match, history } = self.props;
				let city = response.data.filter(item => {
					return item.slug == match.params.city;
				});
				self.setState(
					{
						citiesData: response.data,
						selectedCity: city[0].title
					},
					() => {
						document.body.style.backgroundImage = `linear-gradient(135deg, rgba(75,52,247,0.3) 0%, rgba(166,39,230,0.8) 100%), url(${city[0].img})`;
					}
				);
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	clickedCityDropdown = () => {
		this.setState({
			cityDropdown: !this.state.cityDropdown
		});
	};

	selectCity = city => {
		this.setState(
			{
				selectedCity: city
			},
			() => {
				let city = this.state.citiesData.filter(item => {
					return item.title == this.state.selectedCity;
				});
				const { match, history } = this.props;
				history.push(`${city[0].slug}`);
			}
		);
	};

	loopCities = () => {
		const self = this;
		return self.state.citiesData.map((item, i) => {
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
							<i
								className={`fas ${
									this.state.cityDropdown ? 'fa-chevron-up' : 'fa-chevron-down'
								}`}
							></i>
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
