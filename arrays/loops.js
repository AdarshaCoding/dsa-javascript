const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

// Traversal: Iterating through the elements of an array
console.log("for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("while loop"); // Should be careful with termination condition
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

console.log("do-while loop");
let j = 0;
do {
  console.log(arr[j]);
  j++;
} while (j < arr.length);

console.log("forEach");
arr.forEach((el) => {
  console.log(el);
});
console.log("for-in: index");

for (let i in arr) {
  console.log(i);
}
