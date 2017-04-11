import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <section>
        <h1>Voyage</h1>
        <div>
          {this.props.children}
        </div>
      </section>
    )
  }
}
