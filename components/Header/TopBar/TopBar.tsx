import { useState, useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { getHostApi } from '../../../pages/api/hosts';

export default function TopBar() {
  const [hosts, setHosts] = useState([]);

  useEffect(() =>{
    (async () => {
      const response = await getHostApi();
      setHosts(response || []);
    })()
  }, []);

  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <Grid.Column width={8} className="top-bar__left">
            <h2>LOGO</h2>
          </Grid.Column>
          <Grid.Column width={8} className="top-bar__right">
            <span>Item1</span>
            <span>Item2</span>
            <span>Item3</span>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}
