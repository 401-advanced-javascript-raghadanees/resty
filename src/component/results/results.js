import React from 'react';



function Results(props) {
  return (
    
    <pre className="results">
      {JSON.stringify( {headers: props.headers, count: props.count,  results: props.results }, null,5  )}
    </pre>
   
  );
}


export default Results;