

function merge(arr1) {
    // your code here
    return function (arr2) {
      return arr1.concat(arr2).sort((a, b) => a - b);
    };
  }
  
  //测试用例
  console.log(merge([1, 5, 8])([2, 4])); // =>[1,2,4,5,8]
  console.log(merge([6, 9])([1, 2])); // =>[1,2,6,9]