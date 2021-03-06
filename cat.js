const fs = require('fs');

module.exports = function(fileName) {
  fs.readdir('./', (err, files) => {
    if (err) {
      throw err;
    }

    if (files.includes(fileName)) {
      fs.readFile('./' + fileName, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        process.stdout.write(data);
        process.stdout.write('\nprompt >');
      });
    }
    else {
      process.stdout.write('file not found');
      process.stdout.write('\nprompt >');
    }
  })
};
