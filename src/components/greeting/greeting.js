import React from 'react';

class Greeting extends React.Component {
	render() {
		return <p>Hello and Welcome {this.props.username}</p>;
	}
}

export default Greeting;
