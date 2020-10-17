import React from 'react';
import './history-page.scss';

import { Redirect } from 'react-router-dom';

class HistoryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      savedRequests: [],
    };

  }


  handleClick (i) {
    //  this.props.toggle();
    console.log('savedRequests',this.props.savedRequests);
    console.log('savedRequests[i]',this.props.savedRequests[i]);

    let url = this.props.savedRequests[i].url;
    let options = {
      method : this.props.savedRequests[i].method,
      headers: { 'Content-Type': 'application/json'},
      body: this.props.savedRequests[i].body ? this.props.savedRequests[i].body : null,
    };
    this.fetchData(url, options);
   
  }

  save(){
    let savedRequests =  this.props.savedRequests;
    this.setState({savedRequests});
  }

  fetchData = async (url, options) => {
    let raw = await fetch(url, options);
    console.log('raw.......', raw);
    let data = await raw.json();
    console.log('data,,,,,,,,,', data);
    let count = data.count;
    let results = data.results;
    let headers = {};
    raw.headers.forEach((val, key) => headers[key] = val);
    console.log('raw.headers--------', raw.headers);
    this.props.handelUpdate(count, results, headers);
    // {this.props.loading == true} ? {this.props.loading = false} : {this.props.loading = false}
    // this.props.loading == true ? this.props.toggle() : console.log("loading")
    return <Redirect to='/history'/>;
      
  }
  render() {
    
    return (
        
      <>
        <aside className='savedRequestsAside'>

          <section className='savedRequests'>
            {this.save}
            {this.props.savedRequests.map((item,i) => {
              return(
                <li key={i} >
                  <button onClick={this.handleClick.bind(this,i)}>{item.method}</button>
                  <h3> <a>{item.url}</a>  </h3>
                </li>   
              );
            } )}
  
          </section>

        </aside>

      </>
    );
  }
}

  
export default HistoryPage;