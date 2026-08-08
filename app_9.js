const path=require('path');
console.log(path.sep); 
const fliePath =path.join('/content','subfolder','test.txt');
console.log(fliePath);
const base = path.basename(fliePath);
console.log(base);

const absolute=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);