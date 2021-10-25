import React from 'react';
import Player from './Player';

function PlayerList(props) {
  // const onePlayer = props.parsedPlayerData[0];
  const {parsedPlayerData} = props;
  console.log(props);
  const parsedPlayers = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />);

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {/* <Player {...onePlayer} /> */}
      {parsedPlayers}
    </section>
  );
}

export default PlayerList;