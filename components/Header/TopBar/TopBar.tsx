import { Container, Grid } from 'semantic-ui-react';
export default function TopBar() {
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
