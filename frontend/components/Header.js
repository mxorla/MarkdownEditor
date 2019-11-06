import Link from 'next/link';
import { Badge, Row, Col } from 'reactstrap';

 

const Header = (props) => (
  <div>
    <Row>
      <Col><h3>
        Markdown Editor
      </h3></Col>
      {props.links && props.links.map(link => (
        <Col><Link href={link.href}>
          {link.name}
        </Link></Col>
      ))}
    </Row>
  </div>
);

export default Header;