import React, { Component } from 'react';

export default class Listings extends Component {
	constructor() {
		super();
		this.state = {};
	}

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
							<select name={'minPrice'} className={'minPrice'}>
								<option value="0">0</option>
							</select>
							<select name={'maxPrice'} className={'maxPrice'}>
								<option value="1000">$1,000</option>
							</select>
						</div>

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

						{/* ======================BUTTON==================== */}
						<div className={'formGroup button'}>
							<div className="primaryBtn">Update</div>
							<div className="resetBtn">Reset</div>
						</div>
					</section>

					{/* =====================================FILTER RESULTS==================================== */}
					<section id={'listView'}>
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
						<section className={'allItems'}>
							<div className={'item'}>
								<div className={'image'}>
									image
									<div className={'price'}>$8,900</div>
								</div>
								<div className={'details'}>
									<h5>Title</h5>
									<i className="far fa-star"></i>
									<h6>City</h6>
									<i className="fas fa-times"></i>
								</div>
							</div>
						</section>
					</section>
				</div>
			</div>
		);
	}
}
