import request from '@arangodb/request';

const { argv } = module.context;
const feed = argv[0];

const { BACKEND_URL } = module.context.configuration;
const PARSER_URL = `${BACKEND_URL}/feeds/${feed._key}/parse`;

const response = request({
  json: true,
  method: 'PUT',
  url: PARSER_URL,
});

if (response.statusCode >= 400) {
  throw `Could Not Update Feed: [${feed._id}]`;
}
