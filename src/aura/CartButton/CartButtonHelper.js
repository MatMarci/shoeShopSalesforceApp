({

 searchText : function(component, event, helper){
        let searchText = component.find("enter-search").get("v.value");
        let searchEvent = $A.get("e.c:SearchShoeEvent");
        searchEvent.setParams({"searchText" : searchText});    
        searchEvent.fire();
    }
    
})