({
    checkIfShoeAdded : function(array, element){
        let i=0;
        let index=-1;
        array.forEach(e =>{
            if(e.Id == element.Id && e.Size__c == element.Size__c){
            index=i;
        }
                      i++;
                      } 
                      
                     );
        return index;
        
    },

    
    addShoeToList : function(component, event) {
        let shoeToAdd = event.getParam("shoeToAdd");
        let shoeList = component.get("v.shoeList");
        let shoeExists = this.checkIfShoeAdded(shoeList,shoeToAdd);
        if(!shoeToAdd.Quantity__c){
                shoeToAdd.Quantity__c = 1;
            }
        if(shoeExists == -1){
            shoeList.push(shoeToAdd);
        }
        else{
            shoeList[shoeExists].Quantity__c = Number(shoeList[shoeExists].Quantity__c) + Number(shoeToAdd.Quantity__c);
            
        }
        component.set("v.shoeList",shoeList);
    },
    
    recalculateTotalPrice : function(component) {
        let shoeList = component.get("v.shoeList");
        let totalPrice = 0;
        for (var i=0; i<shoeList.length;i++){
            totalPrice = totalPrice + shoeList[i].Price__c * shoeList[i].Quantity__c;
        }
        component.set("v.totalPrice", totalPrice);        
    },
    
    initTotalValue : function(component){
        component.set("v.totalPrice", 0);        
    }
})