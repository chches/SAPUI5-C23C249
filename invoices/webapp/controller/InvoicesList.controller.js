sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "chches/invoices/model/formatter",
	    "sap/m/MessageToast",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
	"sap/m/StringFilterOperator"
    ],
    function(Controller, JSONModel, formatter,MessageToast, Filter, FilterOperator){
        "use strict";
        
        return Controller.extend("chches.invoices.controller.InvoicesList",{

            modelFormatter : formatter,

            onInit : function( ){
                //Creamos un Modelo y lo Publicamos
                //Definimos el Modelo.
                let oData = {
                    usd : "USD",
                    eur : "EUR"
                };
                let oCurrency = new JSONModel(oData);
                this.getView().setModel(oCurrency, "currency");
            },

            onFilterInvoice : function(oEvent){
                
                /* Obtenemos el valor al presionar buscar */
                //MessageToast.show("Hola Mundo List");
                /* let oParameters = oEvent.getParameters();
                console.log(oParameters);
                let sValue = oEvent.getParameter("query");
                console.log(sValue); */
                let oSource = oEvent.getSource();
                console.log(oSource);
                let sValue = oSource.getValue();
                console.log(sValue);


                /* Crear Filtro */
                let aFilter = [];
                if (sValue){
                    aFilter.push(new Filter("ProductName", FilterOperator.Contains, sValue));
                }

                /* Aplicar filtro a la lista */
                let oList = this.getView().byId("idList");
                let oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);



            }
        });
    }
);