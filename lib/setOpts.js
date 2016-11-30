'use strict'

const config = require('../config')

module.exports = (options) => {
  if (!options) {
    throw new Error('Missing required input: options object')
  }
  if (!options.type) {
    throw new Error('Missing required input: options.type')
  }

  const soapOpts = {
    type: options.type,
    id: options.id || false
  }

  const reqGetAqis = require('./data/requestGetAqis').init(soapOpts)

  const reqOpts = {
    url: options.url || config.url,
    headers: {
      'SOAPAction': '"http://tempuri.org/GetAqis"',
      'Content-Type': 'text/xml; charset=utf-8'
    },
    body: reqGetAqis
  }
  return reqOpts
}
