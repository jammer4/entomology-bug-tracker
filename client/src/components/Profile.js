import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import '../styles/Profile.css';

function Profile(props) {
  const userType = useContext(UserContext);
  
  return (
      <div className='profile'>
          <h1>Profile</h1>
          <p>Name: {props.name}</p>
          <p>Role: {userType}</p>
          <Link to="/"><button onClick={() => props.setLoggedIn(false)}>Logout</button></Link>
      </div>  
    );
}

export default Profile;