sap.ui.define(
    [

    ], 
    function(){
        "use strict";

        let oFormatter={
            invoiceStatus : function(sStatus){

                let oResource = this.getView().getModel("i18n").getResourceBundle();

                switch(sStatus){
                    case 'A': return oResource.getText("invoiceStatusA");
                    case 'B': return oResource.getText("invoiceStatusB");
                    case 'C': return oResource.getText("invoiceStatusC");
                    default : return sStatus;
                }
            }

        };

        return oFormatter;
    }
);