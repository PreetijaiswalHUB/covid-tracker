import React from 'react';
import "./AppStatus.css";
function App_status({ cases,recovered,deaths}) {
    return (
      <div className="app__stats">
       <p>
            Coronavirus Cases : <b>{cases}</b>
            </p>
            <p>
            Recovered : <b>{recovered}</b>
            </p>
            <p>
            Deaths : <b>{deaths}</b>
            </p>
          
      </div>
    );
  }
  
  export default App_status;