sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function(Controller, JSONModel){
        "use strict";

        return Controller.extend("chches.invoices.controller.InvoicesList",{
            onInit : function( ){
                //Creamos un Modelo y lo Publicamos
                //Definimos el Modelo.
                let oData = {
                    usd : "USD",
                    eur : "EUR"
                };
                let oCurrency = new JSONModel(oData);
                this.getView().setModel(oCurrency, "currency");
            }
        });
    }
);