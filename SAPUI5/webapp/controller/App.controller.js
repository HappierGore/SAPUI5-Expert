//@ts-nocheck
sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.m.MessageToast} MessageToast
   */
  function (Controller, MessageToast) {
    return Controller.extend("DTT.SAPUI5.controller.App", {
      onInit: function () {
        
      },
      onShowHello: function () {
        let oBundle = this.getView().getModel("i18n").getResourceBundle();
        let sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        let sMsg = oBundle.getText("helloMSG", [sRecipient]);
        MessageToast.show(sMsg);
      },
    });
  }
);
