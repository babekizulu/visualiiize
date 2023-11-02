/*
@author: Lwandle Babekizulu Dlamini
@desc: Parses txt files to string
@date: 2023/11/02
*/
//libs
const fs = require('fs');

class textConversion {
  generateString = () => {
    const textString = fs.readFileSync('./test.txt').toString();
    return textString;
  };
}

module.exports = {textConversion};
