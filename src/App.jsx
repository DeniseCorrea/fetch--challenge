import React, { Component } from 'react';
import './App.css';
import  GenerateChuckNorris  from  './GenerateChuckNorris';
import  DisplayChuckNorris  from  './DisplayChuckNorris';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chuck:  sampleChuck
    };
  }

  getChuck() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response  =>  {
        let resposta = response.json();
        return resposta;
      })
      .then(data  => {
        this.setState({
          chuck:  data,
        });
    });
}

  render() {
    return (
      <div>
        <GenerateChuckNorris  selectChuck={() =>  this.getChuck()} />
        <DisplayChuckNorris  chuck={this.state.chuck}  />
      </div>
    );
  }
}

const  sampleChuck = {
  icon_url : "",
  id : "",
  url : "",
  value : "",
};

export default App;
