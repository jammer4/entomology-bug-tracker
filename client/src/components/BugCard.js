import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/BugCard.css';

function BugCard(props) {
    const userUrl = 'https://entomology-bug-tracker.herokuapp.com/api/users';
    const [devName, setDevName] = useState();
    
    async function getDevName() {
        const users = await axios.get(userUrl);
        const filteredData = await users.data.filter(user => user._id === props.bug.developer);
        const name = filteredData[0].name;
        setDevName(name);
    }

    useEffect(() => getDevName());
    
    return (
        <div className="bug-card">
            <p>Description: {props.bug.description}</p>
            <p>Priority: {props.bug.priority}</p>
            <p>DeveloperID: {devName}</p>
        </div>
    );
}

export default BugCard;