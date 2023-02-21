<<<<<<< HEAD
=======
<<<<<<< HEAD
var myMap = L.map('map', {// .fitWorld();
      center: [40.7128, -74.0060],
      zoom: 11
    });
    

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap);


// fetch nyc to international airports
fetch('/api/v1.0/nyc_airports').then(function (response) {
// console.log(response)
return response.json();        
}).then(function (text) {
console.log(text); // Print the text as JSON 
// console.log(JSON.stringify(text)) // Prints the above as plain text in console
for (var i = 0; i < text.length; i++) {
    var latitude = text[i].latitude;
    var longitude = text[i].longitude;
    var popupText = `<strong> ${text[i].airport_name}</strong><hr>
    <strong>Location:</strong> ${text[i].city}, ${text[i].country}<br>
    <strong>Coordinates: </strong>${latitude}, ${longitude}<br>    
    <strong>Altitude: </strong>${text[i].altitude}<br>`;
    // console.log(latitude);
    // console.log(longitude);
    if (location) {
    L.circleMarker([latitude, longitude], {
        stroke: true,        
        weight: 1,
        color: "#000000",
        opacity: .4,        
        fillColor: "#0000ff",
        fillOpacity: 0.4,
        radius: (4)
    }).addTo(myMap).bindPopup(popupText);          
    }
}      
});


// fetch nyc to domestic airports
fetch('/api/v1.0/nycdom_airports').then(function (response) {
// console.log(response)
return response.json();        
}).then(function (text) {
console.log(text); // Print the text as JSON
// console.log(JSON.stringify(text)) // Prints the above as plain text in console
for (var i = 0; i < text.length; i++) {
    var latitude = text[i].latitude;
    var longitude = text[i].longitude;
    var popupText = `<strong> ${text[i].airport_name}</strong><hr>
    <strong>Location:</strong> ${text[i].city}, ${text[i].country}<br>
    <strong>Coordinates: </strong>${latitude}, ${longitude}<br>    
    <strong>Altitude: </strong>${text[i].altitude}<br>`;
    // console.log(latitude);
    // console.log(longitude);
    if (location) {
    L.circleMarker([latitude, longitude], {
        stroke: true,        
        weight: 1,
        color: "#00cc00",
        opacity: .4,        
        fillColor: "#00ff00",
        fillOpacity: 0.4,
        radius: (4)
    }).addTo(myMap).bindPopup(popupText);          
    }
}      
});

// Heat Map test
fetch('/api/v1.0/nycdom_airports').then(function (response) {
    // console.log(response)
    return response.json();        
    }).then(function (text) {
    // console.log(text);  
    var heatArray = [];  
    for (var i = 0; i < text.length; i++) {
        var latitude = text[i].latitude;
        var longitude = text[i].longitude;
  
        if (location) {
            heatArray.push([latitude, longitude]);
        }
    }
  
    var heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 5
    }).addTo(myMap);
=======
>>>>>>> 5a3f402a91cc5842270d03164089a92a5f66bd9f
var myMap = L.map('map', {// .fitWorld();
      center: [40.7128, -74.0060],
      zoom: 11
    });
    

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap);


