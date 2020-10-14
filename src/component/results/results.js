import React from 'react';
// import If from '../if/if';
import './results.scss';
import { If, Then, Else } from '../if/if.js';
// import JSONPretty from 'react-json-pretty';
import ReactJson from 'react-json-view';

class Results extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {

    ////theme="Adventure Time" 
    // console.log('this.proops from result.js >>>>>>>>>', this.props);
      return (
          <section>
              <If condition={!this.props.loading}>
                  <Then>
                      <ReactJson src={this.props} theme="monokai" />  
                      

                  </Then>
                  <Else>

                      <div className="about">
                          <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
                              <span className="icon"></span>
                          </a>
                          <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
                              <span className="icon"></span>
                          </a>
                          <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
                              <span className="icon"></span>
                          </a>
                          <a className="bg_links logo"></a>
                      </div>

                      <div className="content">
                          <div className="loading">
                              <p>loading</p>
                              <span></span>
                          </div>
                      </div>
                  </Else>
              </If>
          </section>
      )
  }
}

export default Results;

// function Results(props) {
// console.log('props.results   resuts.js', props.results);
//   return(
//     <If condition={props}>
//       <div>
//         <section className='result'>
//           <h3> Count: {props.Count}</h3>
//           <h3> Headers:  </h3>
//           <div> <JSONPretty data ={props.headers} /></div>
//           <h3> Results: </h3>
//           <ul>
//             {props.results.map(result => {
//               return( 
//                 <li key={result.name}> <JSONPretty data= {result}/></li>

//               );
//             })}
//           </ul>

//         </section>
//       </div>
//     </If>
//   );

// }

// export default Results;