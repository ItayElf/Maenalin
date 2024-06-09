import { getOnEachFeature, getStyle } from "../common.js";
import KINGDOMS from "./kingdoms_data.js";

const getColor = (type) => {
  switch (type) {
    case "jihaly":
      return { color: "hsl(349, 39%, 32%)" };
    case "ingford":
      return { color: "hsl(110, 32%, 29%)" };
    case "akolance":
      return { color: "#E51B1B" };
    case "kermes":
      return { color: "#AF0029" };
    case "magnese":
      return { color: "#c2c2c3" };
    case "calamine":
      return { color: "#FBDBCE" };
    case "cyan":
      return { color: "#008B8B" }; // darkcyan
    case "vermilion":
      return { color: "#FF5733" };
    case "arsen":
      return { color: "#80b692" };
    case "pyrrole":
      return { color: "#DB5422" };
    case "aureolin":
      return { color: "#fdee00" };
    case "indigo":
      return { color: "#4b0082" };
    case "umber":
      return { color: "#634147" };
    case "crimson":
      return { color: "#dc143c" };
    default:
      return {};
  }
};

const style = getStyle(getColor);
const onEachFeature = getOnEachFeature(getColor);
const layer = L.geoJSON(KINGDOMS, { style, onEachFeature });

export const getKingdomeLayers = () => {
  return {
    ממלכות: layer,
  };
};
