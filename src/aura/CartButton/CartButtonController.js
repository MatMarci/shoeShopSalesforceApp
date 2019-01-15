({ 
    openCart: function(component, event, helper) {
        component.getEvent("openCartEvent").fire();
    },
    handleKeyUp: function (component, event,helper) {
        var isEnterKey = event.keyCode === 13;
        let searchText = component.find("enter-search").get("v.value");

        if (isEnterKey || !searchText) {
			helper.searchText(component,event,helper);
        }
    }
   
    
})