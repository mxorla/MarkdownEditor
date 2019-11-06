import Sidebar from '../components/Sidebar';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'reactstrap';
import * as superagent from 'superagent';
import Layout from '../components/Layout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
const colStyle = { paddingLeft: 0, paddingRight: 0 }
const rowButtonsStyle = { marginTop: 15 }
const colButtonsStyle = { size: 1, offset: 2 }

export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    title: this.props.documents[0] && this.props.documents[0].title,
    markdown: this.props.documents[0] && this.props.documents[0].markdown || '',
    selectedId: this.props.documents[0] && this.props.documents[0].id || '',
    documents: this.props.documents
  };

  handleChange = (markdown) => {
    this.setState({
      markdown: markdown
    });
  };

  handleSelect = (document) => { 
    this.setState({
      selectedId: document.id,
      title: document.title,
      markdown: document.markdown
    });
  };

  handleEdition = async () => {
    var self = this;
    const { selectedId, title, markdown } = this.state;
    if (selectedId) {
      await superagent.put(`http://localhost:5000/api/document/${selectedId}`)
        .send({ title, markdown })
        .then(async res => {
          const resp = await MarkdownEditor.getInitialProps()
          toast.success(<this.Msg title={title} subtitle="Edited successfully!" />, { autoClose: 2000 });
          self.setState({
            documents: resp.documents

          });
        }).catch(() => {
          toast.error("Oops something wrong!", { autoClose: 2000 });
        });
    }
  }



  handleDelete = async () => {
    var self = this;
    const { selectedId, title } = this.state;
    if (selectedId) {
      await superagent.del(`http://localhost:5000/api/document/${selectedId}`)
        .then(async res => {
          const resp = await MarkdownEditor.getInitialProps()
          toast.success(<this.Msg title={title} subtitle="Deleted successfully!" />, { autoClose: 2000 });
          const document = resp.documents[0];
          self.setState({
            documents: resp.documents,
            selectedId: document && document.id,
            title: document ? document.title : '',
            markdown: document ? document.markdown : ''
          });
        }).catch(() => {
          toast.error("Oops something wrong!", { autoClose: 2000 });
        });
    }
  }

  Msg = ({ title, subtitle }) => (
    <div>
      <h5>{title}</h5>
      <h6>{subtitle}</h6>
    </div>
  )

  render() {
    return (
      <Layout>
        <Row>
          <Col xs="2" style={colStyle}>
            <Sidebar documents={this.state.documents} selectedId={this.state.selectedId} onSelect={this.handleSelect} />
          </Col>
          <Col xs="5" style={colStyle}>
            <Editor markdown={this.state.markdown} onChange={this.handleChange} />
          </Col>
          <Col xs="5" style={colStyle}>
            <Preview markdown={this.state.markdown} />
          </Col>
        </Row>

        <Row style={rowButtonsStyle}>
          <Col xs={colButtonsStyle}>
            <Button color="primary" block onClick={this.handleEdition}>Save</Button>
          </Col>
          <Col xs="1">
            <Button color="danger" block onClick={this.handleDelete}>Delete</Button>
          </Col>
        </Row>
      </Layout>
    );
  }
}

MarkdownEditor.getInitialProps = async function () {


  const res = await fetch(`http://localhost:5000/api/document`);
  const data = await res.json();

  console.log(`INDEX data fetched. Count: ${data.length}`);

  return {
    documents: data
  };
};