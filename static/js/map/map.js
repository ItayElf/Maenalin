import {
  getSettlementsDefaultOverlays,
  getSettlementOptionalOverlays,
} from "./popups/settlements.js";
import { getLandscapeLayers } from "./regions/landscapes/landscapes.js";
import { setTooltipOnZoom } from "./view/fixOnZoom.js";

const defaultLayer = L.geoJSON();

const getDefaultOverlays = () => {
  return { ...getSettlementsDefaultOverlays() };
};

const getOptionalOverlays = () => {
  return { ...getSettlementOptionalOverlays() };
};

const getLayers = () => {
  return { רגיל: defaultLayer, ...getLandscapeLayers() };
};

const setupMeasure = () => {
  L.Measure = {
    linearMeasurement: "מרחק",
    areaMeasurement: "שטח",
    start: "התחלה",
    meter: "מטרים",
    meterDecimals: 0,
    kilometer: 'ק"מ',
    kilometerDecimals: 2,
    squareMeter: "מטרים רבועים",
    squareMeterDecimals: 0,
    squareKilometers: 'קמ"ר',
    squareKilometersDecimals: 2,
  };
};

const setupMap = (overlays) => {
  const map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -2,
    layers: [defaultLayer, ...overlays],
  });
  map.createPane("popups");
  map.createPane("top");
  map.getPane("popups").style.zIndex = 1000;
  map.getPane("top").style.zIndex = 2000;

  setupMeasure();
  L.control
    .measure({
      title: "מרחק",
      linearMeasurement: "מרחק",
    })
    .addTo(map);

  const bounds = [
    [0, 0],
    [3584, 4864],
  ];
  L.imageOverlay("images/map/maenalin_background.webp", bounds).addTo(map);

  map.on("zoomend", () => setTooltipOnZoom(map));

  map.fitBounds(bounds);
  map.setMaxBounds(map.getBounds());
  map.setZoom(-1);
  return map;
};

let overlays = getDefaultOverlays();
const map = setupMap(Object.values(overlays));
overlays = { ...overlays, ...getOptionalOverlays() };
L.control.layers(getLayers(), overlays).addTo(map);
