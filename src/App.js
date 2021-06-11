import React from 'react';
import Form from './form/form';
import Message from './message/message';
import './App.css';

class App extends React.Component {
	state = {
		inputValues: {
			header: "You're title",
			author: "You're author",
			content: "You're content",
		},
	};

	saveNewText = (getText) => {
		console.log('Callback i App.js');
		this.setState({
			inputValues: getText,
		});
	};

	render() {
		return (
			<>
				<main>
					<Form
						inputValues={this.state.inputValues}
						getNewText={this.saveNewText}
					/>
					<Message
						outputHeading={this.state.inputValues.header}
						outputAuthor={this.state.inputValues.author}
						outputTextArea={this.state.inputValues.content}
					/>
				</main>
			</>
		);
	}
}

export default App;
