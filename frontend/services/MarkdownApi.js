import * as superagent from 'superagent';

export default class MarkdownApi extends React.Component{
 async fetchDocumentEntries() {
    return superagent.get(`http://localhost:5000/api/document`)
  }
}