
const dndAPI = {
    removeSomeObject() {
         return this.click("@removeButton")

    },
    addSomeObject() {
         return this.click("@addButton")
    }
}

module.exports = {
  url: 'http://localhost:9090/dnd',
  elements: {
    goToMainButton: { 
      selector: 'button' 
    },
    app : '#app',
    removeButton : ".box-button",
    addButton : ".option-menu > div:nth-child(2)"
  },
  commands: [dndAPI]
};