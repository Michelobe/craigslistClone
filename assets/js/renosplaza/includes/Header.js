import React, { Component } from 'react';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div className="container">
				<header>
					<div className={'leftMenu'}>
						<div className={'logo'}>RenosPlaza</div>
						<div className={'city'}>
							Portland<i className={'fas fa-chevron-down'}></i>
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
