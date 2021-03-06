const request = require('request');

module.exports = (webpage) => {
  request(webpage, (err, response, body) => {
    if (err) {
      throw err;
    }
    else {
      process.stdout.write(body);
      process.stdout.write('\nprompt >');
    }
  });
};

