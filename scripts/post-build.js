var fs = require('fs');

var oldPath = 'dist/angular-starter/3rdpartylicenses.txt';
var newPath = 'dist/angular-starter/browser/3rdpartylicenses.txt';

fs.rename(oldPath, newPath, function (err) {
  if (err) throw err;
  console.log('Successfully moved 3rdpartylicenses.txt');
});
