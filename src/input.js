import React from 'react';

class Input extends React.Component {
	state = {
		inputText: this.props.inputText,
	};

	onChange = (evt) => {
		console.log('Something changed...');
		this.setState({
			inputText: evt.target.value,
		});
	};

	onSubmit = (evt) => {
		evt.preventDefault();
		console.log('Something submitted...');

		this.props.getNewText(this.state.inputText);
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input
					type='text'
					value={this.state.inputText}
					onChange={this.onChange}
				/>
				<input type='submit' />
			</form>
		);
	}
}

export default Input;
