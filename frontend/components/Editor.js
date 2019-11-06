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
const placeholder = `# Welcome to Markdown Editor!
#### add your markdown
you can Create | Edit | Delete
`

export default class Editor extends React.Component {
  render() {
    return (
      <div style={layoutStyle}>
        <Input type="textarea" style={textareaStyle} value={this.props.markdown} placeholder={placeholder} onChange={e => this.props.onChange(e.target.value)} />
      </div>

    )
  }
}
