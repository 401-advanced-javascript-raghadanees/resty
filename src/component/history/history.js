import React from 'react';

class History extends React.Component {

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
      body: this.props.savedRequests[i].method === 'get' || this.props.savedRequests[i].method === 'delete'
        ? null : JSON.stringify(this.props.body),
    };
    this.props.fetchData(url, options);
   
  }

  save(){
    let savedRequests =  this.props.savedRequests;
    this.setState({savedRequests});
  }

  render() {
    
    return (
        
      <>
        <aside>

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

  
export default History;