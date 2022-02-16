import DevBugCard from './DevBugCard';
import '../styles/MyBugsList.css';

function MyBugsList(props) {
  return (
      <div className='my-bugs-list'>
          {props.myBugs.map(bug => (
            <DevBugCard key={bug._id} bug={bug} getMyBugs={props.getMyBugs}/>
          ))}
      </div>  
    );
}

export default MyBugsList;