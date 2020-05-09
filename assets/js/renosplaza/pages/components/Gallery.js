import React, { Component } from 'react';

export default class Gallery extends Component {
	constructor() {
		super();
		this.state = {
			allImages: [''],
			currentImage: '',
			currentIndex: 0
		};
	}

	// ===========LOADS ALL THUMBNAIL IMAGES AND CURRENT IMAGE==============
	componentWillMount() {
		const allImages = [
			'https://images.craigslist.org/01616_ep9cNjQFdnD_600x450.jpg',
			'https://images.craigslist.org/00505_evOFhGSA5lL_600x450.jpg',
			'https://images.craigslist.org/00l0l_kKyVDgq58tO_600x450.jpg',
			'https://images.craigslist.org/00Q0Q_dgOdVCOKPtj_600x450.jpg',
			'https://images.craigslist.org/00I0I_Q0ippO6aES_600x450.jpg',
			'https://images.craigslist.org/00j0j_hdOJYC2yGwR_600x450.jpg'
		];
		this.setState({
			allImages: allImages,
			currentImage: allImages[this.state.currentIndex]
		});
	}
	// ===========LOADS ALL THUMBNAIL IMAGES AND CURRENT IMAGE==============

	// ===================MAPS THUMBNAIL IMAGES====================
	allImagesLoop = () => {
		return this.state.allImages.map((item, i) => {
			return (
				<div
					onClick={this.clickedThumb.bind(null, i)}
					key={i}
					className={'thumbImage'}
					style={{
						background: `url('${item}') center center no-repeat`
					}}
				></div>
			);
		});
	};
	// ===================MAPS THUMBNAIL IMAGES====================

	// ======================NEXT AND PREV BUTTONS====================
	nextBtn = () => {
		if (this.state.currentIndex == this.state.allImages.length - 1) {
			this.setState({
				currentIndex: (this.state.currentIndex = 0)
			});
		} else {
			this.setState({
				currentIndex: this.state.currentIndex + 1
			});
		}
	};
	prevBtn = () => {
		if (this.state.currentIndex == 0) {
			this.setState({
				currentIndex: this.state.allImages.length - 1
			});
		} else {
			this.setState({
				currentIndex: this.state.currentIndex - 1
			});
		}
	};
	// ======================NEXT AND PREV BUTTONS====================

	// ===================CLICK THUMBNAIL IMAGE=======================
	clickedThumb = index => {
		this.setState({
			currentIndex: index
		});
	};
	// ===================CLICK THUMBNAIL IMAGE=======================

	render() {
		const { match, location, history } = this.props;
		return (
			<div className={'gallery'}>
				<div className={'slider'}>
					<div className={'mainImage'}>
						<div className={'arrows leftArrow'} onClick={this.prevBtn}>
							<i className="fas fa-chevron-left"></i>
						</div>
						<div className={'arrows rightArrow'} onClick={this.nextBtn}>
							<i className="fas fa-chevron-right"></i>
						</div>
						<div
							className={'imageOne'}
							style={{
								background: `url('${
									this.state.allImages[this.state.currentIndex]
								}') center center no-repeat`
							}}
						></div>
					</div>
				</div>
				<div className={'thumbnails'}>{this.allImagesLoop()}</div>
			</div>
		);
	}
}
