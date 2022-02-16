import NewBugForm from './NewBugForm';

import '../styles/NewBug.css';

function NewBug() {
    return (
      <div className='new-bug'>
          <h1>New Bug</h1>
          <NewBugForm/>
      </div>  
    );
}

export default NewBug;