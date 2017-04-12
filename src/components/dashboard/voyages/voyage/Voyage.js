import React, { Component } from 'react';

export default class Voyage extends Component {
  render() {
    const voyage = this.props.voyage;
    return (
      <div className="voyage-single">
        <header>
          <h1>{voyage.title}</h1>
          <hr />
        </header>
        <div className="description">
          {voyage.description}
        </div>

        <p className="info">Voyage du 21 Août au 30 Août 2016</p>

        <img
          className="cache"
          data-src="{voyage.image}"
          src="{voyage.image}"
          width="2200"
          alt="{voyage.title}"
        />

        <a href="/cassis" className="btn">Découvrir notre voyage</a>
      </div>
    );
  }
}
