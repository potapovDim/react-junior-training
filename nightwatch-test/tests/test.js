
module.exports = {
  
  'should have  button' : function (browser) {
    browser
      .url('http://localhost:9090/')
     /* .getText("button:first-child", function(result) {
        this.assert.notEqual(result.value, undefined);
        this.assert.notEqual(result.value, "");   
        this.assert.notEqual(result.value, null);   
      })*/
      .assert.elementPresent("button:first-child")
      .end();
  }, 

  'should redirect to main page ' : function (browser) {
    browser
      .url('http://localhost:9090/')
      .click("button")
      .assert.urlEquals('http://localhost:9090/main')
      .end();
  }, 

  'main page should have field input and buttons' : function (browser) {   
    browser
      .url('http://localhost:9090/main')
      
      .assert.elementPresent("input")
      
      //.assert.containsText("button", "click me")
      .getText("button", function(result) {
        this.assert.notEqual(result.value, undefined);
        this.assert.notEqual(result.value, "");   
      })

     .getText("a[href^='/entries']>button", function(result) {
        this.assert.notEqual(result.value, undefined);
        this.assert.notEqual(result.value, "");   
      })

      .getText("a[href^='/main']>button", function(result) {
        this.assert.notEqual(result.value, undefined);
        this.assert.notEqual(result.value, "");   
      })
      .end();
}, 

  'entries page should have field input and buttons' : function (browser) {   
    browser
      .url('http://localhost:9090/entries')
      
      .assert.elementPresent("input") 
      .assert.elementPresent("a[href^='/main']>button")   //Exit to main
      .assert.elementPresent("a[href^='/dnd']>button")   //Go to dnd
      .assert.elementPresent("#app > div > a > button")    //Go to main

      .end();
}, 

  'should enter name' : function (browser) {
    browser
      .url('http://localhost:9090/main')
      .click("a[href^='/entries']>button")
      .assert.urlEquals('http://localhost:9090/entries')
      
      .setValue('input', 'Qwe')
      .click("button:first-child")
      .assert.urlEquals('http://localhost:9090/main')
      .assert.containsText("h1 + div > h1", "Qwe")

      .end();
  
  }, 

  'should input some letters in text-field and view in the page' : function (browser) {
    browser
      .url('http://localhost:9090/main')
      .setValue('input', 'nightwatch')
      .assert.containsText("#app", "nightwatch")
      .end();
  }, 

  'should input some letters vs number in text-field and view in the page' : function (browser) {
    browser
      .url('http://localhost:9090/main')
      .setValue('input', '123nightwatch')
      .assert.containsText("#app", "123nightwatch")
      .end();
  }, 

  'should view an error if input a number only' : function (browser) {
    browser
      .url('http://localhost:9090/main')
      .setValue('input', '123')
      .assert.containsText("#app", "sorry , bad data")
      .end();
  }, 
  
  'should view an error if input have insignificant characters only' : function (browser) {
    browser
      .url('http://localhost:9090/main')
      .setValue('input', '@#$')
      .assert.containsText("#app", "sorry , bad data")
      .end();
  }, 


  'should view click count' : function (browser) {    
    browser
      .url('http://localhost:9090/main')
      .click("button")   
      .click("button")  
      .pause(1000)
      
      .assert.containsText("button + h1", "3")
      .assert.containsText("div + div > div", "3")
      .end();
  }, 

 
  'should go to dnd module' : function (browser) {    
    browser
      .url('http://localhost:9090/entries')
      .click("a[href^='/dnd']>button")   
      .assert.urlEquals('http://localhost:9090/dnd')
      .end();
}, 


    'dnd should have  obj A & obj B' : function (browser) {    
    browser
      .url('http://localhost:9090/dnd')
      browser.elements('css selector' , '.drag-box' ,(result) => {
        browser.assert.equal(result.value.length, 2); 
      })     
      .end();
  }, 

};
