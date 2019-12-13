exports.command = function (selector) {
  this.perform(function () {
    console.log('Selector:', selector)
  })
}
