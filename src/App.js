import React from 'react';
import PlayerCard from './playerCard';

class App extends React.Component {
	state = {
		players: [
			{
				id: 1,
				name: 'Emil',
				score: 20,
			},
			{
				id: 2,
				name: 'Petter',
				score: 200,
			},
		],
	};

	updateScore = (playerInfo) => {
		// Deconstruct object from callback function
		let { id, score } = playerInfo;

		// Create copy of state array
		let copyOfPlayersState = this.state.players;

		// Update copy of state array
		copyOfPlayersState.find((player) => player.id == id).score = score;

		// Replace state array with copy of state array
		this.setState({
			players: copyOfPlayersState,
		});
	};

	updateName = (playerInfo) => {
		// Deconstruct object from callback function
		let { id, name } = playerInfo;

		// Create copy of state array
		let copyOfPlayersState = this.state.players;

		// Update copy of state array
		copyOfPlayersState.find((player) => player.id == id).name = name;

		// Replace state array with copy of state array
		this.setState({
			players: copyOfPlayersState,
		});
	};

	render() {
		return (
			<>
				<PlayerCard
					player={this.state.players[0]}
					updateScore={this.updateScore}
					updateName={this.updateName}
				/>
			</>
		);
	}
}

export default App;
