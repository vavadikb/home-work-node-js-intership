class EventEmitter {
    constructor() {
      this.listeners = new Map();
    }
  
    emit(eventName, ...args) {
      const listeners = this.listeners.get(eventName);
      if (listeners) {
        for (const listener of listeners) {
          listener(...args);
        }
      }
    }
  
    on(eventName, listener) {
      const listeners = this.listeners.get(eventName) || [];
      listeners.push(listener);
      this.listeners.set(eventName, listeners);
    }
  
    prependListener(eventName, listener) {
      const listeners = this.listeners.get(eventName) || [];
      listeners.unshift(listener);
      this.listeners.set(eventName, listeners);
    }
  
    removeListener(eventName, listener) {
      const listeners = this.listeners.get(eventName);
      if (listeners) {
        const index = listeners.indexOf(listener);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      }
    }
  }


  const eventEmitter = new EventEmitter();

function listener1(arg) {
  console.log(`listener1 received ${arg}`);
}

function listener2(arg) {
  console.log(`listener2 received ${arg}`);
}

eventEmitter.on('event1', listener1);
eventEmitter.prependListener('event1', listener2);

eventEmitter.emit('event1', 'hello world');

eventEmitter.removeListener('event1', listener1);

eventEmitter.emit('event1', 'hello again');