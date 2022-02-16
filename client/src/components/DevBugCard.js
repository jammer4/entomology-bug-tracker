import axios from 'axios';
import '../styles/DevBugCard.css';

function DevBugCard(props) {
    const bugID = props.bug._id;
    const deleteUrl = `http://localhost:3001/api/bugs/${bugID}`;
    const squashedUrl = 'http://localhost:3001/api/deadBugs';
    
    async function squash() {
        await axios.delete(deleteUrl);
        await axios.post(squashedUrl, props.bug);   
        props.getMyBugs();
    }
    
    return (
        <div className="dev-bug-card">
            <p>Description: {props.bug.description}</p>
            <p>Priority: {props.bug.priority}</p>
            <button onClick={squash}>Squash</button>
        </div>
    );
}

export default DevBugCard;