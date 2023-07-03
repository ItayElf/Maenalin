const PLAINS = "plains";
const DESERT = "desert";

const landscapes = [
  {
    type: "Feature",
    properties: {
      type: DESERT,
      title: "מדבר קיטריס",
      popupContent: "<b>מדבר קיטריס</b>",
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [3899, 2454],
          [3880, 2361],
          [3798, 2271],
          [3251, 2231],
          [3020, 2294],
          [2828, 2578],
          [2856, 2620],
          [2831, 2666],
          [2901, 2771],
          [2947, 2739],
          [2948, 2713],
          [3124, 2708],
          [3184, 2718],
          [3316, 2683],
          [3391, 2602],
          [3545, 2553],
          [3556, 2517],
          [3762, 2461],
        ],
      ],
    },
  },
];

const onEachFeature = (feature, layer) => {
  if (!feature.properties) return;

  if (feature.properties.title) {
    layer.bindTooltip(feature.properties.title, {
      permanent: true,
      direction: "center",
      className: "leaflet-tooltip",
    });
  }

  if (feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
};

const style = (feature) => {
  switch (feature.properties.type) {
    case PLAINS:
      return { color: "green" };
    case DESERT:
      return { color: "yellow" };
    default:
      return {};
  }
};

const layer = L.geoJSON(landscapes, { style, onEachFeature });

export const getLandscapeLayers = () => {
  return {
    Landscapes: layer,
  };
};
