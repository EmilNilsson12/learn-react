import React from 'react';
import './message.css';

class Message extends React.Component {
	render() {
		return (
			<div id='outputText'>
				<h2>{this.props.outputValues.header}</h2>
				<p>by: {this.props.outputValues.author}</p>
				<p>{this.props.outputValues.content}</p>
			</div>
		);
	}
}

export default Message;
