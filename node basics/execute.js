const execute = require('child_process').exec;

execute("ls", (err, stdout) => {
  if (err) {
    return err;
  }
  console.log(stdout);
});