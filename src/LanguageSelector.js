import React from 'react';

class LanguageSelector extends React.Component {
	handleChange = (event) => {
		this.props.changeCurrentLanguage(event.target.value);
	};

	render() {
		return (
			<>
				<select
					value={this.props.currentLanuageCode}
					onChange={this.handleChange}
				>
					{this.props.supportedLanguages.map((language) => {
						return (
							<option key={language.code} value={language.code}>
								{language.language}
							</option>
						);
					})}
				</select>
			</>
		);
	}
}

export default LanguageSelector;
