import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import {type Votes, type VoteType} from '../../types/votes'
import VoteOptions from '../VoteOptions/VoteOptions';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleVote(type: VoteType) {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  }

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  }

  return (
      <div className={css.app}>
        <CafeInfo/>
        <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true}/>
      </div>
  );
}

