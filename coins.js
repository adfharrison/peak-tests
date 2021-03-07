function coins(A) {
  let length = A.length;

  // check if 0 or 1 elements
  if (A.length <= 1) {
    return 0;
  }

  // more than 1 element
  if (A.length > 1) {
    let noChange = true;

    // do check to see if already sorted
    for (i = 1; i < length; i++) {
      if (A[i] === A[i - 1]) {
        // if not flip to false
        noChange = false;
      }
    }

    // if so, return 0
    if (noChange) {
      return 0;
    }

    // so now to check array against pre- sorted arrays

    // create array beginning with 1
    const arrayCreator1 = (l) => {
      let arr = [1];

      for (let i = 0; i < l - 1; i++) {
        if (arr[i] === 1) {
          arr.push(0);
        } else if (arr[i] === 0) {
          arr.push(1);
        }
      }
      return arr;
    };

    // create array beginning with 0
    const arrayCreator0 = (l) => {
      let arr = [0];

      for (let i = 0; i < l - 1; i++) {
        if (arr[i] === 1) {
          arr.push(0);
        } else if (arr[i] === 0) {
          arr.push(1);
        }
      }
      return arr;
    };

    const arr1 = arrayCreator1(length);
    const arr0 = arrayCreator0(length);

    // now to compare them to input array and find minimum difference

    let flipsForArr1 = 0;
    let flipsForArr0 = 0;

    for (i = 0; i < length; i++) {
      if (A[i] !== arr1[i]) {
        flipsForArr1 += 1;
      }
      if (A[i] !== arr0[i]) {
        flipsForArr0 += 1;
      }
    }

    //  return lowest difference. if same, doesnt matter which returns
    return flipsForArr1 > flipsForArr0 ? flipsForArr0 : flipsForArr1;
  }
}

// my only fear is that my reckoning for the tests is wrong
// i work from left to right - there culd be a transform from the
// middle that makes the number of flips less
module.exports = coins;
