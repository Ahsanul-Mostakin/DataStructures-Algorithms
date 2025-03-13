/* 
2. Min Stack
Problem: Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
*/
class MinStackBrute {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return Math.min(...this.stack);
  }
}
// Optimal
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    this.stack.push(val);
    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }
  pop() {
    const val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
const minStackBrute = new MinStackBrute();
minStackBrute.push(-2);
minStackBrute.push(0);
minStackBrute.push(-3);
console.log("Min:", minStackBrute.getMin());
minStackBrute.pop();
console.log("Top:", minStackBrute.top());
console.log("Min:", minStackBrute.getMin());

// (Optimal)
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log("Min:", minStack.getMin());
minStack.pop();
console.log("Top:", minStack.top());
console.log("Min:", minStack.getMin());
