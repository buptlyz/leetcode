class Queue {
  constructor() {
    this._stack1 = []; // 用来入队列
    this._stack2 = []; // 用来出队列
    this.length = 0;
  }
  shift() {
    if (this._stack2.length === 0) {
      while(this._stack1.length) {
        this._stack2.push(this._stack1.pop());
      }
    }
    if (this.length > 0)
      this.length--;
    return this._stack2.pop();
  }
  unshift(value) {
    this.length++;
    return this._stack1.push(value);
  }
}

module.exports = Queue;
