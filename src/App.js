import './App.css';
import React, { Component } from 'react'

const cards = [
  {id: 1, title: "Reticulate splines", desc: "Set up splines and reticulate them", lane: "Todo"}
]

function App() {
  return (
    <div className="App">
      <Swimlane title="Todo"></Swimlane>
      <Swimlane title="Doing"></Swimlane>
      <Swimlane title="Done"></Swimlane>
    </div>
  );
}

class Swimlane extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (<div>
      <h2>{this.props.title}</h2>
      {cards.map(cardData => cardData.lane === this.props.title ? <Card key={cardData.id} data={cardData} /> : null)}
    </div>)
  }
}


class Card extends Component {
  constructor(props) {
    super(props)

  }

  next() {

  }

  nextLabel() {
    switch (this.props.data.lane) {
      case "Todo":
        return "Start"
      case "Doing":
        return "Finish"
      case "Done":
        return "Delete"
    }
  }

  prev() {
    
  }

  prevLabel() {
    switch (this.props.data.lane) {
      case "Todo":
        return "Delete"
      case "Doing":
        return "Stop"
      case "Done":
        return "Start"
    }
  }


  render() {
    return (<div>
      <h3>{this.props.data.title}</h3>
      <p>{this.props.data.desc}</p>
      <button onClick={this.prev()}>{this.prevLabel()}</button>
      <button onClick={this.next()}>{this.nextLabel()}</button>
    </div>)
  }
}


export default App;
