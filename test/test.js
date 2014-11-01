var test = require('tape');

test('list-object', function(t) {

  var listObject = require('../');

  t.test('create object from nothing', function(t) {
    t.deepEqual(listObject(), {});
    t.end();
  });

  t.test('create object from array of key value pairs', function(t) {
    t.deepEqual(listObject([['a', 1], ['b', 2]]), {a: 1, b: 2});
    t.end();
  });

  t.test('create object from array of keys only', function(t) {
    t.deepEqual(listObject([['a'], ['b']]), {a: undefined, b: undefined});
    t.end();
  });

  t.test('create object from arguments', function(t) {
    (function() {
      t.deepEqual(listObject(arguments), {a: 1, b: 2});
      t.end();
    })(['a', 1], ['b', 2]);
  });

  t.test('last unique key wins', function(t) {
    t.deepEqual(listObject([['a', 1], ['b', 2], ['a', 'A']]), {a: 'A', b: 2});
    t.end();
  });

  t.end();
});
