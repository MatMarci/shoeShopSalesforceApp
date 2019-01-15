public class LightningShopCenterCtrl {
    @auraEnabled
    public static List<Shoe__c> getShoeList(){
        return [SELECT Name, Price__c, ImageURL__c, Info__c, Category__c, Quantity__c FROM Shoe__c];
    }
    
    @auraEnabled
    public static List<Shoe__c> getShoeFilteredList(string filter){
        string whereFilter = '%' + filter + '%';
        return [SELECT Name, Price__c, ImageURL__c, Info__c, Category__c, Quantity__c FROM Shoe__c WHERE Name LIKE :whereFilter];
    }
    
    @auraEnabled
    public static string createNewOrder(Map<string,string> jsonMap, Shoe__c[] shoesList, decimal totalPrice){
        if(shoesList.size()==0){
            throw new EmptyShoeListException('Empty shoes list');
        }
        System.debug(jsonMap);
        System.debug(shoesList);
        String objDataAsJson = JSON.serialize(jsonMap);
        Contact contact = (Contact)JSON.deserialize(objDataAsJson, Contact.class);
        
        try{
            insert contact;
        }
        catch(Exception e)
        {
            System.debug(e.getMessage());
            throw new EmptyContactException('Empty contact.');
        }
        
        ShopOrder__c shopOrder = new ShopOrder__c();
        try{
            
            shopOrder.Contact__c = contact.Id;
            shopOrder.TotalPrice__c = totalPrice;
            insert shopOrder;
        }
        catch(Exception e){
            System.debug('ShopOrderException: '+e.getMessage());
        }
        List<ShopOrderShoe__c> shoesToBeAdded = new List<ShopOrderShoe__c>();
        for(Shoe__c s : shoesList) {
            ShopOrderShoe__c  shoeToAdd = new ShopOrderShoe__c();
            shoeToAdd.Shoe__c = s.Id;
            shoeToAdd.ShopOrder__c = shopOrder.Id;
            shoeToAdd.Quantity__c = s.Quantity__c;
            shoeToAdd.Size__c = s.Size__c;
            shoesToBeAdded.add(shoeToAdd);
        }
        
        insert shoesToBeAdded;
        
        return shopOrder.Id;
    }
}