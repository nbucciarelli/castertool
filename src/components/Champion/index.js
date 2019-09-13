import React, { Component } from 'react';

class Champion extends Component {
  buildImage() {
    const { group, full } = this.props.data.image;
    return `./img/${group}/${full}`
  }
  render() {
    // console.log(this.buildImage());
    console.log(this.props.data)
    const classNames = `list-group-item`;
    return (
      <li className={classNames}>
        <div className="row">
          <img src={require(`${this.buildImage()}`)} alt={this.props.data.name} className="col-4"/>
          <ul className="col-7">
            <li>Passive: {this.props.data.passive.name}</li>
            <li>Q: {this.props.data.spells[0].name}</li>
            <li>W: {this.props.data.spells[1].name}</li>
            <li>E: {this.props.data.spells[2].name}</li>
            <li>R: {this.props.data.spells[3].name}</li>
          </ul> 
        </div>
      </li>
    );
  }
}


export default Champion