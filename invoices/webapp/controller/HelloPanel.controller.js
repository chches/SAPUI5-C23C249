sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/core/Fragment"
    ],
    function(Controller, MessageToast, Fragment) {
        "use strict";

        return Controller.extend("chches.invoices.controller.HelloPanel",{

            onInit : function( ){

            },

            onShowHello : function( ){
                MessageToast.show("Hello World");
            },

/*             onDialogoHelloPanel : function(){
                //Obtengo la vista
                let oView = this.getView();

                //Si Dialogo no está instanciado, crear e instanciar y abrir Dialogo,
                //caso contrario, abrir Dialog.
                console.log("Crea dialogo");
                if(!this._pDialog){
                    console.log("No existe _pDialog");
                    this._pDialog = Fragment.load({
                        id  : oView.getId(),
                        name: "chches.invoices.fragment.DialogoHelloPanel",
                        controller  :   this
                    }).then(function(oDialog){
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }

                console.log("Abre Diálogo");
                this._pDialog.then(function(oDialog){
                    oDialog.open();
                });
            }, */

            onButtonCloseFD : function ( ){
                this._pDialog.then(function(oDialog){
                    oDialog.close();
                });
            },

            onDialogoHelloPanel : function(){
                console.log("Llamando a getOwnerComponent");
                this.getOwnerComponent().openHelloDialog();
            },

            onButton2DialogPanel : function( ){
                console.log("Llamando a getOwnerComponent");
                this.getOwnerComponent().openHelloDialog();
            }
        });
    }
);