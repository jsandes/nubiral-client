import { useEffect } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

interface HostsData {
  keys: string[];
  values: string[];
}
const TablePagination = (data: HostsData) => {
  const Capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  
  useEffect(() => {},[data]);

  return (
    <Table celled>
        <Table.Header>
          <Table.Row>
            {data.keys ? 
              data.keys.map(item =>
              <Table.HeaderCell>{Capitalize(item)}</Table.HeaderCell>
              ) : <Table.HeaderCell>Labels</Table.HeaderCell>
            }
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            {data.values ? 
              data.values.map(item =>
                <Table.Cell>{item}</Table.Cell>
              ) : <Table.Cell>No hay items</Table.Cell>
            }
          </Table.Row>      
        </Table.Body>
    </Table>
  )
}

export default TablePagination;