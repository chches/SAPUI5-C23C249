sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
	    "sap/ui/model/json/JSONModel"
    ], 
    function(Controller, MessageToast,JSONModel){
        return Controller.extend("chch.com.venta.controller.App",{
            
            onInit(){
                this._loadModel();
            },
            _loadModel:function(){
                let oData = {
                    recipient : {
                        name : "world"
                    }
                };

                let oModel = new JSONModel(oData);
                this.getView().setModel(oModel,"view");
            },

            onShowHello:function(){
                MessageToast.show("Mi primer button Default",{
                    my:"center bottom",
                    at:"center bottom",
                });
            }

        });
    }
);