import React from "react";
import './history.scss';
// class History extends React.Component {
function History(props) {
  // render() { 
  console.log('props.children hissssssssssstory', props.children);
  console.log('props hissssssssssstory', props);

  return ( <ul className="list">{ props.children}</ul> );
  
  // }
 

}


export default History;