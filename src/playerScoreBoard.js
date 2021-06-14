import React from 'react';
import PlayerCard from './playerCard';

class PlayerScoreBoard extends React.Component {
	state = {
		players: this.props.players,
	};

	render() {
		return (
			<>
				{this.state.players.map((player) => {
					return (
						<PlayerCard
							key={`${player.name}_with_ID_${player.id}`}
							id={player.id}
							name={player.name}
							score={player.score}
							updateScore={this.props.updateScore}
							updateName={this.props.updateName}
						/>
					);
				})}
			</>
		);
	}
}

export default PlayerScoreBoard;
