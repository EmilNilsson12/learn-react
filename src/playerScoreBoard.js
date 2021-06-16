import React from 'react';
import PlayerCard from './playerCard';

class PlayerScoreBoard extends React.Component {
	render() {
		return (
			<>
				{this.props.players.map((player) => {
					return (
						<PlayerCard
							key={`${player.name}_with_ID_${player.id}`}
							id={player.id}
							name={player.name}
							score={player.score}
							updateScore={this.props.updateScore}
							updateName={this.props.updateName}
							deletePlayer={this.props.deletePlayer}
						/>
					);
				})}
			</>
		);
	}
}

export default PlayerScoreBoard;
