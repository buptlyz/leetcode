class Stack {
  constructor() {
    this._queue = []; // 有数据的
    this._backup = []; // 用来实现出栈的
    this.length = 0;
  }
  push(value) {
    this.length++;
    return this._queue.push(value);
  }
  pop() {
    let item = this._queue.shift();
    while(this._queue.length) {
      this._backup.push(item);
      item = this._queue.shift();
    }
    const tmp = this._backup;
    this._backup = this._queue;
    this._queue = tmp;
    this.length--;
    return item;
  }
}

module.exports = Stack;
