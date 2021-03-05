const fs = require('fs');

const array = [];


module.exports = function(fileName) {
  fs.readdir('./', (err, files) => {
    if (err)
      console.log(err);
    else {
      // console.log("\nCurrent directory filenames:");
      files.forEach(file => {
        array.push(file);
      })
    }

    if (array.includes(fileName)) {
      fs.readFile('./' + fileName, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        }
        process.stdout.write(data);
      });
      process.stdout.write('\nprompt >');
    }
    else {
      console.log('file not found');
    }
    // process.stdout.write('\nprompt >');
  })
  // process.stdout.write('\nprompt >');
};
