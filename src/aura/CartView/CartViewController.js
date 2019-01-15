({
    showOrderForm : function(component, event, helper) {
        let orderSection = component.find("orderSection");
        let showOrder = component.get("v.showOrder");
        
        if(showOrder){
            $A.util.addClass(orderSection, 'slds-hide');
        }
        else{
            $A.util.removeClass(orderSection, 'slds-hide');
            
        }
        showOrder=!showOrder;
        component.set("v.showOrder",showOrder);
    },
    
    deleteRecordFromCart : function(component,event,helper){
        let idToDelete = event.getSource().get("v.name");

        var cmpEvent = component.getEvent("deleteShoeFromCartEvent");
        cmpEvent.setParams({"rowToDelete" : idToDelete});       
        cmpEvent.fire();
    }
})