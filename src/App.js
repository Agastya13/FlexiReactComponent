import React,{Component} from 'react';
import Flexi from './flexi';
import Hello from './Hello';

const flexiConfig = {
  items: [
      {
        "name": "person_name",
        "label": "Person's Name",
        "type": 'TextField',
      },
      {
        "name": "states",
        "label": "Person's state",
        "type": "DropDown",
            "values": [
            "Maharashtra",
            "Kerala",
            "Tamil Nadu"
            ]
      }
    ]
};



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Person ",
      place: 'Place Name',      
    };
  }

  onFlexSubmit = (val) => {
    this.setState({ name: val.name, place: val.dd });
  }

  render() {
    return (
      <div>
        <Flexi onSubmitFn={this.onFlexSubmit} config={flexiConfig.items} />
        <Hello name={this.state.name} place={this.state.place} />
      </div>
    );
  }
}