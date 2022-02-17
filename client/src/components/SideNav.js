import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../App';

import '../styles/SideNav.css';

function SideNav() {
  const user = useContext(UserContext);
  
  return (
    <div className='side-nav'>
        <h1>ENTOMOLOGY</h1>
        <ul>
          {user.userType === 'Submitter' ? <li><Link to="/new-bug">New Bug</Link></li>
            :<li><Link to="/my-bugs">My Bugs</Link></li>}
          <li><Link to="/">Live Bugs</Link></li>
          <li><Link to="/dead-bugs">Dead Bugs</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
    </div>  
  );
}

export default SideNav;