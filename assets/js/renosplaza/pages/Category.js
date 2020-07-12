import React, { Component } from 'react';
import axios from 'axios';
import qs from 'query-string';

export default class Category extends Component {
	constructor() {
		super();
		this.state = {
			minPrice: 0,
			maxPrice: 5000,
			sortDropdown: 'newest',
			selectView: 'gallery'
			//itemData not shown, but it is here as per setState in componentWillMount
		};
	}

	componentWillMount() {
		const { match, history, location } = this.props;
		const self = this;
		const queryParams = qs.parse(this.props.location.search);
		console.log(queryParams);
		const { minPrice, maxPrice, sortDropdown, selectView } = queryParams;

		if (queryParams.minPrice != undefined) {
			axios
				.get(
					`/api/${match.params.city}/${match.params.category}?minPrice=${minPrice}&maxPrice=${maxPrice}&sortDropdown=${sortDropdown}&selectView=${selectView}`
				)
				.then(function(response) {
					self.setState({
						itemData: response.data
					});
				})
				.catch(function(error) {
					console.log(error);
				});
		} else {
			axios
				.get(`/api/${match.params.city}/${match.params.category}`)
				.then(function(response) {
					self.setState({
						itemData: response.data
					});
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	}

	loopItems = () => {
		if (this.state.itemData != undefined) {
			return this.state.itemData.map((item, i) => {
				return (
					<div key={i} className={'item'}>
						<div
							className={'image'}
							style={{
								backgroundImage: `url('${item.images[0]}')`
							}}
						>
							<div className={'price'}>${item.price}</div>
						</div>
						<div className={'details'}>
							<h5>{item.title}</h5>
							<i className="fas fa-star"></i>
							<h6>{item.city}</h6>
						</div>
					</div>
				);
			});
		}
	};

	showMakeModelDropdown = () => {
		const { match, location, history } = this.props;

		if (match.params.listings == 'cars-and-trucks') {
			return (
				<div className={'makeModel'}>
					{/* ==============DROPDOWN MAKE==================== */}
					<div className={'formGroup make'}>
						<label>Make</label>
						<select
							name={'make'}
							className={'make'}
							onChange={this.handleChange}
						>
							<option value="bmw">BMW</option>
							<option value="jeep">Jeep</option>
							<option value="toyota">Toyota</option>
							<option value="lexus">Lexus</option>
							<option value="acura">Acura</option>
							<option value="honda">Honda</option>
						</select>
					</div>

					{/* ==============DROPDOWN MODEL==================== */}
					<div className={'formGroup model'}>
						<label>Model</label>
						<select
							name={'model'}
							className={'model'}
							onChange={this.handleChange}
						>
							<option value="335xi">335xi</option>
							<option value="wrangler">Wrangler</option>
							<option value="camry">Camry</option>
							<option value="is250">is250</option>
							<option value="rdx">rdx</option>
							<option value="civic">civic</option>
						</select>
					</div>
				</div>
			);
		}
	};

	handleChange = event => {
		const name = event.target.name;
		const value =
			event.target.type == 'checkbox'
				? event.target.checked
				: event.target.value;

		this.setState(
			{
				[name]: value
			},
			() => {
				console.log(this.state);
			}
		);
	};

	submitFilters = () => {
		const self = this;
		const { match, location, history } = this.props;
		const { minPrice, maxPrice, sortDropdown, selectView } = this.state;
		// const queryParams = qs.parse(this.props.location.search);

		document.location.href = `/${match.params.city}/${match.params.category}?minPrice=${minPrice}&maxPrice=${maxPrice}&sortDropdown=${sortDropdown}&selectView=${selectView}`;

		// history.push(
		// 	`/${match.params.city}/${match.params.category}?minPrice=${minPrice}&maxPrice=${maxPrice}&sortDropdown=${sortDropdown}&selectView=${selectView}`
		// );

		// if (queryParams.minPrice != undefined) {
		// 	axios
		// 		.get(
		// 			`/api/${match.params.city}/${match.params.category}?minPrice=${queryParams.minPrice}&maxPrice=${queryParams.maxPrice}&sort=${queryParams.sortDropdown}&select_view=${queryParams.selectView}`
		// 		)
		// 		.then(function(response) {
		// 			self.setState({
		// 				itemData: response.data
		// 			});
		// 		})
		// 		.catch(function(error) {
		// 			console.log(error);
		// 		});
		// }
	};

	render() {
		const { match, location, history } = this.props;
		return (
			<div className={'listingsPage'}>
				<div className="container">
					{/* ===================================FILTER OPTIONS====================================== */}
					<section id={'filter'}>
						{/* ==============DROPDOWN PRICE==================== */}
						<div className={'formGroup price'}>
							<label>Price</label>
							<div className={'minMax'}>
								<select
									name={'minPrice'}
									className={'minPrice'}
									onChange={this.handleChange}
									value={this.state.minPrice}
								>
									<option value="0">$0</option>
									<option value="1000">$1,000</option>
									<option value="5000">$5,000</option>
									<option value="10000">$10,000</option>
									<option value="20000">$20,000</option>
								</select>
								<select
									name={'maxPrice'}
									className={'maxPrice'}
									onChange={this.handleChange}
									value={this.state.maxPrice}
								>
									<option value="5000">$5,000</option>
									<option value="10000">$10,000</option>
									<option value="20000">$20,000</option>
									<option value="50000">$50,000</option>
								</select>
							</div>
						</div>

						{/* ==============DROPDOWN MAKE/MODEL==================== */}
						{this.showMakeModelDropdown()}

						{/* ======================BUTTON==================== */}
						<div className={'formGroup button'}>
							<div className="primaryBtn" onClick={this.submitFilters}>
								Update
							</div>
							<div className="resetBtn">Reset</div>
						</div>
					</section>
				</div>

				{/* =====================================FILTER RESULTS==================================== */}
				<section id={'listView'}>
					<div className="container">
						<div className={'whiteBox'}>
							<section className={'changeView'}>
								{/* ==============DROPDOWN VIEWDROPDOWN========== */}
								<div className={'formGroup viewDropdown'}>
									<select
										name={'selectView'}
										className={'selectView'}
										onChange={this.handleChange}
									>
										<option value="gallery">Gallery View</option>
										<option value="list">List View</option>
										<option value="thumb">Thumb View</option>
									</select>
								</div>

								{/* ===================NEWEST==================== */}
								<div className={'formGroup sortDropdown'}>
									<select
										name={'sortDropdown'}
										className={'sortDropdown'}
										onChange={this.handleChange}
									>
										<option value="newest">Newest</option>
										<option value="oldest">Oldest</option>
									</select>
								</div>
							</section>
							<section className={'allItems'}>{this.loopItems()}</section>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
