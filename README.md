# extenty
Displays a bounding box overlay on a thumbnail sized map image. 

## Getting started

Default image size is 100x100 pixels and is assumed to be Web Mercator. 
Currently, it only supports Web Mercator EPSG:3857, but you can change the size. You'll need to: 

- instantiate with width and height pixel values: eg, new extenty(90,90);
- edit update the values for the .extenty class in extenty.css
