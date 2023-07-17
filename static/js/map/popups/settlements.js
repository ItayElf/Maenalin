const CAPITAL = "capital";
const METROPOLIS = "metropolis";
const CITY = "city";
const TOWN = "town";
const VILLAGE = "village";
const HAMLET = "hamlet";

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
  {
    position: [1367, 1798],
    description: "<b>מצר</b>",
    type: CAPITAL,
  },
  {
    position: [1465, 1886],
    description: "<b>מירין</b>",
    type: CITY,
  },
];

const getColor = (settlement) => {
  switch (settlement.type) {
    case CAPITAL:
      return "#AC2020";
    case CITY:
      return "yellow";
    default:
      return "";
  }
};

const getRadius = (settlements) => {
  switch (settlements.type) {
    case CAPITAL:
      return 12;
    default:
      return 10;
  }
};

const markers = settlements.map((s) => {
  const popup = L.popup({ pane: "top" }).setContent(s.description);
  return {
    type: s.type,
    marker: new L.Circle(s.position, {
      stroke: true,
      weight: 2,
      color: "black",
      fillColor: getColor(s),
      fillOpacity: 1,
      fill: true,
      radius: getRadius(s),
      pane: "popups",
    }).bindPopup(popup),
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
