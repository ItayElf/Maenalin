var map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -2,
});

var bounds = [
  [0, 0],
  [3584, 4864],
];
var image = L.imageOverlay("images/map/maenalin_background.png", bounds).addTo(
  map
);

map.fitBounds(bounds);
map.setMaxBounds(map.getBounds());
map.setZoom(-1);
