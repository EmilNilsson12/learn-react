import React from 'react';

class NewPlayerForm extends React.Component {
	state = {
		name: '',
	};

	handleNameChange = (evt) => {
		this.setState({
			name: evt.target.value,
		});
	};

	handleSubmit = (evt) => {
		evt.preventDefault();

		if (this.state.name !== '') {
			document.getElementById('new-player-input').value = '';

			this.props.addNewPlayer(this.state.name);
		}
	};
	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<input
						id='new-player-input'
						type='text'
						onChange={this.handleNameChange}
						placeholder='New player'
					/>
					<input type='submit' value='Add new player' />
				</form>
			</>
		);
	}
}

export default NewPlayerForm;
