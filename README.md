# list-object

Create an object from a list of `[key, value]` tuples.

## Usage

```js
var listObject = require('list-object');

listObject();
//=> {}

listObject([['a', 1], ['b', 2]]);
//=> {a: 1, b: 2}
```

(see [test/test.js](https://github.com/zertosh/list-object/blob/master/test/test.js) for more examples)
