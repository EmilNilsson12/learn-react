import React from 'react';

class Input extends React.Component {
	state = {
		inputText: this.props.inputText,
	};

	onChange = async (evt) => {
		await this.setState({
			inputText: evt.target.value,
		});
	};

	onSubmit = (evt) => {
		evt.preventDefault();

		this.props.getNewText(this.state.inputText);
	};

	render() {
		return (
			<input
				type='text'
				value={this.state.inputText}
				onChange={this.onChange}
				onBlur={this.onSubmit}
			/>
		);
	}
}

export default Input;
