import React from 'react';
import PlayerCard from './playerCard';

class PlayerScoreBoard extends React.Component {
	state = {
		players: this.props.players,
	};

	render() {
		let playersArray = [];

		for (let player of this.state.players) {
			playersArray.push(
				<PlayerCard
					key={player.id}
					id={player.id}
					name={player.name}
					score={player.score}
					updateScore={this.props.updateScore}
					updateName={this.props.updateName}
				/>
			);
		}

		console.table(playersArray);

		return playersArray;
	}
}

export default PlayerScoreBoard;
