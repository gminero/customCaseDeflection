({
    itemsChange: function (component, event, helper) {
        //Set Parameters and fire event for Coveo Context
        var appEvent = $A.get("e.selfService:caseCreateFieldChange");
        appEvent.setParams({
            "modifiedField": event.getSource().get("v.fieldName"),
            "modifiedFieldValue": event.getSource().get("v.value")
        });

        appEvent.fire();

    },
    handleRecordSaved: function (component, event, helper) {
        // handle Record Save

    },
    handleRecordSubmit: function (component, event, helper) {
        //handle record submission - Before save
    }
})