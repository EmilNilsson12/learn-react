import React from 'react';

class PlayerCard extends React.Component {
	state = {
		id: this.props.id,
		name: this.props.name,
		score: this.props.score,
	};

	handleScoreChange = async (evt) => {
		await this.setState({
			score: parseInt(evt.target.value, 10),
		});

		this.props.updateScore(this.state);
	};

	handleNameChange = (evt) => {
		console.log('Name will now update in state of this component');
		this.setState({
			name: evt.target.value,
		});
	};

	propNameChange = () => {
		console.log('Name will now update in App.js');
		this.props.updateName(this.state);
	};

	render() {
		return (
			<div id={this.state.name + '_with_ID_' + this.state.id}>
				<label>
					<input
						type='text'
						value={this.state.name}
						onChange={this.handleNameChange}
						onBlur={this.propNameChange}
					/>
					<input
						type='number'
						onChange={this.handleScoreChange}
						value={this.state.score}
					/>
				</label>
			</div>
		);
	}
}

export default PlayerCard;
