({    
    addToCart : function(component, event, helper) {
        let shoeToAdd = component.get("v.shoe");
        if(shoeToAdd.Size__c && shoeToAdd.Quantity__c > 0){    
            let shoeEvent = $A.get("e.c:ShoeEvent");
            shoeEvent.setParams({"shoeToAdd" : shoeToAdd});
            shoeEvent.fire();
        }
        else{
            let sizeMsg = shoeToAdd.Size__c ? "" : "You need to choose size before adding to cart!";
            let qtyMsg = shoeToAdd.Quantity__c > 0 ? "" : "Quantity has to be greater than 0!";
            
            alert(sizeMsg +" "+ qtyMsg);
        }
    }
})