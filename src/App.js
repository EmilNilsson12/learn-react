import React from 'react';
import Main from './components/main/main';
import Header from './components/header/header';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Main />
			</div>
		);
	}
}
export default App;
