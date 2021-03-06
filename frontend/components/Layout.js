
import Header from './Header';
import { Container } from 'reactstrap';

const layoutStyle = {
  maxWidth: '90%', paddingTop: 20, paddingBottom: 20
};

const Layout = (props) => (

  <Container style={layoutStyle}>
    <Header links={props.links} />
    {props.children}
    <style jsx global>{`
      body { 
        background: #f2f2f2;
      }
    `}</style>
  </ Container>

);

export default Layout;