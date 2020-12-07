function updateMap() {
    console.log("Updating map with realtime data")
    fetch("newdata.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                title = element.title;
                description = element.description;

                cases = element.confirmed;
                if (cases > 255) {
                    color = "rgb(255, 0, 0)";
                }

                else {
                    color = `rgb(${cases}, 0, 0)`;
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                    .setPopup(new mapboxgl.Popup({ offset: 25 })
                        .setHTML('<h3>' + title + '</h3><p>' + description + '</p>'))
                    .addTo(map);


            });
        })
}

// let interval = 4000;
// setInterval(updateMap, interval); 
updateMap();
