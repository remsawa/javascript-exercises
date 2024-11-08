const removeFromArray = function(array, remove) {
  const removedItem = remove - 1;//2
  array.splice(removedItem, 1);//(2, 1)
  return array;
};
removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
