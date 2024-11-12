function removeFromArray(array, ...removeItem) { 
  const newArray = array.filter(arrayItem => !removeItem.includes(arrayItem));
  return newArray;
}

removeFromArray([1, 2, 3, 4], 3, 2);

/*



(3) [1, 2, 4]
const removeFromArray = function(array, remove) {
    const removedItem = remove - 1;//2
    array.splice(removedItem, 1);//(2, 1)
    return array;
};
removeFromArray([1, 2, 3, 4], 3);





=====




const myArray = [1, 2, 3, 4];
myArray.splice(2, 1);
console.log(myArray);//[1,2,4]
*/

// Do not edit below this line
module.exports = removeFromArray;
