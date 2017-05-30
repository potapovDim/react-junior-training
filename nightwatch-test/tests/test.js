
module.exports = {

  'should have button with name "go to main"': function (browser) {
    browser
      .url('http://localhost:9090/')
      .waitForElementVisible('button', 1000)
    browser.expect.element("button").text.to.equal("Go to main")
    browser.end();
  },

  'should redirect to main page with header Main Component and input ': function (browser) {
    browser
      .url('http://localhost:9090/')
      .click("button")
      .assert.urlEquals('http://localhost:9090/main').
      expect.element("h1").text.to.equal("MAIN COMPONENT")
    browser.assert.elementPresent("input")
    browser.end();
  },

  'go to main work from entries': function (browser) {
    browser
      .url('http://localhost:9090/entries')
      .click("a[href^='/main']")
      .assert.urlEquals("http://localhost:9090/main")
  },

  'changing Input check': function (browser) {
    browser
      .url('http://localhost:9090/main')

      .assert.elementPresent("input")
      .assert.containsText("#app", "hello")
      .setValue("input", "HELLO its me dsadsa")
      .assert.containsText("#app", "HELLO its me dsadsa")
      .end();
  },

   'changing Input with text+symbols': function (browser) {
    browser
      .url('http://localhost:9090/main')
      .setValue("input","test#$%")
      .assert.containsText("#app","sorry , bad data")
      .end()
   },

  'changing Input with text+numbers': function (browser) {
    browser
      .url('http://localhost:9090/main')
      .setValue("input","test#$%")
      .assert.containsText("#app","sorry , bad data")
      .end()
   },

'changing Input with numbers': function (browser) {
    browser
      .url('http://localhost:9090/main')

      .setValue("input", "123")
      .assert.containsText("#app", "sorry , bad data")
      .end()

},

'changing Input with only special numbers': function (browser) {
    browser
      .url('http://localhost:9090/main')
      .setValue("input", "!@#$%")
      .assert.containsText("#app", "sorry , bad data")
      .end();
  },

  'click me button counter check ': function (browser) {
    browser
      .url('http://localhost:9090/main')
      .assert.containsText('div button', "click me")
    for (i = 0; i < 10; ++i) {
      browser.click('div button')
        .assert.containsText("button + h1", (i + 2).toString())
        .assert.containsText("div + div > div", "Test Title " + (i + 2).toString())
    }
    browser.end();
  },

  'should enter name': function (browser) {
    browser
      .url('http://localhost:9090/main')
      .click("a button")
      .assert.urlEquals('http://localhost:9090/entries')
      .setValue('input', 'some name')
      .click("button:first-child")
      .assert.urlEquals('http://localhost:9090/main')
      .assert.containsText("h1 + div > h1", "Hello some name")
      .end();
  },

  'should go to dnd module': function (browser) {
    browser
      .url('http://localhost:9090/entries')
      .click("a[href^='/dnd']")
      .assert.urlEquals('http://localhost:9090/dnd')
      .end();
  },

  'dnd should have  obj A & obj B': function (browser) {
    browser
      .url('http://localhost:9090/dnd')
    browser.elements('css selector', '.drag-box', (result) => {
      browser.assert.equal(result.value.length, 2);
    })
      .end();
  },

  'dnd remove elements': function (browser) {
    browser
      .url('http://localhost:9090/dnd')
      .click(".box-button")
    browser.elements('css selector', '.drag-box', (result) => {
      browser.assert.equal(result.value.length, 1);
    })
      .end();
  },
  'dnd add elements': function (browser) {
    browser
      .url('http://localhost:9090/dnd')
      .click(".option-menu > div:nth-child(2)")
    browser.elements('css selector', '.drag-box', (result) => {
      browser.assert.equal(result.value.length, 3);
    })
      .end();
  },
  // 'dnd element' : function (browser) {    
  //   browser
  //     .url('http://localhost:9090/dnd')
  //     .moveToElement('a[href = "/main"]', 0,  0)
  //     .pause(1000)
  //     .mouseButtonDown(0)
  //     .moveToElement('#app',  30,  0)
  //     .mouseButtonUp(0)
  //     .pause(5000)
  //     .end();
  // }, 

};
