import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};

		// Bind to avoid arrow function methods
		this.handleClick = this.handleClick.bind(this);
	}

	// Måste bindas för att funka
	handleClick() {
		this.setState({
			count: this.state.count + 1,
		});
	}

	render() {
		return (
			<>
				<h1>Hello Wdsordfld!</h1>
				<h3>{this.state.count}</h3>
				<button onClick={this.handleClick}>Click to increment count</button>
			</>
		);
	}
}

export default App;
