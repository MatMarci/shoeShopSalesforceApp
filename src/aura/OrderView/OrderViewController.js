({
    createOrder : function(component, event, helper) {
        let jsonContact=helper.prepareContactJson(component);
        let shoesList = component.get("v.shoesToOrder");
        let totalPrice = component.get("v.totalPrice");
        let action = component.get("c.createNewOrder");
        action.setParams({ "jsonMap" : jsonContact, "shoesList" :  shoesList, "totalPrice" : totalPrice});
        
        helper.createOrder(component, action);
        

    }
})