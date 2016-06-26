module.exports = intersect;

/*
  intersect([1, 2, 5, 6], [2, 3, 5, 6]); // [2, 5, 6]
*/

function intersect(arr1, arr2) {
  var result = [];
  var len = arr1.length;
  for (var i = 0; i < len; i++) {
    var elem = arr1[i];
    if (arr2.indexOf(elem) > -1) {
      result.push(elem);
    }
  }
  return result;
}
