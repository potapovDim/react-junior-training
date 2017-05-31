module.exports = {
  'should have button with name "go to main"': function (client) {
    var start = client.page.start();
    start.navigate()
      .assert.containsText('@app', "ROOT")
      .assert.containsText('@goToMainButton', "Go to main")
    client.end();
  },

  'should redirect to main page with header Main Component and input ': function (client) {

    var start = client.page.start();
    var main = client.page.main();
    start.navigate()
      .click("@goToMainButton")
      .assert.urlEquals('http://localhost:9090/main')
      .assert.elementPresent("@goToMainButton")
      
    main.assert.containsText("@mainHeader", "MAIN COMPONENT")
    client.end();
  },


  'go to main work from entries': function (client) {
    var entries = client.page.entries();

    entries.navigate()
      .click("@goToMainButton")
      .assert.urlEquals("http://localhost:9090/main")
    client.end();
  },

  'changing Input check': function (client) {

    var main = client.page.main();
    main.navigate()
      .assert.elementPresent("@input")
      .assert.containsText("@app", "hello")
      .checkInput("HELLO its me dsadsa", "HELLO its me dsadsa")
      .checkInput('test#$%', "sorry , bad data")
      //.checkInput('test1234',"sorry , bad data")
      .checkInput('123', "sorry , bad data")
      .checkInput('#@%$', "sorry , bad data")
    client.end();
  },

  'click me button counter check ': function (client) {
    var main = client.page.main();
    main.navigate()
      .assert.containsText('@clickMeButton', "click me")
    for (i = 0; i < 10; ++i) {
      main.isButtonAddValueToCounter(i);
    }
    client.end();
  },

  'should enter name': function (client) {
    var main = client.page.main();
    var entries = client.page.entries();
    main.navigate()
      .click("@goToEntries")
      .assert.urlEquals('http://localhost:9090/entries')

    entries.setValue('@input', 'some name')
      .click("@goToMainButton")
      .assert.urlEquals('http://localhost:9090/main')

    main.assert.containsText("@helloTitle", "Hello some name")
    client.end();
  },


  'dnd should have  obj A & obj B': function (client) {
    var dnd = client.page.dnd();
    dnd.navigate()

    client.elements('css selector', '.drag-box', (result) => {
      client.assert.equal(result.value.length, 2);
    })
    dnd.addSomeObject()
    client.elements('css selector', '.drag-box', (result) => {
      client.assert.equal(result.value.length, 3);
    })
    dnd.removeSomeObject()
    client.end()
  }
};
