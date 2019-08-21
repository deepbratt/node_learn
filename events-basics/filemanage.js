var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data){
  //console.log(data);
  fs.writeFileSync('writeMe.txt', data);
});
