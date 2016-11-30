'use strict'

exports.init = (options) => {
  let body = ''

  const type = options.type || 'Country'
  body += `<type>${type}</type>`

  if (options.id) {
    body += `\n<id>${options.id}</id>`
  }

  const message = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetAqis xmlns="http://tempuri.org/">
          <culture>no</culture>
          ${body}
        </GetAqis>
      </soap:Body>
    </soap:Envelope>
  </xml>`

  return message
}
