const algoliasearch = require('algoliasearch');



// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {

  const { event: { op, data }, table: { schema, name } } = event.body;

  return {
    statusCode: 200,
    body: event.body
    // // more keys you can return:
    // headers: { "headerName": "headerValue", ... },
    // isBase64Encoded: true,
  }

  /*
  const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
  const ALGOLIA_ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY;

  var client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);
  var index = client.initIndex('test_LIKBAY');

  if (op === 'INSERT' && name === 'book') {
    index.addObjects([data.new], function(err, content) {
      if (err) {
        console.error(err);
        res.json({error: true, data: err});
        return;
      }
      console.log(content);
      res.json({error: false, data: content});
    });
  } else {
    // ignore if the trigger name is not matched
    res.json({error: false, data: {message: 'ignored event'}});
  }

  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
  */
}

module.exports = { handler }
