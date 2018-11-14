
import React, { Component } from 'react';
import { Icon, Table } from 'semantic-ui-react'
import Input from './Input';
import Button from './Button';
import TableRow from './TableRow';


class Links extends Component {
  state = {links:[]}


  componentDidMount() {
    fetch('/Links')
      .then(res => res.json())
      .then(links => this.setState({ links }));
  }

  render() {
    console.log("HELLO THERE", this.state.links)

    const linkRows = this.state.links.map((link) => (
      <TableRow
        long_url={link.long_url}
        short_url={link.short_url}
        />
    ));
    return (
      <div className="App-header">
        <h2 >Shorten your links</h2>
        <Input />
        <Button />
        <Table celled striped>
          <Table.Body>
            {linkRows}
          </Table.Body>
        </Table>
      </div>

    );
  }
}

export default Links;
