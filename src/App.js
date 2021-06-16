import React from 'react';
import uuidv4 from 'uuid/dist/v4';

import PlayerScoreBoard from './playerScoreBoard';
import MiniPlayerScoreBoard from './miniPlayerScoreBoard';
import NewPlayerForm from './newPlayerForm';
import './App.css';

class App extends React.Component {
	state = {
		players: JSON.parse(localStorage.getItem('players')) || [],
	};

	updateScore = (playerInfo) => {
		// Deconstruct object from callback function
		let { id, score } = playerInfo;

		// Create copy of state array
		let copyOfPlayersState = this.state.players;

		// Update copy of state array
		copyOfPlayersState.find((player) => player.id === id).score = score;

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
		copyOfPlayersState.find((player) => player.id === id).name = name;

		// Replace state array with copy of state array
		this.setState({
			players: copyOfPlayersState,
		});
	};

	addNewPlayer = (newPlayerName) => {
		// Create copy of state array
		let copyOfPlayersState = [
			...this.state.players,
			{ id: uuidv4(), name: newPlayerName, score: 0 },
		];

		this.setState({
			players: copyOfPlayersState,
		});
	};

	deletePlayer = (playerId) => {
		// Filter out removed player by id
		let copyOfPlayersState = [...this.state.players].filter(
			(player) => player.id !== playerId
		);

		// Replace state array with copy of state array
		this.setState({
			players: copyOfPlayersState,
		});
	};

	render() {
		localStorage.setItem('players', JSON.stringify(this.state.players));
		return (
			<>
				<h1>Current scores</h1>
				<MiniPlayerScoreBoard
					id='player-score-board'
					players={this.state.players}
				/>
				<NewPlayerForm addNewPlayer={this.addNewPlayer} />
				<PlayerScoreBoard
					id='player-score-board'
					players={this.state.players}
					updateScore={this.updateScore}
					updateName={this.updateName}
					deletePlayer={this.deletePlayer}
				/>
			</>
		);
	}
}

export default App;
