const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
 
 function foo(arr) {
  const box = arr.filter(Array.isArray)
  return box
}
foo(tree2)