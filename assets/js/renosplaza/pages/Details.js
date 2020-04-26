import React, { Component } from 'react';

export default class Details extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { match, location, history } = this.props;
		return (
			<div className={'detailsPage'}>
				<div className={'container'}>
					{/* =======================SUBMENU=========================== */}
					<section className={'subMenu'}>
						<div className={'direction'}>
							<div className={'next'}>Next</div>
							<div className={'prev'}>Prev</div>
						</div>
						<nav className={'subLinks'}>
							<a href="#">More ads by this user</a>
							<a href="#">Print</a>
							<a href="#">Share</a>
							<select>
								<option>Contact Seller</option>
							</select>
						</nav>
					</section>
					{/* =======================SUBMENU=========================== */}

					{/* ========================================================= */}
					<section>
						<div className={'mediaColumn'}>
							<div className={'gallery'}>
								<div className={'slider'}>
									<div
										className={'mainImage'}
										style={{
											background:
												"url('https://www.newcartestdrive.com/wp-content/uploads/2008/02/08-rdx-hero.jpg') center center no-repeat",
											height: '200px',
											width: '200px'
										}}
									>
										<div className={'leftArrow'}>
											<i className="fas fa-chevron-left"></i>
										</div>
										<div className={'rightArrow'}>
											<i className="fas fa-chevron-right"></i>
										</div>
									</div>
								</div>
								<div className={'thumbnails'}>
									<div
										className={'thumbImage'}
										style={{
											background:
												"url('https://img2.carmax.com/img/vehicles/18701783/1/385.jpg') center center no-repeat",
											height: '50px',
											width: '50px',
											backgroundSize: 'cover'
										}}
									>
										image
									</div>
								</div>
							</div>
						</div>
						<div className={'detailsColumn'}>
							<div className={'date'}>Posted: Apr 26th</div>
							<h3>Black 2008 Acura Rdx</h3>
							<h4 className={'price'}>$8,900</h4>
							<div className={'moreDetails'}>
								<div className={'info'}>
									<label>Vin</label>
									<h5>WBAKA8C55BC446879</h5>
								</div>
								<div className={'info'}>
									<label>Mileage</label>
									<h5>107,000</h5>
								</div>
								<div className={'info'}>
									<label>Transmission</label>
									<h5>Auto</h5>
								</div>
								<div className={'info'}>
									<label>Fuel</label>
									<h5>93 octane</h5>
								</div>
								<div className={'info'}>
									<label>Drive Train</label>
									<h5>AWD</h5>
								</div>
								<div className={'info'}>
									<label>Exterior Color</label>
									<h5>Black</h5>
								</div>
							</div>
							<div className={'description'}>
								<p>
									Low mileage and in excellent condition! This "Nighthawk Black
									Pearl" 2007 Acura RDX SH-AWD has the Technology Package!
									All-Wheel-Drive and very safe! It comes with the Automatic
									Transmission, Turbocharged 2.3-Liter DOHC i-VTEC Engine, Alloy
									Wheels, Backup Camera, Climate Control, Heated Leather Seats,
									GPS Navigation System, Tow Hitch, Power Equipment Group,
									Cruise Control, Power Sunroof, Acura/ELS Surround Premium
									AM/FM/XM Sound System, Keyless Entry, Privacy Glass & more!
									The odometer is 23k miles below market average! We serviced &
									detailed this one, too: new front door speakers, new wipers &
									more! You won't find many at this price that are this nice!
									Don't hesitate...this won't last long!
								</p>
							</div>
						</div>
					</section>
					{/* ========================================================= */}
				</div>
			</div>
		);
	}
}
