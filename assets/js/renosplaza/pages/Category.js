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
					itemData: response.data
				});
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	loopItems = () => {
		if (this.state.itemData != undefined) {
			return this.state.itemData.map((item, i) => {
				return (
					<div key={item} className={'item'}>
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
						<select name={'make'} className={'make'}>
							<option value="bmw">BMW</option>
						</select>
					</div>

					{/* ==============DROPDOWN MODEL==================== */}
					<div className={'formGroup model'}>
						<label>Model</label>
						<select name={'model'} className={'model'}>
							<option value="335xi">335xi</option>
						</select>
					</div>
				</div>
			);
		}
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
								<select name={'minPrice'} className={'minPrice'}>
									<option value="0">0</option>
								</select>
								<select name={'maxPrice'} className={'maxPrice'}>
									<option value="1000">$1,000</option>
								</select>
							</div>
						</div>

						{/* ==============DROPDOWN MAKE/MODEL==================== */}
						{this.showMakeModelDropdown()}

						{/* ======================BUTTON==================== */}
						<div className={'formGroup button'}>
							<div className="primaryBtn">Update</div>
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
									<select name={'selectView'} className={'selectView'}>
										<option value="gallery">Gallery View</option>
										<option value="list">List View</option>
										<option value="thumb">Thumb View</option>
									</select>
								</div>

								{/* ===================NEWEST==================== */}
								<div className={'formGroup sortDropdown'}>
									<select name={'sortDropdown'} className={'sortDropdown'}>
										<option value="newest">Newest</option>
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