// fetch nyc to international airports
<<<<<<< HEAD
fetch('/api/v1.0/nycint_airports').then(function (response) {
=======
fetch('/api/v1.0/nyc_airports').then(function (response) {
>>>>>>> 5a3f402a91cc5842270d03164089a92a5f66bd9f
// console.log(response)
return response.json();        
}).then(function (text) {
console.log(text); // Print the text as JSON 
// console.log(JSON.stringify(text)) // Prints the above as plain text in console
for (var i = 0; i < text.length; i++) {
    var latitude = text[i].latitude;
    var longitude = text[i].longitude;
    var popupText = `<strong> ${text[i].airport_name}</strong><hr>
    <strong>Location:</strong> ${text[i].city}, ${text[i].country}<br>
    <strong>Coordinates: </strong>${latitude}, ${longitude}<br>    
    <strong>Altitude: </strong>${text[i].altitude}<br>`;
    // console.log(latitude);
    // console.log(longitude);
    if (location) {
    L.circleMarker([latitude, longitude], {
        stroke: true,        
        weight: 1,
        color: "#000000",
        opacity: .4,        
        fillColor: "#0000ff",
        fillOpacity: 0.4,
        radius: (4)
    }).addTo(myMap).bindPopup(popupText);          
    }
}      
});


// fetch nyc to domestic airports
fetch('/api/v1.0/nycdom_airports').then(function (response) {
// console.log(response)
return response.json();        
}).then(function (text) {
console.log(text); // Print the text as JSON
// console.log(JSON.stringify(text)) // Prints the above as plain text in console
for (var i = 0; i < text.length; i++) {
    var latitude = text[i].latitude;
    var longitude = text[i].longitude;
    var popupText = `<strong> ${text[i].airport_name}</strong><hr>
    <strong>Location:</strong> ${text[i].city}, ${text[i].country}<br>
    <strong>Coordinates: </strong>${latitude}, ${longitude}<br>    
    <strong>Altitude: </strong>${text[i].altitude}<br>`;
    // console.log(latitude);
    // console.log(longitude);
    if (location) {
    L.circleMarker([latitude, longitude], {
        stroke: true,        
        weight: 1,
        color: "#00cc00",
        opacity: .4,        
        fillColor: "#00ff00",
        fillOpacity: 0.4,
        radius: (4)
    }).addTo(myMap).bindPopup(popupText);          
    }
}      
});

<<<<<<< HEAD
// fetch traffic density route
fetch('/api/v1.0/traffic_density').then(function (response) {
// console.log(response)
return response.json();      
}).then(function (text) {
console.log(text); // Print the text as JSON
// console.log(JSON.stringify(text)) // Prints the above as plain text in console
// for (var i = 0; i < text.length; i++) {
//     var aeroport = i;
//     var flights = text[i];
//     console.log(aeroport);
//     console.log(flights)
// };
//     var longitude = text[i].longitude;
//     var popupText = `<strong> ${text[i].airport_name}</strong><hr>
//     <strong>Location:</strong> ${text[i].city}, ${text[i].country}<br>
//     <strong>Coordinates: </strong>${latitude}, ${longitude}<br>    
//     <strong>Altitude: </strong>${text[i].altitude}<br>`;
    // console.log(flights);
//     // console.log(longitude);
//     if (location) {
//     L.circleMarker([latitude, longitude], {
//         stroke: true,        
//         weight: 1,
//         color: "#00cc00",
//         opacity: .4,        
//         fillColor: "#00ff00",
//         fillOpacity: 0.4,
//         radius: (4)
//     }).addTo(myMap).bindPopup(popupText);          
//     }
// }      
});



// // Heat Map test
// fetch('/api/v1.0/nycdom_airports').then(function (response) {
//     // console.log(response)
//     return response.json();        
//     }).then(function (text) {
//     // console.log(text);  
//     var heatArray = [];  
//     for (var i = 0; i < text.length; i++) {
//         var latitude = text[i].latitude;
//         var longitude = text[i].longitude;
  
//         if (location) {
//             heatArray.push([latitude, longitude]);
//         }
//     }
  
//     var heat = L.heatLayer(heatArray, {
//       radius: 20,
//       blur: 5
//     }).addTo(myMap);
// });
=======
// Heat Map test
fetch('/api/v1.0/nycdom_airports').then(function (response) {
    // console.log(response)
    return response.json();        
    }).then(function (text) {
    // console.log(text);  
    var heatArray = [];  
    for (var i = 0; i < text.length; i++) {
        var latitude = text[i].latitude;
        var longitude = text[i].longitude;
  
        if (location) {
            heatArray.push([latitude, longitude]);
        }
    }
  
    var heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 5
    }).addTo(myMap);
>>>>>>> c47801dd2537fdc071fcdf3c42af49cba01f08a7
});
>>>>>>> 5a3f402a91cc5842270d03164089a92a5f66bd9f
