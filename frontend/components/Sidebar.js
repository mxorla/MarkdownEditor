import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Item from './Item'

import { Button, ListGroup, ListGroupItem } from 'reactstrap';


const layoutStyle = {
  maxHeight: '72vh',
  padding: '3px',
  overflowY: 'auto'
};



export default class Sidebar extends React.Component {
  constructor() {
    super();
  }
  state = { isOpen: false }



  render() {
    return (
      <div style={{
        height: '80vh', display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', background: '#fff', borderRadius: '8px 0px 0px 40px', border: '1px solid #DDD', marginRight: '2px'
      }}>
        <div style={layoutStyle}>
          {this.props.documents && this.props.documents.map(doc => (
            <div key={doc.id} onClick={() => this.props.onSelect(doc)}>
              <Item title={doc.title} date={doc.timestamp} isSelected={this.props.selectedId == doc.id} isEdited={doc.status == "EDITED"} />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
          <Link href="/p/[id]" as={`/p/new`}>
            <Button color="primary" size="lg">Create</Button>
          </Link>
        </div>

      </div>
    );
  }
}

Sidebar.getInitialProps = async function () {
  const res = await fetch('http://localhost:5000/api/document');
  const data = await res.json();

  console.log(`INDEX data fetched. Count: ${data.length}`);

  return {
    documents: data
  };
};