import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../App';

import '../styles/Profile.css';

function Profile(props) {
  const user = useContext(UserContext);
  
  return (
      <div className='profile'>
          <h1>Profile</h1>
          <p>Name: {user.name}</p>
          <p>Role: {user.userType}</p>
          <Link to="/"><button onClick={() => props.setLoggedIn(false)}>Logout</button></Link>
      </div>  
    );
}

export default Profile;