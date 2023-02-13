const express = require("express");
const app = express();
const axios = require("axios");

// Az API hívást itt kell megtenni a beírt cím alapján
async function getLatLng(address) {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&YOUR_API_KEY`);
    const { results } = response.data;
    if (results.length) {
      const { geometry } = results[0];
      const { location } = geometry;
      return location;
    }
  } catch (error) {
    console.error(error);
  }
}

app.get("/getLatLng", async function (req, res) {
  const { address } = req.query;
  const latLng = await getLatLng(address);
  res.json(latLng);
});

app.listen(8083, () => {
  console.log("Server is running on port 8083");
});
