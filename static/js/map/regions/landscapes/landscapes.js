import LANDSCAPES, {
  DESERT,
  FOREST,
  LUSH,
  MOUNTAINS,
  PLAINS,
  STEPPE,
  SWAMP,
  HILLS,
} from "./landscapes_data.js";

const onEachFeature = (feature, layer) => {
  if (!feature.properties) return;

  if (feature.properties.title) {
    layer.bindTooltip(feature.properties.title, {
      permanent: true,
      direction: "center",
      className: `leaflet-tooltip ${getColor(
        feature.properties.type
      )?.color?.replace("#", "a")}`,
    });
  }

  if (feature.properties.popupContent) {
    const popup = L.popup({ pane: "top" }).setContent(
      feature.properties.popupContent
    );
    layer.bindPopup(popup);
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
    case MOUNTAINS:
      return { color: "brown" };
    case STEPPE:
      return { color: "#c7be60 " };
    case LUSH:
      return { color: "#00ff33" };
    case HILLS:
      return { color: "#291a1a" };
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
