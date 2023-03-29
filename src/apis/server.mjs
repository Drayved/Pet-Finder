// import express from 'express';
// import fetch from 'node-fetch';
// const app = express();
// const PORT = 5173; // choose a port number that suits you
// const API_BASE_URL = 'https://api.petfinder.com/v2';

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
//   next();
// });

// app.post('/token', async (req, res) => {
//   try {
//     const apiKey = process.env.REACT_APP_CLIENT_ID
//     const apiSecret = process.env.REACT_APP_CLIENT_SECRET
//     const accessToken = await getAccessToken(apiKey, apiSecret);
    
//     // add Access-Control-Allow-Origin header
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     res.send(JSON.stringify(accessToken));
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

// app.get('/pets', async (req, res) => {
//   try {
//     const { accessToken } = req.query;
//     const pets = await getPets(accessToken);
    
//     // add Access-Control-Allow-Origin header
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     res.send(JSON.stringify(pets));
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

// async function getAccessToken(apiKey, apiSecret) {
//   const response = await fetch(`${API_BASE_URL}/oauth2/token`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
//   });
//   const json = await response.json();
//   return json;
// }

// async function getPets(accessToken) {
//   const response = await fetch(`${API_BASE_URL}/animals?type=dog`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   const json = await response.json();
//   return json;
// }

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

