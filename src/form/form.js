import React from 'react';
import './form.css';

class Form extends React.Component {
	state = {
		author: this.props.author,
		header: this.props.header,
		content: this.props.content,
	};

	handleChange = (evt) => {
		console.log(evt);
		console.log(evt.target.id);

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
		console.log('Something submitted...');

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
						value={this.state.header}
						id='header'
						name='header'
						placeholder='The...'
					/>
				</label>
				<label>
					Namn
					<input
						onChange={this.handleChange}
						type='text'
						value={this.state.author}
						id='author'
						name='author'
						placeholder='Mr...'
					/>
				</label>
				<label>
					Meddelande
					<textarea
						onChange={this.handleChange}
						name='content'
						id='content'
						placeholder='Once upon a time...'
					></textarea>
				</label>
				<input type='submit' />
			</form>
		);
	}
}

export default Form;
