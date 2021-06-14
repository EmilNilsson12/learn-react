import React from 'react';
import PlayerCard from './playerCard';

class PlayerScoreBoard extends React.Component {
	state = {
		players: this.props.players,
	};

	render() {
		let playersArray = [];

		for (let i = 0; i < this.state.players.length; i++) {
			playersArray.push(
				// <div key={this.props.players[i].id}>
				// 	{this.props.players[i].name}: {this.props.players[i].score}
				// </div>
				<PlayerCard
					key={this.props.players[i].id}
					id={this.props.players[i].id}
					name={this.props.players[i].name}
					score={this.props.players[i].score}
					updateScore={this.props.updateScore}
					updateName={this.props.updateName}
				/>
			);
		}
		console.log(playersArray);

		return playersArray;
	}
}

export default PlayerScoreBoard;
