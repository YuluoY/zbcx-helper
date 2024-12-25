# cx.array.getsNotFuz

Gets all elements from an array that do not match a fuzzy search string.

## Import
```js
import { getsNotFuz } from '@cx/array'
```

## Syntax
```ts
getsNotFuz(array, search, key?)
```

## Parameters
- `array` (Array): The array to search in
- `search` (string): The search string
- `key` (string, optional): The key to search in if array contains objects

## Returns
(Array): Returns a new array containing all elements that do not match the search

## Example
```js
const array = ['foo', 'bar', 'baz']
const result = cx.array.getsNotFuz(array, 'ba')
console.log(result) // ['foo']

const objects = [{ name: 'foo' }, { name: 'bar' }, { name: 'baz' }]
const result2 = cx.array.getsNotFuz(objects, 'ba', 'name')
console.log(result2) // [{ name: 'foo' }]
```