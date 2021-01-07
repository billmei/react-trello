import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteCard } from '../redux/actions'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  delete = () => {
    this.props.deleteCard(this.props.data.id)
  }

  render() {
    return (<div className="Card">
      <h3>{this.props.data.title}</h3>
      <p>{this.props.data.desc}</p>
      <button onClick={this.delete}>Delete</button>

    </div>)
  }
}

export default connect(null, { deleteCard })(Card)
