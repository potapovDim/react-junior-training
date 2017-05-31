
const mainPageAPI = {
  checkInput(value, expected) {
    return this.setValue("@input", value)
      .assert.containsText("#app", expected)
      .clearValue("@input")
  },
  isButtonAddValueToCounter(i) {
      this.click('@clickMeButton')
        .assert.containsText("@counter", (i + 2).toString())
        .assert.containsText("@titleWithCounter", "Test Title " + (i + 2).toString())
  },
}
module.exports = {
  url: 'http://localhost:9090/main',
  elements: {
    mainHeader: {
      selector: 'h1'
    },
    input: "input",
    clickMeButton: "div button",
    counter: "button + h1",
    titleWithCounter: "div + div > div",
    app: '#app',
    goToEntries : "a button",
    helloTitle:    "h1 + div > h1"
  },
  commands: [mainPageAPI]
};
