// No third party module required: https is part of the Node.js API

const https = require("https");
const fs = require('fs');

const url = "https://jsonplaceholder.typicode.com/posts";

https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", function() {

    fs.writeFile('somenewdata.json', body, 'utf8', (err) => {

      if (err) return err;

      console.log("just pulled filed successfully");

    });

    console.log(
      body
    );
  });
});