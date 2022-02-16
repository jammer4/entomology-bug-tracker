import { useState, useEffect } from 'react';
import axios from 'axios';

import MyBugsList from './MyBugsList';

import '../styles/MyBugs.css';

function MyBugs(props) {  
  const url = 'http://localhost:3001/api/bugs/';
  const [myBugs, setMyBugs] = useState([]);

  async function getMyBugs() {
    const response = await axios.get(url);
    const filteredData = await response.data.filter(item => item.developer === props.userID);
    setMyBugs(filteredData);
  }
  
  useEffect(() => getMyBugs(), []);

  return (
    <div className='my-bugs'>
        <h1>My Bugs</h1>
        {myBugs.length < 1 ? <h2>No Bugs</h2> : <MyBugsList myBugs={myBugs} getMyBugs={getMyBugs}/>}
    </div>  
  );
}

export default MyBugs;