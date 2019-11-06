import { Col, Row, Container, Label } from 'reactstrap';
import { FaRegFileAlt } from 'react-icons/fa';
import * as moment from 'moment'

const iconStyle = {
  padding: 7, height: '100%', width: '100%'
};

const titleStyle = {
  fontWeight: 'bold', fontSize: 'small', textOverflow: 'ellipsis', margin: '10px 0px 0px'
};

const timeStyle = {
  fontSize: 'smaller', textOverflow: 'ellipsis', margin: '0px 0px 10px'
};

const Item = props => (
  <Container style={{ background: props.isSelected ? '#e2e2e2' : "#fff", border: '1px solid #e2e2e2' }}>
    <Row>
      <Col xs="4">
        <FaRegFileAlt size={30} style={iconStyle} />
      </Col>
      <Col xs="8">
        <Row>
          <Label style={titleStyle}>{props.title}</Label>
        </Row>
        <Row>
          <Label style={timeStyle}>{`${props.isEdited ? "Edited" : "Created"} ${moment.unix(props.date / 1000).fromNow()}`}</Label>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Item;