//Modularizar nuestros modelos y la lógica de nuestros modelos JSON
sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap/ui/Device"],
  /**
   * @param {typeof sap.ui.model.json.JSONModel} JSONModel
   * @param {typeof sap.ui.Device} Device
   */

  function (JSONModel, Device) {
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
      createDeviceMode: function () {
          var oModel = new JSONModel(Device);
          oModel.setDefaultBindingMode("OneWay");
          return oModel;
      },
      //Second one
    };
  }
);
