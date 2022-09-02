//eslint-disable-next-line no-undef
sap.ui.define(
  ["sap/ui/core/ComponentContainer"],
  /**
   * @param{sap.ui.core.ComponentContainer} ComponentContainer
   */
  function (ComponentContainer) {
    "use strict";
    //eslint-disable-next-line-no-underf
    new ComponentContainer({
      name: "DTT.SAPUI5",
      settings: {
        id: "SAPUI5",
      },
      async: true
    }).placeAt("Contenido");
  }
);
