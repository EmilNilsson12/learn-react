import { Component } from 'react';

class App extends Component {
	state = {
		time: new Date(),
	};

	componentDidMount() {
		this.timer = setInterval(() => {
			this.tick();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	componentDidUpdate() {
		console.log('Updated time');
	}

	tick() {
		this.setState({ time: new Date() });
	}

	render() {
		return (
			<>
				<h1>The current time is: {this.state.time.toLocaleString()}!</h1>
			</>
		);
	}
}

export default App;
