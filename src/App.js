import React from 'react';
import Input from './input';
import TranslatedText from './TranslatedText';

class App extends React.Component {
	state = {
		inputText: "You're name",
	};

	saveNewText = (getText) => {
		this.setState({
			inputText: getText,
		});
	};

	render() {
		return (
			<>
				<h4>Skriv in text som du vill översätta från svenska:</h4>
				<Input inputText={this.state.inputText} getNewText={this.saveNewText} />
				<TranslatedText showText={this.state.inputText} />
			</>
		);
	}
}

export default App;
