import { useEffect } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

interface HostsData {
  keysData: string[] | [];
  tableData: string[] | [];
}
const TablePagination = ({keysData, tableData} : HostsData) => {
  const Capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  
  useEffect(() => {},[tableData]);
  console.log('data', tableData);
  return (
    <Table celled>
        <Table.Header>
          <Table.Row>
            {keysData ? 
              keysData.map(item =>
              <Table.HeaderCell key={item}>{Capitalize(item)}</Table.HeaderCell>
              ) : <Table.HeaderCell>Labels</Table.HeaderCell>
            }
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            {tableData ? 
              tableData.map(item =>
                <Table.Cell key={item}>{item}</Table.Cell>
              ) : <Table.Cell>No hay items</Table.Cell>
            }
          </Table.Row>      
        </Table.Body>
    </Table>
  )
}

export default TablePagination;