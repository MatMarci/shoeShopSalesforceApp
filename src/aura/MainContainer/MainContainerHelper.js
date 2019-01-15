({
    removeShoe : function(component, id) {
        let shoesList = component.get("v.shoeInTheCartList");
        
        for(let i=0;i<shoesList.length;i++){
            if(shoesList[i].Id == id){
                shoesList.splice(i, 1);
            }
        }
        component.set("v.shoeInTheCartList",shoesList);
        this.recalculateTotalPrice(component);
        
    },
      recalculateTotalPrice : function(component) {
        let shoeList = component.get("v.shoeInTheCartList");
        let totalPrice = 0;
        for (var i=0; i<shoeList.length;i++){
            totalPrice = totalPrice + shoeList[i].Price__c * shoeList[i].Quantity__c;
        }
        component.set("v.totalPrice", totalPrice);        
    }
})