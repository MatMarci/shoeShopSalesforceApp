({
    doInit : function(component, event, helper) {
        helper.getShoes(component);
    },
    
    getFilteredShoes:function(component,event,helper){
        let searchText = event.getParam("searchText");
        let action = component.get("c.getShoeFilteredList");
        action.setParams({ "filter" : searchText});
        
        helper.executeSearch(component, action);
  
    }
})