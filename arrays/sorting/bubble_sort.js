const arr = [10, 40, 20, 15, 7, 57];
str = "";
for (let i = 0; i < arr.length; i++) {
  str += arr[i] + " ";
}
console.log(str);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    //arr.length - i - 1 : reducing the iterations on each step
    // ascending order: arr[j] > arr[j + 1]   descending order: arr[j] < arr[j + 1]
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
