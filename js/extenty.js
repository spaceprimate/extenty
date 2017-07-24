var baseWidth = 100; // in pixels
var baseHeight = 100; // in pixels

var extents = document.getElementsByClassName("box");

var i;

/**
 * Cycle through all the elements with the "box" class
 */
for (i = 0; i < extents.length; i++) {
    // console.log(extents[i].dataset.coords);
    var coords = convertCoords( extents[i].dataset.coords.split(',') );

    console.log(coords);

    var width = coords[2] - coords[0];
    var height = coords[3] - coords[1];

    extents[i].style.top = coords[1] + "px";
    extents[i].style.left = coords[0] + "px";
    extents[i].style.width = width + "px";
    console.log("height is: " + height);
    extents[i].style.height = height + "px";
    

    // extents[i].style.width = "20px";
    // extents[i].style.height = "20px";
    // extents[i].style.top = "20px";
    // extents[i].style.left = "20px";


    // console.log(i.getAttribute('data-value'));
   // x[i].style.backgroundColor = "red";
}

function flipCoords(c){

}

function convertCoords(coords){
    
    console.log("coords in: " + coords[0]);
    coords[0] = convertLong(coords[0]);
    console.log("coords out: " + coords[0]);
    coords[1] = convertLat(coords[1]);
    coords[2] = convertLong(coords[2]);
    coords[3] = convertLat(coords[3]);


    var temp;
    if (coords[0] > coords [2]){
        temp = coords[0];
        coords[0] = coords[2];
        coords[2] = temp;
    }
    if (coords[1] > coords [3]){

        console.log("called!!!!");
        temp = coords[1];
        coords[1] = coords[3];
        coords[3] = temp;
    }


    return coords;
}

function convertLatOld(lat){
    lat = 90 - parseInt(lat);
    console.log("should be 41: " + lat);
    var newLat =  Math.ceil( lat * baseHeight / 180 );
    // return Math.ceil( (lat + 90) * baseHeight / 180 );
    return newLat;
}

function convertLat(lat){
    lat = parseInt(lat);
    lat = baseHeight / (2 * Math.PI) * Math.log(Math.tan(Math.PI / 4 + (lat / 2) * Math.PI / 180));

    lat = 50 - lat;
    //newLat = Math.ceil( lat * baseHeight / 180 );
    // if (temp > baseHeight){
    //     temp = baseHeight;
    // }
    // else if (temp <)
    return lat;

}

function convertLong(long){
    long = parseInt(long);

    var newLong =  Math.ceil( (long + 180) * baseWidth / 360 );
    return newLong;
}

// function test(){

//     vertex = [40,40];
//     var smRadius = 6378136.98;
//     var smRange = smRadius * Math.PI * 2.0;
//     var smLonToX = smRange / 360.0;
//     var smRadiansOverDegrees = Math.PI / 180.0;

//     // ...

//     // compute x-map-unit
//     vertex[0] *= smLonToX;

//     var y = vertex[1];

//     // compute y-map-unit
//     if (y > 86.0)
//     {
//         vertex[1] = smRange;
//     }
//     else if (y < -86.0)
//     {
//         vertex[1] = -smRange;
//     }
//     else
//     {
//         y *= smRadiansOverDegrees;
//         y = Math.log(Math.tan(y) + (1.0 / Math.cos(y)), Math.E);
//         vertex[1] = y * smRadius; 
//     }
//     console.log("y is: ");
//     console.log(y);
// }

// function findLat(vertex){

//     //vertex = [20,40];
//     var smRadius = 6378136.98;
//     var smRange = smRadius * Math.PI * 2.0;
//     var smLonToX = smRange / 360.0;
//     var smRadiansOverDegrees = Math.PI / 180.0;

//     // ...

//     // compute x-map-unit
//     vertex[0] *= smLonToX;

//     var y = vertex[1];

//     // compute y-map-unit
//     if (y > 86.0)
//     {
//         vertex[1] = smRange;
//     }
//     else if (y < -86.0)
//     {
//         vertex[1] = -smRange;
//     }
//     else
//     {
//         y *= smRadiansOverDegrees;
//         y = Math.log(Math.tan(y) + (1.0 / Math.cos(y)), Math.E);
//         vertex[1] = y * smRadius; 
//     }
//     console.log("y is: ");
//     console.log(y);
//     console.log("x is: ");
//     console.log(vertex[0]);
// }

// function mercY(lat) { return Math.log(Math.tan(lat/2 + Math.PI/4)); }
// function testt(lat) { return Math.tan( lat/2 + Math.PI/4 ); }



// // This map would show Germany:
// var south = deg2rad(47.2);
// var north = deg2rad(55.2);
// var west = deg2rad(5.8);
// var east = deg2rad(15.2);


var latitude    = 90; // (φ)
var longitude   = -73.995;   // (λ)

var mapWidth    = 200;
var mapHeight   = 100;

// get x value
var x = (longitude+180)*(mapWidth/360)

// convert from degrees to radians
var latRad = latitude*Math.PI/180;

// get y value
var mercN = Math.log(Math.tan((Math.PI/4)+(latRad/2)));
//var y     = (mapHeight/2)-(mapWidth*mercN/(2*Math.PI));
//var y = (mapHeight/2)-(mapHeight*mercN/(2*Math.PI));
console.log("y follows");
console.log(mercN);



//function test(latRad){return Math.log(Math.tan((Math.PI/4)+(latRad/2)));}

function test(Latitude){
    var temp = 100 / (2 * Math.PI) * Math.log(Math.tan(Math.PI / 4 + (Latitude / 2) * Math.PI / 180));
    return temp;
}