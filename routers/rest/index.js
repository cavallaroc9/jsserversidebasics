import express from 'express';
import rp from 'request-promise-native';
import _ from 'lodash';
import pug from 'pug'; // Formerly Jade

// Statics for examples
const EXCHANGE_RATE_URL = 'https://api.fixer.io/latest';
const EXAMPLE_PAGE = pug.compileFile(require.resolve('./views/example.pug'));
const STATUS_CODES = {
  success : 200,
  forbidden : 403,
  serviceUnavailable : 503,
  serverError : 500
};

const router = express.Router();

// Show how a page can be returned
router.use('/page', (req, res) => {
  const html = EXAMPLE_PAGE({
    user: {}
  });

  res.send(html);
});

router.use('/statusCodes', (req, res) => {
  const requestedCode = _.get(req, 'query.statusCode');

  res.sendStatus(STATUS_CODES[requestedCode] || STATUS_CODES['serverError']);
});

router.use('/serviceCall', (req, res) => {
  // Function to generate the call URL... typically done separate but kept inside this route for posterity
  const generateCurrencyURL = (req) => {
    const requestedCurrency = _.get(req, 'query.currency');

    if (requestedCurrency){
      return`${EXCHANGE_RATE_URL}?base=${requestedCurrency}`;
    }
    return EXCHANGE_RATE_URL;
  };

  // Making the service call, handling the success and failure
  return rp.get(generateCurrencyURL(req), { json: true, followRedirect : false })
    .then(resp => res.send(resp))
    .catch(err => res.send(err));
});

router.use('/', function (req, res) {
  res.send('Base REST example route');
});

export default router;