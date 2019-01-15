({
	toggleCart : function(component, event, helper) {
		let isCartVisible = component.get("v.isCartVisible");
        console.log(isCartVisible);
        component.set("v.isCartVisible", !isCartVisible);
	},
    
    doInit : function(component, event, helper) {
    let childComp = component.find("Cart");
        childComp.initCart();
    },
     deleteShoe : function(component, event, helper){
        var id = event.getParam("rowToDelete");
        helper.removeShoe(component, id);
    }
})