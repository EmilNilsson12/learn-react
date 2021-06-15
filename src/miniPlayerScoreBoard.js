import React from 'react';
import MiniPlayerCard from './miniPlayerCard';

class MiniPlayerScoreBoard extends React.Component {
	render() {
		return (
			<div id='mini-player-scoreboard'>
				{[...this.props.players]
					.sort((a, b) => {
						return a.score < b.score ? 1 : -1;
					})
					.map((player) => {
						return (
							<MiniPlayerCard
								key={`${player.name}_with_ID_${player.id}`}
								id={player.id}
								name={player.name}
								score={player.score}
							/>
						);
					})}
			</div>
		);
	}
}

export default MiniPlayerScoreBoard;
