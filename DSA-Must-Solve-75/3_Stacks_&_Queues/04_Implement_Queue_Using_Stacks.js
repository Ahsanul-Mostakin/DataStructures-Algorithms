/* 
4. Implement Queue Using Stacks
Problem: Implement a queue using two stacks with operations: push, pop, peek, and empty.
*/
// Brute Force
class QueueBrute {
  constructor() {
    this.stack = [];
  }
  push(x) {
    const temp = [];
    while (this.stack.length) temp.push(this.stack.pop());
    this.stack.push(x);
    while (temp.length) this.stack.push(temp.pop());
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  empty() {
    return this.stack.length === 0;
  }
}
// Optimal
class MyQueue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
  push(x) {
    this.inStack.push(x);
  }
  pop() {
    if (this.outStack.length === 0) {
      while (this.inStack.length) this.outStack.push(this.inStack.pop());
    }
    return this.outStack.pop();
  }
  peek() {
    if (this.outStack.length === 0) {
      while (this.inStack.length) this.outStack.push(this.inStack.pop());
    }
    return this.outStack[this.outStack.length - 1];
  }
  empty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}

const queueBrute = new QueueBrute();
queueBrute.push(1);
queueBrute.push(2);

console.log(queueBrute.peek());
console.log(queueBrute.pop());
console.log(queueBrute.empty());

const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.empty());
