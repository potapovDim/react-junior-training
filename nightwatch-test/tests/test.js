module.exports = {
  'ROOT: elements present on page' : function (browser) {
    browser
      .url('http://localhost:9090/')
      .assert.elementPresent('#app')
      .assert.urlEquals('http://localhost:9090/')
      .assert.elementPresent('#go_to_main')
      .assert.attributeEquals("button", "type", "button")
  },

    'MAIN COMPONENT: elements present on page' : function (browser) {
    browser
      .url('http://localhost:9090/')
      .click("#go_to_main")

      .assert.urlEquals('http://localhost:9090/main')
      .assert.elementPresent('#main_component')
      .assert.elementPresent('#letter_input')
  },

    'MAIN COMPONENT: name contains "letters" display on page' : function (browser) {
    browser
      .url('http://localhost:9090/main')
      .setValue('#letter_input', 'nightwatch')
      .assert.containsText('#main_component', 'nightwatch')
  },

    'MAIN COMPONENT: if name contains "numbers" - display error text' : function (browser) {
    browser
      .url('http://localhost:9090/main')
      .setValue('#letter_input', '666')
      .assert.containsText('#main_component', 'sorry , bad data')
  },

    'MAIN COMPONENT: number changed on click' : function (browser) {
    browser
      .url('http://localhost:9090/main')
      .click("#click_me")
      
      .assert.containsText('#tittle_count', '2')
      .assert.containsText('#state_count', '2')    
  },

  'ENTRY DATA COMPONENT: elements present on page' : function (browser) {
    browser
      .url('http://localhost:9090/entries')
      .assert.elementPresent('#app')
      .assert.elementPresent('#go_to_main')
      .assert.elementPresent('#exit')
  },

    'ENTRY DATA COMPONENT: new name display on main page' : function (browser) {
    browser
      .url('http://localhost:9090/main')
      .click("#enter")

      .assert.urlEquals('http://localhost:9090/entries')
      .setValue('#change_name', 'John')
      .click("#exit")

      .assert.urlEquals('http://localhost:9090/main')
      .assert.containsText('#hello', 'Hello John')
  },
    'Routing: "back" button in browser display previous page': function (browser) {
    browser
      .url('http://localhost:9090/')
      .click("#go_to_main")
      .click("#enter")
      .back()
      .assert.urlEquals('http://localhost:9090/main')   
      .back()
      .assert.urlEquals('http://localhost:9090/')  
  },
    after : function(test) {
    test.end();
  }
};