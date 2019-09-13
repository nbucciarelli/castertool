import React, { Component } from 'react';
import Champion from './'

class ChampionList extends Component {
  render() {
    return (
      <ul className="list-group col-12">
        {this.props.champions.map(champSelected => {
          return <Champion team={"blue"} data={this.props.championJson.data[champSelected.value]} key={champSelected.value}></Champion>
        })}  
      </ul>
    );
  }
}

export default ChampionList