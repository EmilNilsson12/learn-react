import React from 'react';

class CurrentScores extends React.Component {
	render() {
		return (
			<>
				<p>
					<strong>{this.props.scores.player1.name}</strong> has{' '}
					<strong>{this.props.scores.player1.score}</strong> points
				</p>
				<p>
					<strong>{this.props.scores.player2.name}</strong> has{' '}
					<strong>{this.props.scores.player2.score}</strong> points
				</p>
			</>
		);
	}
}

export default CurrentScores;
