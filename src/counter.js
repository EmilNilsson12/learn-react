import { Component } from 'react';

class Counter extends Component {
	render() {
		return <p>{this.props.count}</p>;
	}
}
export default Counter;
