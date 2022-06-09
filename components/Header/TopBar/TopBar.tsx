import { useState } from 'react';
import { Button, Container, Grid } from 'semantic-ui-react';
import Auth from '../../Auth';
import BasicModal from '../../Modal/BasicModal';

export default function TopBar() {
  const [showModal, setShowModal] = useState(false);
  const onCloseModal = () => setShowModal(false);

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
            <Button onClick={() => setShowModal(true)}>Register/Login</Button>
{ /*{             <BasicModal show={showModal} setShow={setShowModal}>
              <Auth onCloseModal={onCloseModal} /> }
            </BasicModal> */}
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}
