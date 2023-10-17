sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ],
    function(Controller, MessageToast){

        "use strict";

        return Controller.extend("chch.com.compra.controller.HelloPanel",{

            oninit:function(){

            },

            onShowHelloPanel:function(){
                MessageToast.show("Tarea Culminada de incorporación de vista");
            }

        });
    }
);