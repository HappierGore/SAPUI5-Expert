//@ts-nocheck
sap.ui.define(
  [
    "DTT/SAPUI5/model/Models",
    "sap/ui/core/UIComponent",
    "./controller/HelloDialog",
  ],
  /**
   * @param {typeof DTT.SAPUI5.model.Models} Models,
   * @param {typeof sap.ui.core.UIComponent} UIComponent
   * @param {typeof .controller.HelloDialog} HelloDialog
   */
  function (Models, UIComponent, HelloDialog) {
    //declaración metadata

    return UIComponent.extend("DTT.SAPUI5.Component", {
      metadata: {
        manifest: "json",
      },

      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
        this.setModel(Models.createRecipient());
        // let i18nModel = new ResourceModel({
        //   bundleName: "DTT.SAPUI5.i18n.i18n",
        // });
        // this.setModel(i18nModel, "i18n");
        this._helloDialog = new HelloDialog(this.getRootControl());
        this.getRouter().initialize();
        this.setModel(Models.createDeviceMode(), "device");
      },

      exit: function () {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },

      openHelloDialog: function () {
        this._helloDialog.open();
      },
    });
  }
);
