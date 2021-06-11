import React from 'react';

class Message extends React.Component {
	state = {
		outputHeading: this.props.outputHeading,
		outputAuthor: this.props.outputAuthor,
		outputTextArea: this.props.outputTextArea,
	};

	render() {
		return (
			<>
				<h2>{this.state.outputHeading}</h2>
				<p>{this.state.outputAuthor}</p>
				<p>{this.state.outputTextArea}</p>
			</>
		);
	}
}

export default Message;
