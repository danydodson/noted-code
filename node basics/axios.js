const axios = require('axios')

let username = 'DanyDodson'

axios.get('https://api.github.com/users/' + username).then((res) => {
  console.log(res.data.blog)
}).catch((err) => {
  console.log(err)
})