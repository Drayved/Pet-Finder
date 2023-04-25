const PORT = 5000
const express = require('express')
const cors= require('cors')

const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', async (req, res) => {
  const apiKey = process.env.REACT_APP_API_KEY
  const apiSecret = process.env.REACT_APP_API_SECRET
  
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
  }
  
  try {
    const response = await fetch("https://api.petfinder.com/v2/oauth2/token", options)
    const accessToken = await response.json()
    console.log(accessToken)
    res.json(accessToken)
  } catch (error) {
    console.error(error)
    res.status(500).send("Internal Server Error")
  }
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
