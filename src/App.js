import React from 'react';
import Form from './form/form';
import Message from './message/message';
import './App.css';

class App extends React.Component {
	state = {
		inputValues: {
			author: "You're title",
			header: "You're author",
			content: "You're cuntent",
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
				<h1>Hej</h1>
				<main>
					<Form
						inputValues={this.state.inputValues}
						getNewText={this.saveNewText}
					/>
					<Message />
				</main>
			</>
		);
	}
}

export default App;
