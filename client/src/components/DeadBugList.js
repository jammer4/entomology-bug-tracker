import DeadBugCard from './DeadBugCard';

import '../styles/DeadBugList.css';

function DeadBugList(props) {
  return (
      <div className='dead-bug-list'>
          {props.bugs.map(bug => (
              <DeadBugCard key={bug._id} bug={bug} />
            ))}
      </div>  
    );
}

export default DeadBugList;