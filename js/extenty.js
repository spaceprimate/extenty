(function extenty(){
    var baseWidth = 100; // in pixels
    var baseHeight = 100;
    var extents = document.getElementsByClassName("extenty-box");

    /**
     * Cycle through all the elements with the "extenty-box" class. 
     * Get the coordinates in the dat-coords attribute
     * update styles for each box
     */
    var i;
    for (i = 0; i < extents.length; i++) {
        var coords = convertCoords( extents[i].dataset.coords.split(',') );
        var width = coords[2] - coords[0];
        var height = coords[3] - coords[1];
        extents[i].style.top = coords[1] + "px";
        extents[i].style.left = coords[0] + "px";
        extents[i].style.width = width + "px";
        extents[i].style.height = height + "px";
    }

    /**
     * Converts latitude and longitude into pixel values
     * @param {*} coords 
     */
    function convertCoords(coords){
        coords[0] = convertLong(coords[0]);
        coords[1] = convertLat(coords[1]);
        coords[2] = convertLong(coords[2]);
        coords[3] = convertLat(coords[3]);
        var temp; //flip coords if they're not in ascending order
        if (coords[0] > coords [2]){
            temp = coords[0];
            coords[0] = coords[2];
            coords[2] = temp;
        }
        if (coords[1] > coords [3]){
            temp = coords[1];
            coords[1] = coords[3];
            coords[3] = temp;
        }
        return coords;
    }

    /**
     * Plot Latitude onto Web Mercator EPSG:3857 pixels
     * @param {*} lat 
     */
    function convertLat(lat){
        lat = parseInt(lat);
        lat = baseHeight / (2 * Math.PI) * Math.log(Math.tan(Math.PI / 4 + (lat / 2) * Math.PI / 180)); //whew
        lat = ( baseHeight / 2 ) - lat;
        return lat;
    }

    /**
     * Plot Longitude onto Web Mercator EPSG:3857 pixels
     * @param {*} long 
     */
    function convertLong(long){
        long = parseInt(long);
        var newLong =  Math.ceil( (long + 180) * baseWidth / 360 );
        return newLong;
    }
})();