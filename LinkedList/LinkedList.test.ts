import { LinkedList } from './LinkedList'

describe('test LinkedList methods', () => {
  describe('test head getter', () => {
    it('returns value if head exists', () => {
      const arrayList = [0]
      const linkedList = new LinkedList<number>(...arrayList)
      expect(linkedList.head).toBe(0)
    })

    it('throws error if head does not exist', () => {
      const linkedList = new LinkedList<number>()
      expect(() => linkedList.head).toThrow()
    })
  })

  describe('test tail getter', () => {
    it('returns value if tail exists', () => {
      const arrayList = [0, 1]
      const linkedList = new LinkedList<number>(...arrayList)
      expect(linkedList.tail).toBe(1)
    })

    it('throws error if tail does not exist', () => {
      const linkedList = new LinkedList<number>()
      expect(() => linkedList.tail).toThrow()
    })
  })

  describe('test length propert', () => {
    it('returns 0 if linkedList is empty', () => {
      const linkedList = new LinkedList<number>()
      expect(linkedList.length).toBe(0)
    })

    it('returns length if linkedList has values', () => {
      const linkedList = new LinkedList<number>()
      linkedList.append(0)
      linkedList.append(1)
      expect(linkedList.length).toBe(2)
    })
  })

  describe('test prepend method', () => {
    it('head will be pretended value', () => {
      const linkedList = new LinkedList<number>(...[0, 1, 2])
      linkedList.prepend(4)
      expect(linkedList.head).toBe(4)
    })
  })

  describe('test append method', () => {
    it('tail will be appended value', () => {
      const linkedList = new LinkedList<number>(...[0, 1, 2])
      linkedList.append(3)
      expect(linkedList.tail).toBe(3)
    })
  })

  describe('test removeHead method', () => {
    it('head will be second value of arrayList', () => {
      const arrayList = [0, 1, 2]
      const linkedList = new LinkedList<number>(...arrayList)
      linkedList.removeHead()
      expect(linkedList.head).toBe(1)
    })
  })

  describe('test removeTail method', () => {
    it('tail will be second latest value of arrayList', () => {
      const arrayList = [0, 1, 2, 3]
      const linkedList = new LinkedList<number>(...arrayList)
      linkedList.removeTail()
      expect(linkedList.tail).toBe(2)
    })
  })

  describe('test insertAt method', () => {
    const arrayList = [0, 1, 2, 3]
    const linkedList = new LinkedList<number>(...arrayList)
    linkedList.insertAt(999, 2)
    const expectedArray = [0, 1, 999, 2, 3]
    const arr = linkedList.toArray()
    expect(arr).toEqual(expectedArray)
  })

  describe('test remove method', () => {
    const arrayList = ['item1', 'item2', 'item3', 'item4']
    const linkedList = new LinkedList<string>(...arrayList)
    const target = 'item3'
    linkedList.remove(target)
    const arr = linkedList.toArray()
    const expectedArray = ['item1', 'item2', 'item4']
    expect(arr).toEqual(expectedArray)
  })
})
