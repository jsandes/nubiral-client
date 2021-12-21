import { useEffect } from 'react';
import { Table } from 'semantic-ui-react';

interface HostsData {
  keysData: string[] | [];
  tableData: [][] | [];
}
const TablePagination = ({keysData, tableData} : HostsData) => {
  const Capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  
  useEffect(() => {},[tableData]);
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
          {tableData ? 
            tableData.map(items => {
              console.log('items', items);
              <Table.Row>
                {items.map((i, index) => {
                  console.log('item', i);
                  <Table.Cell key={index}>{i}</Table.Cell>
                })}
              </Table.Row>      
            })
            : <Table.Cell>No hay items</Table.Cell>
          }
        </Table.Body>
    </Table>
  )
}

export default TablePagination;