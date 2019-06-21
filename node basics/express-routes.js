const express = require('express');
let app = express();

const port = process.env.PORT || 9999;

app.get('/', (req, res) => {
    res.send('<h1> HELLO</h1>');
});

app.get('/api', (req, res) => {

    // res.send('<h1>API PAGE</h1>');

    res.json({ name: 'Edwin' });


});



app.listen(port);

console.log('It working');