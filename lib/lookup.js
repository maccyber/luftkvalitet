const request = require('request')
const parser = require('xml2json')
const setOpts = require('./setOpts')

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    const reqOpts = setOpts(options)
    request.post(reqOpts, (err, response, body) => {
      if (err || response.statusCode !== 200) {
        const errMessage = err || response.statusMessage
        if (callback) {
          return callback(errMessage)
        }
        reject(errMessage)
      } else {
        const json = parser.toJson(body, {object: true, arrayNotation: false})
        const cities = json['soap:Envelope']['soap:Body']['GetAqisResponse']['GetAqisResult'].Aqis.AqiModel
        if (!Array.isArray(cities)) {
          const message = `Empty response: ${response.statusMessage}`
          if (callback) {
            return callback(message)
          }
          reject(message)
        } else {
          if (callback) {
            return callback(null, cities)
          }
          resolve(cities)
        }
      }
    })
  })
}

