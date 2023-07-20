const axios = require('axios');
require('dotenv').config();

exports.handler = async (event, context) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiSecret = process.env.REACT_APP_API_SECRET;

  const options = {
    method: "POST",
    url: "https://api.petfinder.com/v2/oauth2/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
  };

  try {
    const response = await axios(options);
    const accessToken = response.data;
    console.log(accessToken);
    return {
      statusCode: 200,
      body: JSON.stringify(accessToken),
      headers: {
        // Set the Access-Control-Allow-Origin header to allow requests from your frontend domain (http://localhost:5173)
        "Access-Control-Allow-Origin": "http://localhost:5173",
        // If you need to allow other headers, you can include them here
        "Access-Control-Allow-Headers": "Content-Type",
        // Set the HTTP methods you want to allow
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        // Set the Access-Control-Allow-Credentials header if you need to allow credentials (cookies, HTTP authentication) in the request
        "Access-Control-Allow-Credentials": "true",
      },
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
      headers: {
        // Set the Access-Control-Allow-Origin header to allow requests from your frontend domain (http://localhost:5173)
        "Access-Control-Allow-Origin": "http://localhost:5173",
        // If you need to allow other headers, you can include them here
        "Access-Control-Allow-Headers": "Content-Type",
        // Set the HTTP methods you want to allow
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        // Set the Access-Control-Allow-Credentials header if you need to allow credentials (cookies, HTTP authentication) in the request
        "Access-Control-Allow-Credentials": "true",
      },
    };
  }
};
