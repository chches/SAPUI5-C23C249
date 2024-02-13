sap.ui.define(
    [
        "sap/ui/base/ManagedObject",
        "sap/ui/core/Fragment"
    ],
    function (ManagedObject, Fragment){
        "use strict";

        return ManagedObject.extend("chches.invoices.controller.HelloDialog",{

            constructor : function(oView) {
                this._oView = oView;
            },

            exit : function ( ) {
                delete this._oView;
            },

            open : function ( ){
                //Obtengo la vista
                let oView = this._oView;

                let oFragmentController = {
                    onButtonCloseFD : function ( ){
                        oView.byId("idDialog").close();
                    }
                };

                //Si Dialogo no está instanciado, crear e instanciar y abrir Dialogo,
                //caso contrario, abrir Dialog.
                console.log("Crea dialogo");
                if(!this._pDialog){
                    console.log("No existe _pDialog");
                    this._pDialog = Fragment.load({
                        id  : oView.getId(),
                        name: "chches.invoices.fragment.DialogoHelloPanel",
                        controller  :   oFragmentController
                    }).then(function(oDialog){
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }

                console.log("Abre Diálogo");
                this._pDialog.then(function(oDialog){
                    oDialog.open();
                });
            } 

        });
    }
);