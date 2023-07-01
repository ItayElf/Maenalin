const CAPITAL = "capital";
const METROPOLIS = "metropolis";
const CITY = "city";
const TOWN = "town";
const VILLAGE = "village";
const HAMLET = "hamlet";

const COLORS = {};
COLORS[CAPITAL] = "#AC2020";
COLORS[METROPOLIS] = "";
COLORS[CITY] = "";
COLORS[TOWN] = "";
COLORS[VILLAGE] = "";
COLORS[HAMLET] = "";

const settlements = [
  {
    position: [2046, 3972],
    description: "<b>מאזרה</b>",
    type: CAPITAL,
  },
  {
    position: [1693, 3332],
    description: "<b>אגמור</b>",
    type: CAPITAL,
  },
];

const markers = settlements.map((s) => {
  return {
    type: s.type,
    marker: new L.Circle(s.position, {
      stroke: true,
      weight: 2,
      color: "black",
      fillColor: COLORS[s.type],
      fillOpacity: 1,
      fill: true,
      radius: 12,
    }).bindPopup(s.description),
  };
});

const getLayerGroup = (markers, predicate) =>
  L.layerGroup(markers.filter(predicate).map((m) => m.marker));

const capitals = getLayerGroup(markers, (m) => m.type == CAPITAL);
const metropolises = getLayerGroup(markers, (m) => m.type == METROPOLIS);
const cities = getLayerGroup(markers, (m) => m.type == CITY);
const smallSettlements = getLayerGroup(markers, (m) =>
  [TOWN, VILLAGE, HAMLET].includes(m.type)
);

const getSettlementsDefaultOverlays = () => {
  return {
    Capitals: capitals,
    Metropolises: metropolises,
    Cities: cities,
  };
};

const getSettlementOptionalOverlays = () => {
  return {
    "Smaller Settlements": smallSettlements,
  };
};

export { getSettlementsDefaultOverlays, getSettlementOptionalOverlays };
