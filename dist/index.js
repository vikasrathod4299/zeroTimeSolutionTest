const fs = require('fs');

const files = fs.readdirSync(__dirname);

const data = {};

const jsonFiles = files.filter(file => file.endsWith('.json'));

jsonFiles.forEach(file => {
  const name = file.slice(0, -5);
  data[name] = require(`./${file}`);
});


module.exports = data