import React, { Component } from 'react';
import './App.css';

import Champion from './components/Champion';
import championJson from "./dragontail-9.18.1/9.18.1/data/en_US/championFull.json";
import Select from 'react-select';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

console.log(championJson.data['Aatrox']);
const options = Object.keys(championJson.data).map(name => { return {value: name, label: name} })
class App extends React.Component {
  state = {
    championsSelectedBlue: cookies.get('championsSelectedBlue'),
    championsSelectedRed: cookies.get('championsSelectedRed')
  };
  handleChange = team => selectedOption => {
    this.setState({ [`championsSelected${team}`]: selectedOption });
    console.log(team)
    console.log(selectedOption)
    cookies.set(`championsSelected${team}`, selectedOption, { path: '/' });
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
          <ul className="list-group col-12">
            {championsSelectedBlue.map(champSelected => {
              return <Champion team={"blue"} data={championJson.data[champSelected.value]} key={champSelected.value}></Champion>
            })}  
          </ul>
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
          <ul className="list-group col-12">
            {championsSelectedRed.map(champSelected => {
              return <Champion team={"red"} data={championJson.data[champSelected.value]} key={champSelected.value}></Champion>
            })}  
          </ul>
        </div>
      </div>
    )
  };
}

export default App;
