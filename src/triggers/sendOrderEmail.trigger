trigger sendOrderEmail on ShopOrder__c (after insert) {
    Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
    
    ShopOrder__c order = [SELECT Id, Name, Contact__r.Email, Contact__r.Name, Contact__r.Id FROM ShopOrder__c WHERE Id IN :Trigger.new LIMIT 1];
    EmailTemplate template = [SELECT Id FROM EmailTemplate WHERE Name = 'ShopOrderEmail' LIMIT 1];
    mail.setWhatId(order.Id);
    mail.setTargetObjectId(order.Contact__r.Id);
    mail.setTemplateId(template.Id);
    
    String[] addresses = new String[]{order.Contact__r.Email};
    mail.setToAddresses(addresses);
    Messaging.sendEmail(new Messaging.SingleEmailMessage[]{mail});   
}