import { Input } from 'reactstrap';

const layoutStyle = {
  height: '80vh',
  padding: '10px',
  border: '1px solid #DDD',
  margin: '0px 4px 0px 2px',
  background: '#fff'
};

const textareaStyle = {
  width: '100%',
  height: '100%',
  resize: 'none',
  border: 'none'
}

export default class Editor extends React.Component {
  render() {
    return (
      <div style={layoutStyle}>
        <Input type="textarea" style={textareaStyle} value={this.props.markdown} onChange={e => this.props.onChange(e.target.value)} />
      </div>

    )
  }
}
