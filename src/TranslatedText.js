import React from 'react';

class TranslatedText extends React.Component {
	render() {
		return (
			<>
				<p>
					På <strong>{this.props.translatedTextLan}:</strong>
				</p>
				<p>{this.props.translatedText}</p>
			</>
		);
	}
}

export default TranslatedText;
