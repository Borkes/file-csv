const file_csv = require('./lib');

module.exports = function (data, path) { 
   return new file_csv(data, path)
}