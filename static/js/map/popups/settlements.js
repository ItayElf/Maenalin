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
    description: "<b>מצר (עיר)</b>",
    type: CAPITAL,
  },
  {
    position: [2870, 2382],
    description: "<b>כרמיל (עיר)</b>",
    type: CAPITAL,
  },
  {
    position: [2944, 2368],
    description: "<b>ארגמן (עיר)</b>",
    type: CAPITAL,
  },
  {
    position: [2978, 2551],
    description: "<b>מגניון (עיר)</b>",
    type: CAPITAL,
  },
  {
    position: [2916, 2541],
    description: "<b>קלמין (עיר)</b>",
    type: CAPITAL,
  },
  {
    position: [2831, 2540],
    description: "<b>ציאן (עיר)</b>",
    type: CAPITAL,
  },
  {
    position: [2773, 2431],
    description: "<b>פארור (עיר)</b>",
    type: CAPITAL,
  },
  {
    position: [2700, 2432],
    description: "<b>זרניך (עיר)</b>",
    type: CAPITAL,
  },
  {
    position: [2766, 2390],
    description: "<b>פירול (עיר)</b>",
    type: CAPITAL,
  },
  {
    position: [2804, 2258],
    description: "<b>אוראולין (עיר)</b>",
    type: CAPITAL,
  },
  {
    position: [2845, 2207],
    description: "<b>אומברה (עיר)</b>",
    type: CAPITAL,
  },
  {
    position: [2931, 2240],
    description: "<b>ניל (עיר)</b>",
    type: CAPITAL,
  },
  {
    position: [3584 - 855, 3790],
    description: "<b>דגלבן</b>",
    type: CAPITAL,
  },
  {
    position: [1420, 2127],
    description: "<b>אנטונלה</b>",
    type: CAPITAL,
  },
  {
    position: [1465, 1886],
    description: "<b>מירין</b>",
    type: CITY,
  },
  {
    position: [2440, 3895],
    description:
      '<b><a href="../Maenalin/settlements/snavertygg">סנאברטיג</a></b>',
    type: CITY,
  },
  {
    position: [1869, 3652],
    description: "<b>קוצטל</b>",
    type: CITY,
  },
  {
    position: [1333, 1930],
    description:
      '<b><a href="../Maenalin/settlements/payshore">שכרחוף</a></b>',
    type: CITY,
  },
  {
    position: [1819, 3702],
    description: "<b>ג'ורדוס</b>",
    type: TOWN,
  },
  {
    position: [1378, 1910],
    description: "<b>שדה-קֶדֶר</b>",
    type: TOWN,
  },
  {
    position: [3584 - 904, 3753],
    description: "<b>סמקים</b>",
    type: VILLAGE,
  },
  {
    position: [1367, 1876],
    description: "<b>שחורטל</b>",
    type: VILLAGE,
  },
];

const getColor = (settlement) => {
  switch (settlement.type) {
    case CAPITAL:
      return "#AC2020";
    case CITY:
      return "yellow";
    case TOWN:
      return "green";
    case VILLAGE:
      return "grey";
    default:
      return "";
  }
};

const getRadius = (settlements) => {
  switch (settlements.type) {
    case CAPITAL:
    case METROPOLIS:
      return 8;
    case CITY:
      return 6;
    default:
      return 4;
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
    "ערי בירה": capitals,
    מטרופולינים: metropolises,
    ערים: cities,
  };
};

const getSettlementOptionalOverlays = () => {
  return {
    "ישובים קטנים": smallSettlements,
  };
};

export { getSettlementsDefaultOverlays, getSettlementOptionalOverlays };
