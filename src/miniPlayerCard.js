import React from 'react';
import './playerCard.css';

class MiniPlayerCard extends React.Component {
	render() {
		return (
			<div
				id={this.props.name + '_with_ID_' + this.props.id}
				className='miniPlayerCard'
			>
				{this.props.name} has {this.props.score} points
			</div>
		);
	}
}

export default MiniPlayerCard;
