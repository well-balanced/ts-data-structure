interface IStack<T> {
  push(val: T): void
  pop(): T
  peek(): T
  isEmpty(): boolean
}

type StackNode<T> = {
  val: T
  next: StackNode<T> | null
}

export class Stack<T> implements IStack<T> {
  private top: StackNode<T> | null

  constructor() {
    this.top = null
  }

  push(val: T): void {
    const node: StackNode<T> = {
      val,
      next: this.top ? this.top : null,
    }
    this.top = node
  }

  pop(): T {
    if (!this.top) throw new Error('stack is empty')
    const top = this.top
    this.top = this.top.next
    return top.val
  }
  peek(): T {
    if (!this.top) throw new Error('stack is empty')
    return this.top.val
  }
  isEmpty(): boolean {
    return !this.top ? true : false
  }
}
