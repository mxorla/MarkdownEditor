import * as superagent from 'superagent';
import { Button, FormGroup, Form, Label, Input, Row, Col } from 'reactstrap';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Router from 'next/router';


export default class AddOrUpdate extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeMarkdown = this.handleChangeMarkdown.bind(this);
  }
  state = {}
  handleClick = async () => {
     const { title, markdown } = this.state;
    await superagent.post(`http://localhost:5000/api/document`)
      .send({ title, markdown })
      .then(res => {
        Router.replace('/p/new', '/');
      })
  }

  handleClose() {
    Router.replace('/p/new', '/');
  }

  handleChangeTitle(title) {
    this.setState({ title });
  }

  handleChangeMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    return (
      <Layout>
        <Form>
          <FormGroup>
            <Label>Title</Label>
            <Input type="text" value={this.state.title} placeholder="add a title" onChange={e => this.handleChangeTitle(e.target.value)} />
          </FormGroup>

          <FormGroup>
            <Label >Markdown</Label>
            <Input type="textarea" style={{height:300, resize:'none'}} value={this.state.markdown} placeholder="add a markdown" onChange={e => this.handleChangeMarkdown(e.target.value)} />
          </FormGroup>
        </Form>
        <Row>
          <Col xs="1">
            <Button color="primary" onClick={this.handleClick}>Save</Button>
          </Col>
          <Col xs="1">
            <Button color="danger" block onClick={this.handleClose}>Cancel</Button>
          </Col>
        </Row>

      </Layout>
    );
  }
};