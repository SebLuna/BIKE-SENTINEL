function mostrarUbicacionUsuario(map,marker) {
    if (navigator.geolocation) {
        alert("Geolocalizacion activada")
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            console.log(position);
            const coords={
                lat: coords.latitude,
                lng: coords.longitude,
            };
            map.setCenter(coords)
            map.setZoom(8)
            marker.setPosition(coords)
    
        },
        ()=>{
            alert("Ocurrio un error");
        }
        );
    
        
    }else{
        alert("Sin geolocalizacion")
    }

    
}
function initMap(){
    const colcoords ={lat:-33.64, lng: -63.61};
    const map= new google.maps.Map(mapDiv,{
        center: colcoords,
        zoom: 6,

    });
    const marcador= new google.maps.Marker({
        position: colcoords,
        map,
    })

    button.addEventListener('click',()=>{
        mostrarUbicacionUsuario(map,marker)

    })
}