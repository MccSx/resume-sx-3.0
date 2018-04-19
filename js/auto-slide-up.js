!function () {
  let signTags = document.querySelectorAll('[data-sign]')
  for (let i = 0; i < signTags.length; i++) {
    signTags[i].classList.add('offset')
  }

  findClosest()
  window.addEventListener('scroll', () => {
    findClosest()
  })
  window.onload = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

//helper
  function findClosest() {
    let signTags = document.querySelectorAll('[data-sign]')
    //找到signTags里边里视口上边缘最近的元素
    let miniIndex = 0
    for (let i = 1; i < signTags.length; i++) {
      if (Math.abs(signTags[i].offsetTop - window.scrollY) < Math.abs(signTags[miniIndex].offsetTop - window.scrollY)) {
        miniIndex = i
      }
    }
    signTags[miniIndex].classList.remove('offset')
    let idName = signTags[miniIndex].id
    let aTag = document.querySelector('a[href="#' + idName +'"]')
    let liTag = aTag.parentNode
    let allLiTags = liTag.parentNode.children
    for (let i = 0; i < allLiTags.length; i++) {
      allLiTags[i].classList.remove('highlight')
    }
    liTag.classList.add('highlight')
  }
}.call()