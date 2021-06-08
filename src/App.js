import { Component } from 'react';
import Counter from './counter';

class App extends Component {
	state = {
		count: 0,
	};

	// Måste bindas för att funka
	handleClick = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	render() {
		return (
			<>
				<h1>Hello Wdsordfld!</h1>
				<h3>External counter</h3>
				<p>{this.state.count}</p>
				<div>
					<h4>Internal counter</h4>
					<Counter count={this.state.count} />
				</div>
				<button onClick={this.handleClick}>
					Click to increment count everywhere
				</button>
			</>
		);
	}
}

export default App;
