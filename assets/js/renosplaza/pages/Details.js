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
					<div className={'whiteBox'}>
						{/* =======================SUBMENU=========================== */}
						<section className={'subMenu'}>
							<div className={'direction'}>
								<a href="#" className={'next'}>
									Next
								</a>
								<a href="#" className={'prev'}>
									Prev
								</a>
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

						{/* ===============================CONTENTAREA================================== */}
						<section className={'contentArea'}>
							<div className={'mediaColumn'}>
								<div className={'gallery'}>
									<div className={'slider'}>
										<div className={'mainImage'}>
											<div className={'arrows leftArrow'}>
												<i className="fas fa-chevron-left"></i>
											</div>
											<div className={'arrows rightArrow'}>
												<i className="fas fa-chevron-right"></i>
											</div>
											<div className={'imageOne'}></div>
										</div>
									</div>
									<div className={'thumbnails'}>
										<div className={'thumbImage'}></div>
										<div className={'thumbImage'}></div>
										<div className={'thumbImage'}></div>
										<div className={'thumbImage'}></div>
										<div className={'thumbImage'}></div>
										<div className={'thumbImage'}></div>
										<div className={'thumbImage'}></div>
										<div className={'thumbImage'}></div>
										<div className={'thumbImage'}></div>
										<div className={'thumbImage'}></div>
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
										Low mileage and in excellent condition! This "Nighthawk
										Black Pearl" 2007 Acura RDX SH-AWD has the Technology
										Package! All-Wheel-Drive and very safe! It comes with the
										Automatic Transmission, Turbocharged 2.3-Liter DOHC i-VTEC
										Engine, Alloy Wheels, Backup Camera, Climate Control, Heated
										Leather Seats, GPS Navigation System, Tow Hitch, Power
										Equipment Group, Cruise Control, Power Sunroof, Acura/ELS
										Surround Premium AM/FM/XM Sound System, Keyless Entry,
										Privacy Glass & more! The odometer is 23k miles below market
										average! We serviced & detailed this one, too: new front
										door speakers, new wipers & more! You won't find many at
										this price that are this nice! Don't hesitate...this won't
										last long!
									</p>
								</div>
							</div>
						</section>
						{/* ===============================CONTENTAREA================================== */}
					</div>
				</div>
			</div>
		);
	}
}
