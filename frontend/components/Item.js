import { Col, Row, Container, Label } from 'reactstrap';
import { FaRegFileAlt } from 'react-icons/fa';
import * as moment from 'moment'

const layoutStyle = {
  height: '90vh',
  border: '1px solid #DDD'
};

const Item = props => (
  <Container style={{ background: props.isSelected ? '#e2e2e2' : "#fff", border: '1px solid #e2e2e2' }}>
    <Row>
      <Col xs="4">
        <FaRegFileAlt size={30}  style={{    padding: 7, height: '100%', width: '100%'}}/>
      </Col>
      <Col xs="8">
        <Row>
          <Label style={{ fontWeight: 'bold', fontSize: 'small', textOverflow: 'ellipsis', margin: '10px 0px 0px' }}>{props.title}</Label>
        </Row>
        <Row>
          <Label style={{ fontSize: 'smaller', textOverflow: 'ellipsis', margin: '0px 0px 10px' }}>{`${props.isEdited ? "Edited" : "Created"} ${moment.unix(props.date / 1000).fromNow()}`}</Label>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Item;