//Modularizar nuestros modelos y la lógica de nuestros modelos JSON
sap.ui.define(
  ["sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.model.json.JSONModel} JSONModel
   */

  function (JSONModel) {
    "use strict";
    return {
      //First function
      createRecipient: function () {
        let oData = {
          recipient: {
            name: "A mi ",
          },
        };
        return new JSONModel(oData);
      },
      //Second one
    };
  }
);
