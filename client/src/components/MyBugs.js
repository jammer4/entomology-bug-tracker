import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import MyBugsList from './MyBugsList';
import { UserContext } from '../App';

import '../styles/MyBugs.css';

function MyBugs() {  
  const user = useContext(UserContext);

  const [myBugs, setMyBugs] = useState([]);
  
  const url = 'https://entomology-bug-tracker.herokuapp.com/api/bugs/';
  
  async function getMyBugs() {
    const response = await axios.get(url);
    const filteredData = await response.data.filter(item => item.developer === user.userID);
    setMyBugs(filteredData);
  }
  
  useEffect(() => getMyBugs(), []);

  return (
    <div className='my-bugs'>
        <h1>My Bugs</h1>
        {myBugs.length < 1 ? <h2>No Bugs</h2> : <MyBugsList myBugs={myBugs} getMyBugs={getMyBugs} />}
    </div>  
  );
}

export default MyBugs;