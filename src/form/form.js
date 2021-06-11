import React from 'react';
import './form.css';

class Form extends React.Component {
	state = {
		author: this.props.inputValues.author,
		header: this.props.inputValues.header,
		content: this.props.inputValues.content,
	};

	handleChange = (evt) => {
		switch (evt.target.id) {
			case 'header': {
				this.setState({
					header: evt.target.value,
				});
				break;
			}

			case 'author': {
				this.setState({
					author: evt.target.value,
				});
				break;
			}

			case 'content': {
				this.setState({
					content: evt.target.value,
				});
				break;
			}
		}
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
						id='header'
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
						id='author'
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
						id='content'
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
