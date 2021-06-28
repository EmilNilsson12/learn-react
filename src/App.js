import React from 'react';
import Input from './input';
import TranslatedText from './TranslatedText';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
	state = {
		inputText: '',

		currentLanguage: {
			language: 'English',
			code: 'EN',
		},

		supportedLanguages: [
			{
				language: 'English',
				code: 'EN',
			},
			{
				language: 'German',
				code: 'DE',
			},
			{
				language: 'Danish',
				code: 'DA',
			},
		],
	};

	saveNewText = (getText) => {
		this.setState({
			inputText: getText,
		});
	};

	changeCurrentLanguage = (getLanguageCode) => {
		// log getLanguageCode
		console.log('Language in callback: ', getLanguageCode);

		// Find lanObj in supportedLanguages
		this.setState({
			currentLanguage: this.state.supportedLanguages.find(
				(obj) => obj.code === getLanguageCode
			),
		});
	};

	render() {
		return (
			<>
				<h4>Skriv in text som du vill översätta från svenska:</h4>
				<Input inputText={this.state.inputText} getNewText={this.saveNewText} />
				<LanguageSelector
					supportedLanguages={this.state.supportedLanguages}
					currentLanuageCode={this.state.currentLanguage.code}
					changeCurrentLanguage={this.changeCurrentLanguage}
				/>
				<TranslatedText
					translatedText={this.state.inputText}
					translatedTextLan={this.state.translatedTextLan}
				/>
			</>
		);
	}
}

export default App;
