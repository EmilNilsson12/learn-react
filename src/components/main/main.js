import React, { Component } from 'react';
import Greeting from '../greeting/greeting';

class Main extends Component {
	render() {
		return (
			<>
				<Greeting username={'Hellen'} />
				<Greeting username={'Sofie'} />
				<Greeting username={'Emma H'} />
				<Greeting username={'Johanna'} />
				<Greeting username={'Anna-Johanna'} />
				<Greeting username={'Martina'} />
				<Greeting username={'Ammi'} />
				<Greeting username={'Lina'} />
				<Greeting username={'Emma B'} />
				<Greeting username={'Hanna'} />
			</>
		);
	}
}
export default Main;
