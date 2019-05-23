require([
  "esri/Map",
  "esri/layers/MapImageLayer",
  "esri/views/MapView",
  "dojo/domReady!"
], function(Map, MapImageLayer, MapView) {
  var map = new Map({
    basemap: "hybrid"
  });
  
function zoom_to_region() {
  var region = document.getElementById("choose_region").options;
  if (region = "costarica") {
      var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-87, 13],
      zoom: 8
    });

    alert("Region = " + region);
  }  
};
  
  
  var Utah_Counties = new MapImageLayer({
  	url: "http://geoserver2.byu.edu/arcgis/rest/services/The_Snowmen/Utah_Counties/MapServer"
  });
    
map.layers.add(Utah_Counties);
  
  
  var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-87, 13],
      zoom: 5
  });
});

