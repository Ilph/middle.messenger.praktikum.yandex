export class EventBus {
  listeners: Record<string, Array<(...args: Array<string>)=> void>>

  constructor() {
    this.listeners = {}
  }

  on(event: string, callback: ()=>void) {
    if(!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event].push(callback)
  }

  off(event: string, callback: ()=> void) {
    if(!this.listeners[event]) {
      throw new Error(`No event: ${event}`)
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback 
    )
  }

  emit(event: string, ...args: Array<string>):void {
    if(!this.listeners[event]) {
      throw new Error(`No event: ${event}`)
    }
    
    this.listeners[event].forEach(
      listener => listener(...args)
    )
  }
}
