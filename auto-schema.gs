function onOpen() {
  var ui = DocumentApp.getUi();  
  
  ui.createMenu('Get Prompt')  
    .addItem('Organization Schema', 'organization_schema') 
    .addItem('Serivce Schema', 'serivce_schema') 
    .addToUi();  
}

function organization_schema() {
  var body = DocumentApp.getActiveDocument().getBody();  
  var fontSizeToFind = 11.5;  
  var result = [];
  

  var totalParagraphs = body.getNumChildren();
  for (var i = 0; i < totalParagraphs; i++) {
    var element = body.getChild(i);
    
    if (element.getType() == DocumentApp.ElementType.PARAGRAPH) {
      var paragraph = element.asParagraph();
      var textElements = paragraph.getNumChildren();
      
     
      for (var j = 0; j < textElements; j++) {
        var textElement = paragraph.getChild(j);
        
        if (textElement.getType() == DocumentApp.ElementType.TEXT) {
          var text = textElement.asText();
          
         
          for (var k = 0; k < text.getText().length; k++) {
            var fontSize = text.getFontSize(k);
            
            if (fontSize == fontSizeToFind) {
              result.push(text.getText().charAt(k));  
            }
          }
        }
      }
    }
  }

 
  if (result.length > 0) {
    DocumentApp.getUi().alert("Please design a SEO Organization schema for my website: [YOUR WEBSITE URL HERE]. Include the schema within a <script> tag in JSON-LD format. Use the LocalBusiness schema type if I provide an address below; otherwise, use OnlineBusiness. Include only the attributes if I provide details below. Remove any attribute or property that I do not provide details for, avoid any empty or example attribute:\n \n" + result.join("") + "\n \n Here is the details you may need:\n \n" + "Address:\n" +
"Tel:\n" +
"Email:\n" +
"Logo URL:\n" +
"Opening Hours:\n" +
"Price Range:\n" +
"knowsAbout:\n" +
"(Optional) CID URL:\n" +
"(Optional) geo:\n" +
"(Optional) payment:\n" +
"(Optional) audienceType:\n" +
"(Optional) containedInPlace:\n" +
"(Optional) branch:\n" +
"(Optional) founding date & location:\n");
  } else {
    DocumentApp.getUi().alert("No text with font size 11.5 found.");
  }
}

function serivce_schema() {
  var body = DocumentApp.getActiveDocument().getBody();  
  var fontSizeToFind = 12.5;  
  var result = [];
  

  var totalParagraphs = body.getNumChildren();
  for (var i = 0; i < totalParagraphs; i++) {
    var element = body.getChild(i);
    
    if (element.getType() == DocumentApp.ElementType.PARAGRAPH) {
      var paragraph = element.asParagraph();
      var textElements = paragraph.getNumChildren();
      
     
      for (var j = 0; j < textElements; j++) {
        var textElement = paragraph.getChild(j);
        
        if (textElement.getType() == DocumentApp.ElementType.TEXT) {
          var text = textElement.asText();
          
         
          for (var k = 0; k < text.getText().length; k++) {
            var fontSize = text.getFontSize(k);
            
            if (fontSize == fontSizeToFind) {
              result.push(text.getText().charAt(k));  
            }
          }
        }
      }
    }
  }

 
  if (result.length > 0) {
    DocumentApp.getUi().alert("Please design a SEO Service schema for my website: [YOUR WEBSITE URL HERE]. Include the schema within a <script> tag in JSON-LD format. Use the LocalBusiness schema type for provider if I provide an address below; otherwise, use OnlineBusiness. Include only the attributes if I provide details below. Remove any attribute or property that I do not provide details for, avoid any empty or example attribute:\n \n" + result.join("") + "\n \n Here is the details you may need:\n \n" + "Served Area:\n" +
"Tel:\n" +
"Email:\n" +
"Description:\n" +
"Logo URL:\n" +
"Category:\n" +
"Hasmap CID URL:\n" +
"GeoMidpoint:\n" +
"GeoRadius:\n" + 
"aggregateRating value:\n" + 
"reviewCount:\n" +
"(optional)priceCurrency:NZD \n" + 
"(optional)Minprice:\n" +
"(optional)Maxprice:\n" + 
"(optional)availability: InStock \n" 
);
  } else {
    DocumentApp.getUi().alert("No text with font size 12.5 found.");
  }
}
