({
    processShoe : function(component, event, helper) {
        helper.addShoeToList(component, event);
        helper.recalculateTotalPrice(component);
    },
   
    
    doInit : function(component, event, helper) {
        helper.initTotalValue(component);
    },
    
    openCart: function(component, event, helper) {
    	component.getEvent("openCartEvent").fire();
    }
})