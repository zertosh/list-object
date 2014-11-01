'use strict';

/**
 * Create an object from a list of [key, value] tuples.
 * @return {Object}
 */
module.exports = function(list) {
  var result = {};
  if (list && list.length) {
    for (var i = 0, len = list.length; i < len; i++) {
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
};
