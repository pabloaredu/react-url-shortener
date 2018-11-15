import React from 'react'
import { Table } from 'semantic-ui-react'

export default  function TableRow (props) {
  return (
    <Table.Row>
      <Table.Cell collapsing>
        {props.long_url}
      </Table.Cell>
      <Table.Cell collapsing> {props.short_url} </Table.Cell>
      <Table.Cell collapsing textAlign='right'>
        {"Button"}
      </Table.Cell>
    </Table.Row>
  )
}
