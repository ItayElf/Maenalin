export const getOnEachFeature = (getColor) => {
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
  return onEachFeature;
};

export const getStyle = (getColor) => {
  const style = (feature) => {
    return { ...getColor(feature.properties.type) };
  };
  return style;
};
