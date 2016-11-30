const lookup = require('./index')

lookup({typ: 'Country'}, (err, data) => {
  console.log(err || data)
})
