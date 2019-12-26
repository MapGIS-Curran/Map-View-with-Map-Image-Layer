require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/MapImageLayer"
], function(Map, MapView, MapImageLayer) {
  var layer = new MapImageLayer({
    url:
      "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer",
    sublayers: [
      {
        id: 3,
        visible: true
      }
    ]
  });

  var map = new Map({
    basemap: "streets-night-vector",
    layer: layer
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 4,
    center: [-95, 40] // longitude, latitude
  });
  layer.opacity = 0.3;
  map.add(layer);
});
