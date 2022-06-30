import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import List from './List';
import './stylesheets/App.scss'



class App extends Component {
  state = {
    interventionList: [
      { id: 1, date: "", name: "Nicolas", client: "Les jardins d'Ariana", observations: "RAS" },
      { id: 2, date: "", name: "Nicolas", client: "BeCom", observations: "vitre endommagée" }
    ]
  };
  addIntervention = intervention => {
    let interventions = [...this.state.interventionList, intervention];
    this.setState({
      interventionList: interventions
    });
  };
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={`${process.env.PUBLIC_URL}/img/logo-clean3000.png`} className="App-logo" alt="logo" />
        </header>

        <Form addIntervention={this.addIntervention} />

      </div>
    );
  }
}


export default App;
