# cx.array.remove

Removes an element from an array at the specified index.

## Examples

```js
import { array } from '@cxts/utils';

const arr = [1, 2, 3, 4, 5];
array.remove(arr, 2); // returns [1, 2, 4, 5]
```

## API

```ts
function remove<T>(array: T[], index: number): T[];
```

### Parameters

- `array` (`T[]`): The array to remove from
- `index` (`number`): The index to remove at

### Returns

(`T[]`): Returns the array with the element removed