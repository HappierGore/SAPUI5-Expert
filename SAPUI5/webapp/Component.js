//@ts-nocheck
sap.ui.define(
  [
    "DTT/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/UIComponent",
  ],
  /**
   * @param {typeof DTT.SAPUI5.model.Models} Models,
   * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
   * @param {typeof sap.ui.core.UIComponent} UIComponent
   */
  function (Models, ResourceModel, UIComponent) {
    //declaración metadata

    return UIComponent.extend("DTT.SAPUI5.Component", {
      metadata: {
        manifest: "json",
      },

      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
        this.setModel(Models.createRecipient());
        let i18nModel = new ResourceModel({
          bundleName: "DTT.SAPUI5.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
