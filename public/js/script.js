$("#submitAddress").click(async function () {
  const address = $("#address").val();

  try {
    const googleResp = await googleGET(address);
    var lat = googleResp.results[0].geometry.location.lat
    var long = googleResp.results[0].geometry.location.lng

    displayMap(lat, long)
  } catch (error) {
    console.log(error);
  }

  function googleGET(address) {
    return new Promise((resolve, reject) => {
      var settings = {
        url:
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
          address +
          "&key=YOUR_API_KEY",
        method: "GET",
        timeout: 0,
      };

      $.ajax(settings).done(function (response) {
          console.log(response.results[0].geometry.location.lat);
          console.log(response.results[0].geometry.location.lng);
          resolve(response);
      });
    });
  }

  function displayMap(lat, lon) {
    $("#map").empty().html(`
        <iframe 
        width="600" 
        height="340" 
        frameborder="0" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0" 
        src="https://maps.google.com/maps?q=${lat},${lon}&hl=es&z=14&amp;output=embed"
        >
        </iframe>
  `);
  }
});
