import LANDSCAPES, {
  DESERT,
  FOREST,
  PLAINS,
  SWAMP,
} from "./landscapes_data.js";

const onEachFeature = (feature, layer) => {
  if (!feature.properties) return;

  if (feature.properties.title) {
    layer.bindTooltip(feature.properties.title, {
      permanent: true,
      direction: "center",
      className: `leaflet-tooltip ${feature.properties.type}`,
    });
  }

  if (feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
};

const getColor = (type) => {
  switch (type) {
    case PLAINS:
      return { color: "greenyellow" };
    case DESERT:
      return { color: "yellow" };
    case SWAMP:
      return { color: "purple" };
    case FOREST:
      return { color: "green" };
    default:
      return {};
  }
};

const style = (feature) => {
  return { ...getColor(feature.properties.type) };
};

const layer = L.geoJSON(LANDSCAPES, { style, onEachFeature });

export const getLandscapeLayers = () => {
  return {
    Landscapes: layer,
  };
};
