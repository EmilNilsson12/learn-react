import React, { useEffect } from 'react';
import PlayerScoreBoard from './playerScoreBoard';
import MiniPlayerScoreBoard from './miniPlayerScoreBoard';
import NewPlayerForm from './newPlayerForm';
import './App.css';

let id = 10;

const LOCAL_STORAGE_KEY_PLAYERS = 'registered.players';
class App extends React.Component {
	state = {
		players: [],
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
		console.log(newPlayerName);
		// Create copy of state array
		let copyOfPlayersState = [
			...this.state.players,
			{ id: ++id, name: newPlayerName, score: 0 },
		];

		this.setState({
			players: copyOfPlayersState,
		});
	};

	render() {
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
				/>
			</>
		);
	}
}

export default App;
