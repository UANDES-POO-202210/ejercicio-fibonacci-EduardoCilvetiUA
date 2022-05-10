const fs = require('fs');


fs.readFile('number.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }


var data1 = data-1;
var data2 = data-2;
var data3 = data1 + data2;

console.log("F("+data+"): "+data3);
});
