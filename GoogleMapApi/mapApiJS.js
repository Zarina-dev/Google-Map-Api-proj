// JavaScript source code
var map;
var initPos = { lat: 40.513996, lng: 72.816101 };
var flightCoord;
var flightPath;

function initMap() {

    // MAP CENTERING
    var krgs = initPos;
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: krgs,
        mapTypeId: 'hybrid'
    });


    // MARKER
    new google.maps.Marker({
        position: krgs,
        map: map,
        label: "KYRGYZSTAN center coordinates"
    });

   

    // CHANGE CENTER to SEOUL
    //setTimeout(() => {
    //    var seoul = { lat: 37.5642135, lng: 127.0016985 };
    //    map.panTo(seoul);
    //    map.setZoom(12);
    //}, 2000);




    //  POLYLINE 라인 그리기   :  https://developers.google.com/maps/documentation/javascript/overlays
    flightCoord = [
        { lat: 40.513996, lng: 72.816101 },
        { lat: 51.1605227, lng: 71.4703558 }
    ];
    flightCoord.push({ lat: 60.1605227, lng: 50.4703558 });

 
    var lats = flightCoord.map(flightCoord => flightCoord.lat);  // get only lat values from flightCoord struct
    console.log(lats)

    // polyline 준비
    flightPath = new google.maps.Polyline({
        path: flightCoord,
        geodesic: true,
        strokeColor: "#FFAAAB",
        strokeOpacity: 1.0,
        strokeWeight:2

    });
    flightPath.setMap(null);
   // flightPath.setMap(map);    // map 에게 flightPath (polyline)을 끼워


}


// 직선 버튼이 눌렸을 때 준비된 polyline을 그린다  

function lineStart() {
    alert('start drawing line');
    flightPath.setMap(map);
}

// remove polyline     : 
function removeLine() {
    flightPath.setMap(null);
}