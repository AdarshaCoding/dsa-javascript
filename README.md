# dsa-in-javascript

### Arrays

1.  In JavaScript, array can contain any type of values and it is index based (0, 1, 2, etc..)
    Example - Number, String, Boolean, Objects, Functions etc...
    ```javascript
    const arr = [
      1,
      2,
      "Adarsha",
      true,
      { name: "Adarsha", city: "Bengaluru" },
      function () {
        console.log("Hello World!");
      },
    ];
    ```
2.  Array has lots of in-built methods like sort, slice, indexOf, findIndex, map, filter, reduce, forEach...

#### Loops In JavaScript

Different loops: for, while, do-while, for-of, for-in

```javascript
// syntax: for(initialization:condition:increment/decrement)
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// while & do-while
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);
```

#### Sorting Techniques

1.  Bubble sort : O(n2)
    - uses two loops, 1 (outer loop) for iterating over the each array elements and 1 (inner loop) for swapping the elements
2.  Selection sort: O(n2)
    - this also uses two loops but swaping happens at outer loop level and only tracking index (min or max) will be channged by inner loop
