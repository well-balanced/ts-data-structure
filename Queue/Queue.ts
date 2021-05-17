interface IQueue<T> {
  add(val: T): void
  remove(): T
  peek(): T
  isEmpty(): boolean
}

type QueueNode<T> = {
  val: T
  next: QueueNode<T> | null
}

export class Queue<T> implements IQueue<T> {
  private first: QueueNode<T> | null
  private last: QueueNode<T> | null

  constructor() {
    this.first = null
    this.last = null
  }

  add(val: T): void {
    const node: QueueNode<T> = {
      val,
      next: null,
    }

    if (this.last) {
      this.last.next = node
    }
    this.last = node

    if (!this.first) {
      this.first = node
    }
  }

  remove(): T {
    if (!this.first) throw new Error('Queue is empty')
    const first = this.first
    this.first = this.first.next

    if (!this.first) {
      this.last = null
    }
    return first.val
  }

  peek(): T {
    if (!this.first) throw new Error('Queue is empty')
    return this.first.val
  }

  isEmpty(): boolean {
    return this.first === null
  }
}
