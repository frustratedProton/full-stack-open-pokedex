/* eslint-disable no-console */
/* eslint-disable no-undef */
const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 4000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('10') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
