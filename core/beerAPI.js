var request = require('request')
var api = `https://api.untappd.com/v4`
var breweriesEndpoint = ''
var brewsEndpoint = ''
var breweryEndpoint = ''
var brewEndpoint = ''
var auth = `client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`

var beerAPI = {
  query: (brew) => {
    try {
      return new Promise((resolve, reject) => {
        var sanitizedBrew = brew.trim().replace(/\s+/g, '+')
        var query = `${api}${breweriesEndpoint}${breweryEndpoint}${brewsEndpoint}${brewEndpoint}${sanitizedBrew}${auth}`
        request(query, (err, response, body) => {
          if (err) reject(err)
          resolve(body)
        })
      })
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = beerAPI
