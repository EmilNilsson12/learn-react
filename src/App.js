import React from 'react';
import Input from './input';
import ShowText from './showText';

class App extends React.Component {
	state = {
		inputText: "You're name",
	};

	saveNewText = (getText) => {
		console.log('Callback i App.js');
		this.setState({
			inputText: getText,
		});
	};

	render() {
		return (
			<>
				<h1>Hej</h1>
				<Input inputText={this.state.inputText} getNewText={this.saveNewText} />
				<ShowText showText={this.state.inputText} />
			</>
		);
	}
}

export default App;
