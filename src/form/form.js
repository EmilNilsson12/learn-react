import React from 'react';
import './form.css';

class Form extends React.Component {
	state = {
		author: this.props.inputValues.author,
		header: this.props.inputValues.header,
		content: this.props.inputValues.content,
	};

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	handleSubmit = (evt) => {
		evt.preventDefault();

		this.props.getNewText(this.state);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} id='user-form'>
				<label>
					Rubrik
					<input
						onChange={this.handleChange}
						type='text'
						name='header'
						placeholder='The...'
						value={this.state.header}
					/>
				</label>
				<label>
					Namn
					<input
						onChange={this.handleChange}
						type='text'
						name='author'
						placeholder='Mr...'
						value={this.state.author}
					/>
				</label>
				<label>
					Meddelande
					<textarea
						onChange={this.handleChange}
						name='content'
						placeholder='Once upon a time...'
						value={this.state.content}
					></textarea>
				</label>
				<input type='submit' />
			</form>
		);
	}
}

export default Form;
