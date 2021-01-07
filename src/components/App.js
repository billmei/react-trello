import './App.css';
import React, { Component } from 'react'
import Swimlane from './Swimlane'

// Allow creating boards
// Allow creating cards
// Allow editing cards
// Allow moving cards

export default function App() {
  return (
    <div className="App">
      <div className="Swimlanes">
        <Swimlane title="Todo"></Swimlane>
        <Swimlane title="Doing"></Swimlane>
        <Swimlane title="Done"></Swimlane>
        <button>New Swimlane</button>
      </div>
    </div>
  );
}

