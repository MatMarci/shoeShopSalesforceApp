({
    getShoes : function(component) {
        
        let action = component.get("c.getShoeList");
        
        action.setCallback(this, function(response) {
            var retValue = response.getReturnValue();
            retValue.forEach(e=>{
                e.Quantity__c=1;
            })
                component.set("v.shoeList", retValue);
                
            });
                
                $A.enqueueAction(action);
            },
                
                executeSearch : function(component,action){
                    action.setCallback(this, function(response) {
                        var retValue = response.getReturnValue();
                        retValue.forEach(e=>{
                            e.Quantity__c=1;
                        })
                            component.set("v.shoeList", retValue);
                            
                        });
                            
                            $A.enqueueAction(action);
                        }
                        })