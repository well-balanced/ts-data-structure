import LinkedListNode from './LinkedListNode'

export class LinkedList<T> {
  private _head: LinkedListNode<T> | null
  private _tail: LinkedListNode<T> | null
  private _length: number

  constructor(...values: T[]) {
    this._head = this._tail = null
    this._length = 0

    if (values.length > 0) {
      values.forEach(val => {
        this.append(val)
      })
    }
  }

  *iterator(): IterableIterator<T> {
    let currentNode = this._head

    while (currentNode) {
      yield currentNode.val
      currentNode = currentNode.next
    }
  }

  [Symbol.iterator]() {
    return this.iterator()
  }

  get head(): T {
    if (!this._head) throw new Error('head does not exist')
    return this._head.val
  }

  get tail(): T {
    if (!this._tail) throw new Error('tail does not exist')
    return this._tail.val
  }

  get length(): number {
    return this._length
  }

  prepend(val: T): void {
    let newNode = new LinkedListNode<T>(val)

    if (!this._head) {
      this._head = this._tail = newNode
    } else {
      newNode.next = this._head
      this._head.prev = newNode
      this._head = newNode
    }

    this._length++
  }

  append(val: T): void {
    let newNode = new LinkedListNode<T>(val)

    if (!this._tail) {
      this._head = this._tail = newNode
    } else {
      this._tail.next = newNode
      newNode.prev = this._tail
      this._tail = newNode
    }

    this._length++
  }

  removeHead(): void {
    if (!this._head) {
      return
    }

    if (!this._head.next) {
      this._head = this._tail = null
    } else {
      this._head.next.prev = null
      this._head = this._head.next
    }

    this._length--
  }

  removeTail(): void {
    if (!this._tail) {
      return
    }

    if (!this._tail.prev) {
      this._head = this._tail = null
    } else {
      this._tail.prev.next = null
      this._tail = this._tail.prev
    }

    this._length--
  }

  toArray(): T[] {
    return [...this]
  }

  insertAt(val: T, i: number): boolean {
    if (i === 0) {
      this.prepend(val)
      return true
    }

    if (i === this._length - 1) {
      this.append(val)
      return true
    }
    if (i < 0 || i > this._length - 1 || !this._head) {
      return false
    }

    let currentNode = this._head
    for (let j = 0; j < i - 1; j++) {
      currentNode = currentNode.next!
    }

    let newNode = new LinkedListNode<T>(val)
    currentNode.next!.prev = newNode
    newNode.next = currentNode.next

    currentNode.next = newNode
    newNode.prev = currentNode

    this._length++

    return true
  }

  remove(val: T): boolean {
    if (this._length < 1) return false

    let currentNode = this._head
    for (let i = 0; i < this._length; i++) {
      if (!currentNode) return false

      if (currentNode.val === val) {
        break
      }
      currentNode = currentNode && currentNode.next
    }

    if (!currentNode!.prev) {
      this.removeHead()
      return true
    }

    if (!currentNode!.next) {
      this.removeTail()
      return true
    }

    currentNode!.prev.next = currentNode!.next
    currentNode!.next.prev = currentNode!.prev
    currentNode!.next = currentNode!.prev = null

    this._length--
    return true
  }
}
