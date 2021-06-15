import React from 'react';
import PlayerScoreBoard from './playerScoreBoard';
import MiniPlayerScoreBoard from './miniPlayerScoreBoard';
import './App.css';

class App extends React.Component {
	state = {
		players: [
			{
				id: 1,
				name: 'Emil',
				score: 0,
			},
			{
				id: 2,
				name: 'Petter',
				score: 0,
			},
			{
				id: 3,
				name: 'Janne',
				score: 0,
			},
			{
				id: 4,
				name: 'Jenni',
				score: 0,
			},
			{
				id: 5,
				name: 'Ida',
				score: 0,
			},
			{
				id: 6,
				name: 'Rakib',
				score: 0,
			},
			{
				id: 7,
				name: 'Fredrik',
				score: 0,
			},
		],
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

	render() {
		return (
			<>
				<h1>Current scores</h1>
				<MiniPlayerScoreBoard
					id='player-score-board'
					players={this.state.players}
				/>

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
