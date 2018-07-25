const express = require('express'),
      bodyParser = require('body-parser'),
      axios = require('axios')

const app = express()

app.use(bodyParser.json())

app.get('/api/data', (req, res) => {
    res.send([{hey: 'there'}, {yo: 'yo'}])
})

const port = 3500
app.listen(port, () => console.log(`Yo Im on ${port}`))