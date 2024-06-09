import { getOnEachFeature, getStyle } from "../common.js";
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

const style = getStyle(getColor);
const onEachFeature = getOnEachFeature(getColor);
const layer = L.geoJSON(LANDSCAPES, { style, onEachFeature });

export const getLandscapeLayers = () => {
  return {
    איזורים: layer,
  };
};
