import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import { addCard } from '../redux/actions'
import { getCards } from '../redux/selectors'

class Swimlane extends Component {
  constructor(props) {
    super(props);
  }

  handleNewTask = () => {
    this.props.addCard({title: "A new cool card", desc: "Look how cool this card is", lane: this.props.title});
  };

  render() {
    return (<div className="Swimlane">
      <h2>{this.props.title}</h2>
      {this.props.cards.map(cardData => cardData.lane === this.props.title ? <Card key={cardData.id} data={cardData} /> : null)}
      <button onClick={this.handleNewTask}>New Task</button>
    </div>)
  }
}

export default connect(state => ({ cards: getCards(state) }), { addCard })(Swimlane)
