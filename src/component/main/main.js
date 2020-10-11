import React from 'react';
import './main.scss';

var method = 'get'
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      results: '',
      url: '',
      method:''
    
    };
  }

  handelInput = (event) => {
    const url = event.target.value;
    console.log(event.target.value);
    this.setState({ url });
  };

  handleMethod = (e) =>{
    method = e.target.value;
   console.log("method from select",method,e.target.value);
  //  this.setState({ method });
 }
  handleClick = (e) => {
    const results = this.state.url;
    this.setState({ results ,method});
  };
  render() {
    return (
      <main>
        <div id="inputDiv" >
          <p>URL: </p>
        <input type="text" placeholder='https://localhost:3000/categories' onChange={this.handelInput} />
        <button onClick={this.handleClick}>Go!</button>
        </div>
        <form onClick={this.handleMethod} id='form'>
          <input type="radio" id="get" name="method" value="get" defaultChecked/>
          <label htmlFor="get">GET</label>
          <input type="radio" id="post" name="method" value="post"/>
          <label htmlFor="post">POST</label>
          <input type="radio" id="put" name="method" value="put"/>
          <label htmlFor="put">PUT</label>
          <input type="radio" id="delete" name="method" value="delete"/>
          <label htmlFor="delete">DELETE</label>
        </form>
        <div id="result">
        <p>{this.state.method} {this.state.results}</p>
        </div>
      </main>
    );
  }
}

export default Main;