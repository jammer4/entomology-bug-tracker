import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Login.css';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userUrl = `https://entomology-bug-tracker.herokuapp.com/api/users/${username}`;
    
    async function login() {
        console.log(userUrl);
        const user = await axios.get(userUrl);
        if (user.data[0].password === password) {
            props.setLoggedIn(true);
            props.setName(user.data[0].name);
            props.setUserType(user.data[0].role);
            props.setUserID(user.data[0]._id);
        }
    }

    return (
        <div className="login">
            <div className="login-form-container">
                <h1>ENTOMOLOGY</h1>
                <form>
                    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                    <input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <Link to="/" onClick={login}><button type="button">Login</button></Link>
                </form>
            </div>
            <div className="users">
                <h1>Users</h1>
                <h2>Hulk Hogan, Submitter: username and password hh123</h2>
                <h2>Roddy Piper, Submitter: username and password rp123</h2>
                <h2>Bill Gates, Developer: username and password bg123</h2>
                <h2>Steve Jobs, Developer: username and password sj123</h2>
                <h2>Alan Turing, Developer: username and password at123</h2>
            </div>
        </div>
    );
}

export default Login;