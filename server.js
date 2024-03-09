/*
const express = require('express');
const app = express();
const port = 8081;

const cors = require("cors");

app.use(cors(
  {
    origin:"http://localhost:8081",
    methods:["GET","POST"]
  }
))


app.get('/api/data', async (req, res) => {
    try {
      const apiKey = '5c188f0c-0b40-44ee-9ae1-96b818de8fa5';

      const stopId = 3021;

      const apiUrl = `https://ckan2.multimediagdansk.pl/departures?stopId=${stopId}`;
  
      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      console.log(data);
      
      res.json(data.departures); // Zwróć dane do klienta
  
    } catch (error) {
      //console.error('Błąd pobierania danych:', error);
      res.status(500).json({ error: 'Wystąpił błąd podczas pobierania danych.' });
    }
  });

app.listen(port, () => {
    console.log(`Serwer działa na https://localhost:${port}`);
});
*/