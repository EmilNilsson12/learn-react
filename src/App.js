import React from 'react';
import Input from './input';
import TranslatedText from './TranslatedText';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
	state = {
		inputText: '',

		outputText: '',

		translatingFrom: 'sv',

		currentLanguage: {
			language: 'Engelska',
			code: 'en',
		},

		supportedLanguages: [
			{
				language: 'Engelska',
				code: 'en',
			},
			{
				language: 'Tyska',
				code: 'de',
			},
			{
				language: 'Danska',
				code: 'da',
			},
		],
	};

	saveNewText = (getText) => {
		this.setState({
			inputText: getText,
		});
	};

	changeCurrentLanguage = (getLanguageCode) => {
		this.setState({
			currentLanguage: this.state.supportedLanguages.find(
				(obj) => obj.code === getLanguageCode
			),
		});
	};

	async componentDidUpdate() {
		const data = await fetch(
			`https://api.mymemory.translated.net/get?q=${this.state.inputText}!&langpair=${this.state.translatingFrom}|${this.state.currentLanguage.code}`
		).then((res) => res.json());
		console.log(data);
		this.setState({
			outputText: data.responseData.translatedText,
		});
	}

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
					translatedText={this.state.outputText}
					translatedTextLan={this.state.currentLanguage.language}
				/>
			</>
		);
	}
}

export default App;
