
/* eslint-disable no-undef */
import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Form from './component/form/form';
import Footer from './component/footer/footer';
import Header from './component/header/header.js';
import Results from './component/results/results.js';
import Help from './component/help/help';
import HistoryPage from './component/history-page/history-page';
// import History from './component/history/history.js';
// import If from './component/if/if';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
      results: null,
      headers: null,
      loading: false,
      savedRequests: JSON.parse(localStorage.getItem('history')) || [],
    };
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
    console.log('loading in toggleLoading app.js....', this.state.loading)
  }

  // url.......  https://swapi.dev/api/people/
  // url.......  https://swapi.dev/api/films/

  handelUpdate = (count, results, headers)=> {
    console.log('count from app.js ', count);
    console.log('results from app.js ', results);
    console.log('results from app.js ', headers);
    this.setState({count, results, headers});
  };

  render() {
    
    return (
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/">
        <Form loading={this.state.loading} handelUpdate={this.handelUpdate.bind(this)} toggle={this.toggleLoading.bind(this)}/>
          <Results loading={this.state.loading} count={this.state.count} results={this.state.results} headers={this.state.headers} />
          </Route>
          <Route exact path="/history">
          {/* <div>This is history page </div> */}
          <HistoryPage 
                savedRequests={this.state.savedRequests}
                handelUpdate = {this.handelUpdate.bind(this)}
                />
                <Results loading={this.state.loading} count={this.state.count} results={this.state.results} headers={this.state.headers} />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
            <Route>404 Page Not Found!</Route>
        </Switch>
        <Footer />
      </BrowserRouter>
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
