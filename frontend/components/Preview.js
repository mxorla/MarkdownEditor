import Markdown from 'react-markdown';

const layoutStyle = {
  height: '80vh',
  padding: '10px',
  border: '1px solid #DDD',
  background: '#fff',
  borderRadius:'0px 8px 8px 0px',
  overflow: 'auto'
};

const Preview = props => (
  <div style={layoutStyle}>
    <Markdown source={props.markdown}  />
  
  </div>
);

export default Preview;