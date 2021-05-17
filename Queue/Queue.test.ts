import { Queue } from './Queue'

it('test queue', () => {
  const queue = new Queue<number>()
  queue.add(1)
  queue.add(2)
  queue.add(3)
  queue.add(4)
  expect(queue.remove()).toBe(1)
  expect(queue.remove()).toBe(2)
  expect(queue.peek()).toBe(3)
  expect(queue.remove()).toBe(3)
  expect(queue.isEmpty()).toBe(false)
  expect(queue.remove()).toBe(4)
  expect(queue.isEmpty()).toBe(true)
  console.log(queue)
})
