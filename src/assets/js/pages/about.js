/* Scripts for About page */

//For map
function initMap(link){
    link.remove();
    const map = L.map('map').setView([50.43132200998583, 30.514766270540136], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);

    //if  want a custom marker add te following: {icon: customMarker}
    // into L.marker([50.43132200998583, 30.514766270540136], .....-here)  down below 
    //in round braces after square braces , after a comma
    //and uncomment the customMarker function below

    // const customMarker = L.icon({
    //     iconUrl: 'assets/images/pin.png',
    //     iconSize:     [106,106], // size of the icon
    //     // shadowSize:   [50, 64], // size of the shadow
    //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //     shadowAnchor: [4, 62],  // the same for the shadow
    //     popupAnchor:  [-3, -76]
    // })

    L.marker([50.43132200998583, 30.514766270540136]).addTo(map)  
        // .bindPopup('A pretty CSS popup.<br> Easily customizable.') //this line shows popup with txt/pi/whatever at marker
        // .openPopup();  //this makes popup visible at once
}
//