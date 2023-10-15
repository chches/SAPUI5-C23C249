sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
	    "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
    ],

    function(Controller, MessageToast, JSONModel)
    {   

        "use strict";

        return Controller.extend("chch.com.compra.controller.App",{
            
            onInit:function(){
                this._loadModel();
            },

            _loadModel:function(){
                let oData = {
                    recipient:{
                        name:"world"
                    }
                };

                let oModel = new JSONModel(oData);

                this.getView().setModel(oModel,"view");

            },
            onShowHello:function(){
                MessageToast.show("Nuevamente probamos el boton");
            }
        });
    }
);