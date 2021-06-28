import React from 'react';

class TranslatedText extends React.Component {
	render() {
		return (
			<>
				<p>På {this.props.translatedTextLan}</p>
				<p>{this.props.translatedText}</p>
			</>
		);
	}
}

export default TranslatedText;
