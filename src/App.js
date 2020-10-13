
/* eslint-disable no-undef */
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './component/form/form';
import Footer from './component/footer/footer';
import Header from './component/header/header.js';
import Results from './component/results/results.js';
import History from './component/history/history.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
      results: [],
      headers: [],
      url:'',
      method:'',
      allInput:[],
    };
  }

  // url.......  https://swapi.dev/api/people/
  handelUpdate = async (url ,allInput )=> {
    console.log('url from app.js ', url);
    console.log('allInput from app.js ', allInput);
    let raw = await fetch(url);
    let data = await raw.json();
    this.setState({headers: raw.headers, results: data.results, count: data.count });
    console.log('allInput handelUpdate',allInput);
    this.setState({allInput});
  };

  render() {
    let newAllInput = this.state.allInput.map((item, i)=> <li key={i} >{item.url}</li>);
    console.log('allInput from app render', newAllInput);
    return (
      <React.Fragment>
        <Header />
        <Form handelUpdate={this.handelUpdate}/>
        <Results headers={this.state.headers} count={this.state.count} results={this.state.results} />
        <History check="hi"> {this.allInput} </History>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;


// const Header = () => {
//   return (
//     <header>
//       <h1>RESTy</h1>
//     </header>
//   )
// };
// const Footer = () => <footer>&copy 2020</footer>
// //Main
// var method = 'get'
// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { results: '',url: '',method:'' };
//   }
//   handelInput = (e) => {
//     const url = e.target.value;
//     console.log(e.target.value);
//     this.setState({ url });
//   };
//   handleMethod = (e) =>{
//     method = e.target.value;
//    console.log("method from select",method,e.target.value);
//   //  this.setState({ method });
//  }
//   handleClick = (e) => {
//     const results = this.state.url;
//     this.setState({ results ,method});
//   };
//   render() {
//     return (
//       <main className="main">
//         <div>
//           <p>URL :</p>
//         <input type="text" onChange={this.handelInput} />
//         <button onClick={this.handleClick}>Go</button>
//         </div>
//         <form onClick={this.handleMethod}>
//           <input type="radio" id="get" name="method" value="get" defaultChecked/>
//           <label htmlFor="get">Get</label>
//           <input type="radio" id="post" name="method" value="post"/>
//           <label htmlFor="post">Post</label>
//           <input type="radio" id="put" name="method" value="put"/>
//           <label htmlFor="put">Put</label>
//           <input type="radio" id="delete" name="method" value="delete"/>
//           <label htmlFor="delete">Delete</label>
//         </form>
//         <div id="result">
//         <p>{this.state.method} {this.state.results}</p>
//         </div>
//       </main>
//     );
//   }
// }
