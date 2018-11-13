
import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';


class Links extends Component {
  state = {Links:[]}

  componentDidMount() {
    fetch('/Links')
      .then(res => res.json())
      .then(Links => this.setState({ Links }));
  }

  render() {
    return (
      <div>
      <div className="App-header">
        <h2 >Shorten your url</h2>
        <Input />
        <Button />
      </div>
        <h1 className="App-title">Links</h1>
          {this.state.Links.map(link =>
          <div key={link.id}>{link.short_url}</div>
          )}
      </div>
    );
  }
}

export default Links;
