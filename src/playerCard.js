import React from 'react';

class PlayerCard extends React.Component {
	state = {
		id: this.props.id,
		name: this.props.name,
		score: this.props.score,
	};

	handleScoreChange = async (evt) => {
		let newScore = parseInt(evt.target.value, 10);

		if (Number.isNaN(newScore)) newScore = 0;

		await this.setState({
			score: newScore,
		});

		this.props.updateScore(this.state);
	};

	handleNameChange = (evt) => {
		this.setState({
			name: evt.target.value,
		});
	};

	propNameChange = () => {
		this.props.updateName(this.state);
	};

	deletePlayer = () => {
		this.props.deletePlayer(this.state.id);
	};

	render() {
		return (
			<div
				id={this.state.name + '_with_ID_' + this.state.id}
				className='playerCard'
			>
				<label>
					Name:
					<input
						type='text'
						value={this.state.name}
						onChange={this.handleNameChange}
						onBlur={this.propNameChange}
					/>
				</label>
				<label>
					Score:
					<input
						type='number'
						onChange={this.handleScoreChange}
						value={this.props.score}
					/>
				</label>
				<button onClick={this.deletePlayer}>Delete this player</button>
			</div>
		);
	}
}

export default PlayerCard;
