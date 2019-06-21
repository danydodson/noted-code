const fs = require('fs');


// Rename files

//fs.renameSync('./newfile2.js', 'newDir/newfile.js');

// Rename or move Directories

fs.renameSync('./newDir/ChildDir', './ParentDir');


