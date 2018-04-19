window.Model = function (options) {
  let sourceName = options.sourceName
  return {
    init: function () {
      var APP_ID = 'Nq5s0mNtVbGCCwzwcBj82Pii-gzGzoHsz'
      var APP_KEY = 'ilXxqbt6LMEUXKLwgEtUSONn'

      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    fetch: function () {
      var query = new AV.Query(sourceName)
      return query.find()    //Promise对象
    },
    save: function (obj) {
      var Message = AV.Object.extend(sourceName)
      var message = new Message()
      return message.save(obj)    //Promse对象
    }
  }
}