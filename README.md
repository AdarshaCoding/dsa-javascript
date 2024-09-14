# dsa-in-javascript

### Arrays

1.  In JavaScript, Array can contain any type of values and it is index based (0, 1, 2, etc..), example - Number, String, Boolean, Objects, Functions etc...
    ```javascript
    const arr = [
      1,
      2,
      3,
      4,
      5,
      true,
      { name: "Adarsha", city: "Bengaluru" },
      function () {
        console.log("Hello World!");
      },
    ];
    ```
2.  Array has lots of in-built methods like sort, slice, indexOf, findIndex, map, filter, reduce, forEach...

#### Loops In JavaScript

- Different loops: for, while, do-while, for-of, for-in

```
for(let i=0; i<arr.length;i++){
    console.log(arr[i])
}
```

#### Sorting Techniques

1.  Bubble sort : O(n2)
    - uses two loops, 1 (outer loop) for iterating over the each array elements and 1 (inner loop) for swapping the elements
