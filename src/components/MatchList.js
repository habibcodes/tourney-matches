import React from 'react';
import Match from './Match';
// import matchData from '../data/matchData';

function MatchList(props) {
  // const oneMatch = props.matchData[0];
  // const parsedMatches = matchData.map(match => <Match  {...match} />);
  const {matchData} = props;
  
  const parsedMatches = matchData.map(match => <Match key={match.matchNumber} {...match} />);

  return(
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {/* Matches will be shown here */}
      {/* <Match {...oneMatch} /> */}
      {parsedMatches}
    </section>

  );
}

export default MatchList;