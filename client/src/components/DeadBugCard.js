import { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/DeadBugCard.css';

function DeadBugCard(props) {
    const userUrl = 'http://localhost:3001/api/users';
    const [devName, setDevName] = useState();
    
    async function getDevName() {
        const users = await axios.get(userUrl);
        const filteredData = await users.data.filter(user => user._id === props.bug.developer);
        const name = filteredData[0].name;
        setDevName(name);
    }

    useEffect(() => getDevName());
    
    return (
        <div className="dead-bug-card">
            <p>Description: {props.bug.description}</p>
            <p>Priority: {props.bug.priority}</p>
            <p>Developer: {devName}</p>
        </div>
    );
}

export default DeadBugCard;