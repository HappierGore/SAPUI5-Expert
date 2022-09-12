sap.ui.define(
  ["sap/ui/base/ManagedObject", "sap/ui/core/Fragment"],
  /**
   * @param {sap.ui.base.ManagedObject} ManagedObject
   * @param {sap.ui.core.Fragment} Fragment
   */
  function (ManagedObject, Fragment) {
    return ManagedObject.extend("DTT.SAPUI5.controller.HelloDialog", {
      constructor: function (oView) {
        this._oView = oView;
      },
      exit: function () {
        delete this._oView;
      },
      open: function () {
        const oView = this._oView;
        if (!oView.byId("HelloDialog")) {
          let oFragmentController = {
            onCloseDialog: function () {
              oView.byId("HelloDialog").close();
            },
          };
          Fragment.load({
            id: oView.getId(),
            name: "DTT.SAPUI5.view.HelloDialog",
            controller: oFragmentController,
          }).then(function (oDialog) {
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          oView.byId("HelloDialog").open();
        }
      },
    });
  }
);
