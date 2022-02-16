import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/NewBugForm.css';

function NewBugForm() {
    const [description, setDescription] = useState('No description');
    const [priority, setPriority] = useState('Low');
    const [devID, setDevID] = useState('6202a5beb555f18321504fdf');
    const [userList, setUserList] = useState([]);

    const bugUrl = 'https://entomology-bug-tracker.herokuapp.com/api/bugs';
    
    async function submitBug() {
        await axios.post(bugUrl, {
            description: description,
            priority: priority,
            developer: devID
        })
    }

    const userUrl = 'https://entomology-bug-tracker.herokuapp.com/api/users';

    async function getUsers() {
        const response = await axios.get(userUrl);
        setUserList(response.data);
    }
      
    useEffect(() => getUsers(), []);

    const handleOnChange = e => {
        setDevID(e.target.value)
    }
    
    return (
        <div className='new-bug-form'>
            <form>
                <label>Description: </label><br/>
                <textarea onChange={e => setDescription(e.target.value)}></textarea><br/>
                <label>Priority: </label><br/>
                <select name="priority" id="priority" onChange={e => setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Emergency">Emergency</option>
                </select><br/>
                <label>Developer: </label><br/>
                <select id="developer" onChange={handleOnChange}>
                    {userList.filter(user => user.role === 'Developer').map(dev => (
                        <option key={dev._id} name={dev.name} value={dev._id}>{dev.name}</option>
                    ))}
                </select><br/>
                <button type="reset" onClick={() => submitBug()}>Add</button>
            </form>
        </div>
    );
}

export default NewBugForm;