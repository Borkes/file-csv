const simple_csv = require('./lib');


module.exports = function (data, path) { 
   return new simple_csv(data, path)
}