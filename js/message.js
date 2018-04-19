!function () {
//MVC中的V
  let view = View('section.message')

//MVC中的M，获取数据
  let model = Model({sourceName: 'Message'})

//MVC中的C
  let controller = Controller({
    init: function (view, model) {
      this.messageList = view.querySelector('#messageList')
      this.myForm = view.querySelector('#postMessageForm')
      this.loadMessages()
    },
    loadMessages: function () {
      this.model.fetch().then(function (messages) {
        var arr = messages.map(item => item.attributes)
        arr.forEach(item => {
          var liTag = document.createElement('li')
          liTag.innerText = `${item.name}: ${item.content}`
          this.messageList.appendChild(liTag)
        })
      })
    },
    bindEvents: function () {
      this.myForm.addEventListener('submit', (e) => {
        e.preventDefault()
        this.postMessages()
      })
    },
    postMessages: function () {
      var myContent = this.myForm.querySelector('input[name=content]').value
      var myName = this.myForm.querySelector('input[name=name]').value
      this.model.save({
        name: myName,
        content: myContent
      }).then((object) => {
        var liTag = document.createElement('li')
        liTag.innerText = `${object.attributes.name}: ${object.attributes.content}`
        this.messageList.appendChild(liTag)
        this.myForm.querySelector('input[name=content]').value = ''
      })
    }
  })

  controller.init(view, model)
}.call()