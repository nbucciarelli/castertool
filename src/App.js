import React, { Component } from 'react';
import './App.css';

import Champion from './components/Champion';
import ChampionList from './components/Champion/List'
import championJson from "./10.4.1/data/en_US/championFull.json";
import Select from 'react-select';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

console.log(championJson.data['Aatrox']);
const options = Object.keys(championJson.data).map(name => { return {value: name, label: name} })
class App extends Component {
  state = {
    championsSelectedBlue: null,//cookies.get('championsSelectedBlue'),
    championsSelectedRed: null//cookies.get('championsSelectedRed')
  };
  handleChange = team => selectedOption => {

    this.setState({ [`championsSelected${team}`]: selectedOption });
    console.log(team)
    console.log(selectedOption)
    // cookies.set(`championsSelected${team}`, selectedOption, { path: '/' });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { championsSelectedRed, championsSelectedBlue } = this.state;

    return (
      <div className="App row">
        <div className="col-6 blue-team">
          <h1>Blue Team</h1>
          <Select
            value={championsSelectedBlue}
            onChange={this.handleChange('Blue')}
            options={options}
            isMulti
            className="col-12"
          />
          {(championsSelectedBlue ? 
            (<ChampionList champions={championsSelectedBlue} championJson={championJson}></ChampionList>) 
            : (<h1>No champions selected</h1>) 
          )}            
        </div>
        <div className="col-6 red-team">
          <h1>Red Team</h1>
          <Select
            value={championsSelectedRed}
            onChange={this.handleChange('Red')}
            options={options}
            isMulti
            className="col-12"
          />            
          {(championsSelectedRed ? 
            (<ChampionList champions={championsSelectedRed} championJson={championJson}></ChampionList>) 
            : (<h1>No champions selected</h1>) 
          )}
        </div>
      </div>
    )
  };
}

export default App;
