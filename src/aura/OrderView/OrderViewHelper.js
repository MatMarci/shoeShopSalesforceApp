({
    prepareContactJson : function(component) {
        let firstName = component.find("inputName").get("v.firstName");
        let lastName =  component.find("inputName").get("v.lastName");
        let salutation = component.find("inputName").get("v.salutation");
        let email = component.find("emailInput").get("v.value");
        
        let city = component.find("addressInput").get("v.city");
        let country = component.find("addressInput").get("v.country");
        let postalCode = component.find("addressInput").get("v.postalCode");
        let province = component.find("addressInput").get("v.province");
        let street = component.find("addressInput").get("v.street");
        
        
        let json = {"Title": salutation,
                    "FirstName": firstName,
                    "LastName" : lastName,
                    "Email": email,
                    "MailingAddress": {
                        "city": city,
                        "country": country,
                        "postalCode": postalCode,
                        "state": province,
                        "street": street
                    }
                   }
        return json;
    },
    
    
    createOrder : function(component, action){
        debugger;
        this.orderPromise(component, action)
        .then($A.getCallback(function(result){
            alert("Order Created"); 
            component.set("v.shoesToOrder", []);
            component.set("v.totalPrice", 0);
            let name = component.find("inputName");
            name.set("v.salutation","");
            name.set("v.firstName","");
            name.set("v.lastName",""); 
       
            let emailCmp = component.find("emailInput");
            emailCmp.set("v.value","");
            
            let address = component.find("addressInput");
            address.set("v.street","");
            address.set("v.city","");
            address.set("v.country","");
            address.set("v.postalCode","");
            address.set("v.province","");

        }),
              $A.getCallback(function(reject){
                  alert("Fail");
              }));
    },
    
    orderPromise : function(component, action){
        return new Promise($A.getCallback((resolve, reject) => {
            
            action.setCallback(this, function(response) {
            let state = response.getState();
            
            if(state == "SUCCESS"){
            resolve(response.getReturnValue());
        }
            else {
            reject("Fail");
        }
        });
            $A.enqueueAction(action);
            
        }))
    }
})