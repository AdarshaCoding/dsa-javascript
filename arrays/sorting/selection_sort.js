// Selection sort
const arr = [10, 40, 20, 57, 7, 2];
str = "";
for (let i = 0; i < arr.length; i++) {
  str += arr[i] + " ";
}
console.log(str);
const array_size = arr.length;
// consider the first element is the minimum element
let minIndex = 0,
  temp = 0;

// swap only with outer loop and keep track of the minIndex element by inner loop, so that way the number of swaping is less when compared to Bubble Sort
for (let i = 0; i < array_size; i++) {
  minIndex = i;
  for (let j = i + 1; j < array_size; j++) {
    if (arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  }
  temp = arr[minIndex];
  arr[minIndex] = arr[i];
  arr[i] = temp;
}

console.log(arr);
