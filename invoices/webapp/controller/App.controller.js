sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
    ],   
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("chches.invoices.controller.App", {
            onInit : function( ){
                this._loadModel();
            },

            _loadModel : function (){
                let oData = {
                    recipient : {
                        name : "World Load Model"
                    }
                };
                let oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "view");
            },

            onShowHello : function( ){
                MessageToast.show("Hello World");
            }

        });

    }
);