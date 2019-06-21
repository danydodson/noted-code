const express = require('express');

let app = express();


app.get('/', function (req, res) {
    res.send('HOME');
});

app.get('/post/:id/category/:category_id', (req, res) => {
    res.send(`
    
        <p>Here is ${req.params.id}</p>    
         <p>Here is ${req.params.category_id}</p>
    
    `);

});

app.listen(9999);

console.log(`It's working`);


