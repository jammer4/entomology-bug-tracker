import DeadBugList from './DeadBugList';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/DeadBugs.css';

function DeadBugs() {
  const url = 'http://localhost:3001/api/deadBugs/';
  const [deadBugs, setDeadBugs] = useState([]);

  async function getDeadBugs() {
    const response = await axios.get(url);
    setDeadBugs(response.data);
  }
  
  useEffect(() => getDeadBugs(), []);

    return (
      <div className='dead-bugs'>
          <h1>Dead Bugs</h1>
          {deadBugs.length < 1 ? <h2>No Bugs</h2> : <DeadBugList bugs={deadBugs}/>}
      </div>  
    );
}

export default DeadBugs;