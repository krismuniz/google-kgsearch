'use strict'
const request = require('request')
const qs = require('querystring')

function KGSearch (api_key) {
  this.search = (opts, callback) => {
    // Handle missing params and type errors
    if (!opts) {
      throw Error(`[kgsearch] missing argument 'params' {object}`)
    } else if (typeof opts !== 'object') {
      throw TypeError(`[kgsearch] argument 'params' must be an {object}`)
    }

    // Handle missing callback and type errors
    if (!callback) {
      throw Error(`[kgsearch] missing argument 'callback' function`)
    } else if (typeof callback !== 'function') {
      throw TypeError(`[kgsearch] argument 'callback' must be a {function}`)
    }

    let params = qs.stringify(opts)
    let api_url = `https://kgsearch.googleapis.com/v1/entities:search` +
      `?${params}&key=${api_key}`

    request({ url: api_url, json: true }, (err, res, data={}) => {
      if (err) callback(err)
      else if (data.error) callback(data.error)
      else callback(null, data.itemListElement)
    })

    return this
  }
}

module.exports = (api_key) => {
  if (!api_key || typeof api_key !== 'string') {
    throw Error(`[kgsearch] missing 'api_key' {string} argument`)
  }

  return new KGSearch(api_key)
}
