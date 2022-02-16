import BugCard from './BugCard';

import '../styles/BugList.css';

function BugList(props) {
  return (
      <div className='bug-list'>
          {props.bugs.map(bug => (
              <BugCard key={bug._id} bug={bug} />
            ))}
      </div>  
    );
}

export default BugList;