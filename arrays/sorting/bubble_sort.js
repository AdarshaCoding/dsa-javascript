const arr = [10, 40, 20, 57, 7, 15];
str = "";
for (let i = 0; i < arr.length; i++) {
  str += arr[i] + " ";
}
console.log(str);

// this loop is for iterations (based on the size of the array)
for (let i = 0; i < arr.length; i++) {
  //this loop used to swap the elements
  for (let j = 0; j < arr.length; j++) {
    //arr.length - i - 1 : reducing the iterations on each step: last value which is sorted, no need to check again
    // ascending order: arr[j] > arr[j + 1]   descending order: arr[j] < arr[j + 1]
    console.log(
      `i, j, aar[i], arr[j], iteration - ${i + 1} : ${i}, ${j} - ${arr[i]} - ${
        arr[j]
      }`
    );
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  console.log(arr);
}
