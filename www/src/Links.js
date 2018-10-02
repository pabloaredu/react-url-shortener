
import React, { Component } from 'react';


class Links extends Component {
  state = {Links:[]}

  componentDidMount() {
    fetch('/Links')
      .then(res => res.json())
      .then(Links => this.setState({ Links }));
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Links</h1>
        {this.state.Links.map(link =>
          <div key={link.id}>{link.linkname}</div>
        )}
      </div>
    );
  }
}

export default Links;
