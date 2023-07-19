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
    position: [2870, 2382],
    description: "<b>כרמיל</b>",
    type: CAPITAL,
  },
  {
    position: [2944, 2368],
    description: "<b>ארגמן</b>",
    type: CAPITAL,
  },
  {
    position: [2978, 2551],
    description: "<b>מגניון</b>",
    type: CAPITAL,
  },
  {
    position: [2916, 2541],
    description: "<b>קלמין</b>",
    type: CAPITAL,
  },
  {
    position: [2831, 2540],
    description: "<b>ציאן</b>",
    type: CAPITAL,
  },
  {
    position: [2773, 2431],
    description: "<b>פארור</b>",
    type: CAPITAL,
  },
  {
    position: [2700, 2432],
    description: "<b>זרניך</b>",
    type: CAPITAL,
  },
  {
    position: [2766, 2390],
    description: "<b>פירול</b>",
    type: CAPITAL,
  },
  {
    position: [2804, 2258],
    description: "<b>אוראולין</b>",
    type: CAPITAL,
  },
  {
    position: [2845, 2207],
    description: "<b>אומברה</b>",
    type: CAPITAL,
  },
  {
    position: [2931, 2240],
    description: "<b>ניל</b>",
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
      return 8;
    default:
      return 6;
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
