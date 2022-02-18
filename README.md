# Google-Map-Api-proj


![image](https://user-images.githubusercontent.com/61898376/154627887-92972055-9b5a-449a-8b7c-73656db55012.png)

func 1. change map type 

![image](https://user-images.githubusercontent.com/61898376/154628154-a45503ad-496e-4a99-a4fb-dd8a351bb527.png)


func 2. add polyline (직선 경로 )

![image](https://user-images.githubusercontent.com/61898376/154628367-2259397f-d76e-4c49-9bcc-d4d7dfcdfd0c.png)

func 3. remove polyline 


* # html code

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Google Map</title>
    <style>
        #map {
            height: 90%;
        }

        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</head>
<body>

    <div id="map" style="width:100%; height: 100vh;"></div>

    <button id="btnTerrain"> terrain </button>

    <button onclick="lineStart()">직성 경로 생성</button>    
    <button onclick="removeLine()"> 직선 경로 지움 </button>


    <script async
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVLLlcQfUmQV81CxmJcTk_sXjC-IF5bnA&callback=initMap">
    </script>
    <script>

        // map types :  https://developers.google.com/maps/documentation/javascript/maptypes


        // MAP TYPE SWITCH
        var mapTypeSwitch = document.getElementById("btnTerrain");

        mapTypeSwitch.addEventListener('click', () => {

            if (map.mapTypeId == 'hybrid') {
                mapTypeSwitch.innerHTML = 'hybrid';
                map.setMapTypeId('terrain');
            } else {
                mapTypeSwitch.innerHTML = 'terrain';
                map.setMapTypeId('hybrid')
            }
        })




    </script>
    <script src="./mapApiJS.js"></script>

</body>

</html>
```
* # js code
```
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
```


