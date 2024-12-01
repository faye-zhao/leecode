class PubSub {
    constructor() {
      this.subscribers = {};
    }
  
    subscribe(eventName, callback) {
      // Subscribe a callback to an eventName
      if (!this.subscribers[eventName]) {
        this.subscribers[eventName] = []
      }
      this.subscribers[eventName].push(callback)

    }
  
    publish(eventName, data) {
      // Execute callbacks for an eventName
      const cbs =  this.subscribers[eventName]
      if (!cbs) {
        return
      }
      cb.forEach(cb => {
        cb(data)
      })
    }
  
    unsubscribe(eventName, callback) {
      // Remove a previously added callback
      if (this.subscribers[eventName]) {
        this.subscribers[eventName] = this.subscribers[eventName].filter(t=>t===cb)
      }
    }
  }