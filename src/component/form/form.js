import React from 'react';
import './main.scss';
import History from '../history/history';
import { If, Then} from '../if/if.js';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      method: '',
      savedRequests: JSON.parse(localStorage.getItem('history')) || [],
      body: null,
    };
  }
  // getFromLocal = () =>{
  //   var savedRequests = JSON.parse(localStorage.getItem('history')) || [];
  //   this.setState({savedRequests});
  //   console.log('savedRequests',savedRequests);
  //   this.props.toggle();
  // }


  handelInput = (event) => {
    let url = event.target.value;
    console.log('event.target.value > url', event.target.value);
    this.setState({ url }); //rerender
  }


  handleMethod = (e) => {
    let method = e.target.value;
    console.log('method from select', method, e.target.value);
    this.setState({ method });
  }

  handelBody = (e) => {
    let body = e.target.value;
    this.setState({ body });
  }

  handleClick = async (e) => {
    e.preventDefault();
    this.props.toggle();

    this.saveToLocalStorage();
    let url = this.state.url;
    let options = {
      method: this.state.method,
      headers: { 'Content-Type': 'application/json' },
      body: this.state.method === 'get' || this.state.method === 'delete'
        ? null : JSON.stringify(this.state.body),
    };
    this.fetchData(url, options);

  }

  saveToLocalStorage = () => {
    // this.getFromLocal();
    this.state.savedRequests.push(
      {
        method: this.state.method,
        url: this.state.url,
      });
    localStorage.setItem('history', JSON.stringify(this.state.savedRequests));
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
    this.props.loading == true ? this.props.toggle() : console.log("loading")

      
  }


  render() {
    return (
      <main>
        <div id="inputDiv" >
          <p>URL: </p>
          <input type="text" placeholder='https://localhost:3000/categories' onChange={this.handelInput} />
          <button onClick={this.handleClick}>Go !</button>
        </div>
        <form id='form'>
          <input onClick={this.handleMethod} type="radio" id="get" name="method" value="get" defaultChecked />
          <label htmlFor="get">GET</label>

          <input onClick={this.handleMethod} type="radio" id="post" name="method" value="post" />
          <label htmlFor="post">POST</label>

          <input onClick={this.handleMethod} type="radio" id="put" name="method" value="put" />
          <label htmlFor="put">PUT</label>

          <input onClick={this.handleMethod} type="radio" id="delete" name="method" value="delete" />
          <label htmlFor="delete">DELETE</label>
        </form>
        <textarea onChange={this.handelBody}></textarea>

        <History savedRequests={this.state.savedRequests} fetchData={this.fetchData} body={this.state.body} />

      </main>
    );
  }
}

export default Form;