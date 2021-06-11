import React from 'react';
import './message.css';

class Message extends React.Component {
	render() {
		return (
			<div id='outputText'>
				<h2>{this.props.outputHeading}</h2>
				<p>by: {this.props.outputAuthor}</p>
				<p>{this.props.outputTextArea}</p>
			</div>
		);
	}
}

export default Message;
