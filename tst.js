const lookup = require('./index')

lookup({type: 'Country'}, (err, data) => {
  console.log(err || data)
})
