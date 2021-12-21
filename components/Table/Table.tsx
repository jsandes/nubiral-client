import { useEffect } from 'react';
import { Table } from 'semantic-ui-react';

interface HostsData {
  keysData: string[] | [];
  tableData: [] | [];
}
const TablePagination = ({keysData, tableData = []} : HostsData) => {
  const Capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  
  useEffect(() => {},[tableData]);

  const makeCell = (items: []) => items.map((item, index) => {
      return <Table.Cell key={index}>{item}</Table.Cell>
    });

  const makeRow = (tableData: []) => {
    if(!tableData) return <Table.Row><Table.Cell>No hay items</Table.Cell></Table.Row>;
    const table = tableData.map((items, index) => 
      <Table.Row key={index}>
        {makeCell(items)}
      </Table.Row>
    )   
    return table;   
  }

  return (
    <Table celled>
        <Table.Header>
          <Table.Row>
            {keysData ? 
              keysData.map((item, index) => 
              <Table.HeaderCell key={index}>{Capitalize(item)}</Table.HeaderCell>
              ) : <Table.HeaderCell>Labels</Table.HeaderCell>
            }
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {makeRow(tableData)}
        </Table.Body>
    </Table>
  )
}

export default TablePagination;
