!function () {
  let view = View('nav>ul')
  let controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      let liTags = this.view.querySelectorAll('li')
      for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (e) {
          e.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function (e) {
          e.currentTarget.classList.remove('active')
        }
      }
    }
  }

  controller.init(view)
}.call()