
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
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
        key={link.id}
        long_url={link.long_url}
        short_url={link.short_url}
        />
    ));

    return (
    <div className="test">
      <h2 className="logo-name">URL shortener</h2>
      <div className="App-header">
        <Input className="input"/>
        <Button />
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Original URL</Table.HeaderCell>
              <Table.HeaderCell>Short URL</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {linkRows}
          </Table.Body>
        </Table>
      </div>

    </div>

    );
  }
}

export default Links;
