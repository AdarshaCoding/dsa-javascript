// Arrays

const arr = [10, 40, 20, 15, 7, 57];
console.log(arr);

// Traversal: Iterating through the elements of an array
console.log("for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Sorting of an array using built-in method "sort"
console.log(arr.sort((a, b) => a - b));
