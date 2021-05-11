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
    let cur = this._head

    while (cur) {
      yield cur.val
      cur = cur.next
    }
  }

  [Symbol.iterator]() {
    return this.iterator()
  }

  get head(): T {
    if (!this._head) throw Error()
    return this._head.val
  }

  get tail(): T {
    if (!this._tail) throw Error()
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

    let cur = this._head
    for (let j = 0; j < i - 1; j++) {
      cur = cur.next!
    }

    let newNode = new LinkedListNode<T>(val)
    cur.next!.prev = newNode
    newNode.next = cur.next

    cur.next = newNode
    newNode.prev = cur

    this._length++

    return true
  }

  remove(val: T): boolean {
    if (this._length < 1) return false

    let cur = this._head
    for (let i = 0; i < this._length; i++) {
      if (!cur) return false

      if (cur.val === val) {
        break
      }
      cur = cur && cur.next
    }

    if (!cur!.prev) {
      this.removeHead()
      return true
    }

    if (!cur!.next) {
      this.removeTail()
      return true
    }

    cur!.prev.next = cur!.next
    cur!.next.prev = cur!.prev
    cur!.next = cur!.prev = null

    this._length--
    return true
  }
}