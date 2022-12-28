const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];

const zipped = array1.map((letra, index) => {
  return [letra, array2[index]];
});

console.log(zipped); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]