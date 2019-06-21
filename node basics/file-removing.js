const fs = require('fs');


//fs.rmdirSync('./newDir');


try {


    fs.unlinkSync('./newDir/newfile.js');


} catch (err){



    console.log(err + 'here is the error');

}





