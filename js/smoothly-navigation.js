!function () {
  let view = View('nav>ul')
  let controller  = {
    view: null,
    init: function () {
      this.view = view
      this.initAnimate()
      this.bindEvents()
    },
    initAnimate: function () {
      function animate(time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      requestAnimationFrame(animate)
    },
    bindEvents: function () {
      let aTags = this.view.querySelectorAll('li>a')
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = (e) => {
          e.preventDefault()
          let href = e.currentTarget.getAttribute('href')
          if (href !== '#') {
            let element = document.querySelector(href)
            this.scrollToElement(element)
          }
        }
      }
    },
    scrollToElement: function (element) {
      let targetPosition = element.offsetTop - 80
      let initPosition = window.scrollY
      let time = Math.abs(((targetPosition - initPosition)/100)*300)
      if (time > 500) {
        time = 500
      }
      var coords = { y: initPosition }
      var tween = new TWEEN.Tween(coords)
        .to({ y: targetPosition }, time)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(function () {
          window.scrollTo(0, coords.y)
        })
        .start()
    }
  }

  controller.init(view)
}.call()