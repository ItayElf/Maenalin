export const setTooltipOnZoom = (map) => {
  var zoomLevel = map.getZoom();
  var tooltip = $(".leaflet-tooltip");

  switch (zoomLevel) {
    case -2:
      tooltip.css("font-size", 12);
      break;
    case -1:
      tooltip.css("font-size", 16);
      break;
    case 0:
      tooltip.css("font-size", 20);
      break;
    case 1:
      tooltip.css("font-size", 24);
      break;
    case 2:
      tooltip.css("font-size", 28);
      break;
    case 3:
      tooltip.css("font-size", 32);
      break;
    default:
      tooltip.css("font-size", 32);
  }
};
