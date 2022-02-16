import { useState, useEffect } from 'react';
import axios from 'axios';

import BugList from './BugList';

import '../styles/LiveBugs.css';

function LiveBugs() {  
  const url = 'https://entomology-bug-tracker.herokuapp.com/api/bugs/';
  const [liveBugs, setLiveBugs] = useState([]);

  async function getLiveBugs() {
    const response = await axios.get(url);
    setLiveBugs(response.data);
  }
  
  useEffect(() => getLiveBugs(), []);

  return (
    <div className='live-bugs'>
        <h1>Live Bugs</h1>
        {liveBugs.length < 1 ? <h2>No Bugs</h2> : <BugList bugs={liveBugs}/>}
    </div>  
  );
}

export default LiveBugs;