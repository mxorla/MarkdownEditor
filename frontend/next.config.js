const withCSS = require('@zeit/next-css')
const service = require('./services/MarkdownApi');


module.exports = withCSS({

  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
    };
     const res = await service.fetchDocumentEntries()
    // const data = await res.json();
     
    // data.forEach(d => {
    //   console.log({ page: '/p/[id]', query: { id: d.id } });
    // });

    return paths;
  }
})