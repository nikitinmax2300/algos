var twoSum = function(nums, target) {
  const cache = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
      if (cache.hasOwnProperty([target - nums[i]])) {
        console.log('test')
          result.push(cache[target - nums[i]], i);
      } else {
          cache[nums[i]] = i;
      };
      console.log(cache);
  };
  return result
}

// console.log(twoSum([2,7,11,15], 9))

var containsDuplicate = function(nums) {
    
};

var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++){
      if (nums.indexOf(nums[i]) !== i){
          return true
      };
  };
  return false
};

var maxProfit = function(prices) {
  maxProfit = 0;
  minPos = prices[0];
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPos){
          minPos = prices[i];
      };
      if (prices[i] - minPos > maxProfit) {
          maxProfit = prices[i] - minPos;
      };
  };
  return maxProfit
};

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  tArr = t.split('');
  for (let i = 0; i < s.length; i++) {
      if (!tArr.includes(s[i])) return false
      else tArr.splice(tArr.indexOf(s[i]), 1);
  }
  return true
};

var isValid = function(s) {
  const dictionary = {
      '{':'}',
      '(':')',
      '[':']'
  };
  const hash = [];
  for (let i = 0; i < s.length; i++) {
      if (dictionary.hasOwnProperty(s[i])) {
          hash.push(s[i])
          } else {
             let last = hash.pop();
              if (s[i] !== dictionary[last]) return false
          };
  };
  return !hash.length
};


var productExceptSelf = function(nums) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
      let product = 1;
      for (let j = 0; j < nums.length; j++) {
         if (i !== j) product *= nums[j];
      };
      arr.push(product);
  };
  return arr
};

var maxSubArray = function(nums) {
  //create sum and assign it 0
  let maxSum = 0;
  //create variable cur sum
  let curSum = 0;
  //edge case when the length of nums is 1 return one el
  if(nums.length === 1) return nums[0]
  //loop over the input nums arr 
  for(let i = 0; i < nums.length; i++){ 
      curSum = Math.max(curSum + nums[i], 0);
      maxSum = Math.max(maxSum, curSum);
 
  }
  return maxSum > 0 ? maxSum : Math.max(...nums)
};

var threeSum = function(nums, target) {
  for (let i = 0; i < nums.length; i+=1) {
      for (let j = i + 1; i < nums.length; j+=1) {
           for (let k = j + 1; k < nums.length; k+=1) {
                if (nums[i] + nums[j] + nums[k] === target) return true;
           };
      };
  };
  return result
};

const nums = [-1,0,1,2,-1,-4];
// console.log(threeSum(nums), 0);


const salesTeam = {
  name: 'Michael Scott',
  individualSales: 16,
  leadsInProgress: 7,
  manages: [
    {
      name: 'Jim Halpert',
      individualSales: 200,
      leadsInProgress: 15,
      manages: [
        {
          name: 'Pam Halpert',
          individualSales: 150,
          leadsInProgress: 20,
          manages: [],
        },
      ],
    },
    {
      name: 'Dwight K Schrute',
      individualSales: 100,
      leadsInProgress: 50,
      manages: [],
    },
  ],
}



// Write a function that accepts one argument, 
// an object containing an employee who manages a sales team, 
// and returns the total sales for the entire team.

// declare a function totalSales
function totalSales(obj, total = 0) {
// decralre a variable total
// iterate over input obj
  for(const prop in obj) {
  // create a conditional if 
    //icrement total individualSales is equal to prop, reassing total to the value 
    if(prop === 'individualSales' ) total += obj[prop]
    // if prop is object we will recursevile call totalSales
    if(typeof obj[prop] === 'object') {
      
      total = totalSales(obj[prop], total)
    }
  }
// return total
  return total
}

// console.log(totalSales(salesTeam)) //16+200+150+100 = 466

const solutionWindu = (arr) => {
    if (arr.length === 1) return '';
    //we need a variable for left and right that we increment as we traverse down
    //at the end, we need to return a string of Left or Right based on which is greater,
    //or an empty string if 0 nodes or equal tree heights
    let left = 0;
    let right = 0;
    let BSTrow = 2; //row 1 is first element, and we return if there's only one row
    let arrEquiv = 2; //this is the array number we must beat to increment BSTrow
    let idxSwtch = 1;
    function indexToSwitch(m, n) {
        //BSTrowlen / 2
        //index to switch equals the arrEquiv minus BSTleft calling with BSTrow
        idxSwtch = m - BSTleft(BSTrowlen(n));
    }
    function BSTrowlen(n) { //call with BSTrow
        return 2**(n - 1);
    };
    function BSTleft(n) { //call with n === BSTrowlen
      return n/2 
    };
    //number of elements in a row in the array to attribute to a branch like left or right
    //will be equal to the number of nodes in that Binary row divided by 2
    //so, first element of array is the first row of BST
    //elements 2 & 3 of array equal 2nd row of BST
    //elements 4,5,6,7 of array equal 3rd row of BST ...
    //elements 8-15 of array equal 4th row of BST
    //elements to add to Left side equal (2 ^ (BSTrow - 1)) / 2
    //then same amount for elements to add to Right
    //then update the BSTrow
    for (let i = 1; i < arr.length; i++) {
        if (i > arrEquiv) { //we need to increment BSTrow, etc.
            BSTrow += 1;
            arrEquiv += BSTrowlen(BSTrow)//add the length of this new row
            //run indexToSwitch so we have accurate index to go from left to right
            indexToSwitch(arrEquiv, BSTrow);
        }
        // skip over -1
        if (arr[i] === -1) {
            continue;
        }
        // test for whether we are looking at left items or right items
        //run
        else if (i <= idxSwtch) left += arr[i];
        else right += arr[i];
//         console.log('left', left, 'right', right)
    }
  	console.log(left, right)
    if (left > right) return 'Left'
    else if (right > left) return 'Right'
    else return '';
};

const solution = (arr) => {
  // Type your solution here 
  arr = arr.filter(num => num > 0);
  let left = 0;
  let right = 0;
  for (let i = 1; i < arr.length; i++) {
      if (i % 2 === 0) {
      right += arr[i]
      } else left += arr[i]
  }
  if (!arr.length || left === right) return '';
  return right > left ? "Right" : "Left";
};
const testArr = [3,6,2,9,-1,10];
// console.log(solution(testArr))
// var merge = function(intervals) {
//   let result = [];
//   intervals.sort((a, b) => a[0]- b[0]);
//   console.log(intervals)
//   intervals.forEach(element => {
//     if (!result.length) result.push(element);
//     else if (result[result.length-1][1] < element[0]) result.push(element);
//     else if (element[0] === 0 && result[result.length-1][0] > 0 && element[1] > result[result.length-1][1]) [result[result.length-1][0], result[result.length-1][1]] = [ 0, element[1]]; 
//     else if (element[0] === 0 && result[result.length-1][0] > 0) result[result.length-1][0] = 0;
//     else if (element[1] > result[result.length-1][1]) result[result.length-1][1] = element[1]
//     console.log(result, element)
//   });
//   return result
// };


const merge = intervals => {
  const res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length;) {
    let curInterval = intervals[i];
    console.log(curInterval, i)
    while (intervals[i] && intervals[i][0] <= curInterval[1]) {
      curInterval[1] = Math.max(intervals[i][1], curInterval[1]);
      i++;
    };
    res.push(curInterval)
  }
  return res
}
let intervals = [[2,3],[4,5],[6,7],[8,9],[1, 10]];
// console.log(merge(intervals))//[[0,5]]


var groupAnagrams = function(strs) {
    //create result arr
    let result = [];
    /// loop over the input arr
    for (let i = 0; i < strs.length; i++){
        //create sub arr
        let subArr = [];
          //inner loop
          for (let j = 0; j < strs.length; j++) {
            //check if the inner element has the same length as outer element
            if (strs[i].length === strs[j].length){
              //split charachter into arr and run everymethod passing the includes of the inner element
              if (strs[j].split('').every((n) => strs[i].includes(n))) {
                subArr.push(strs[j])
              }
              ///  if above evalutes to true push it into sub array and move on
            };
          };
          if (!result.flat().includes(subArr[0])) result.push(subArr);
    };
              //return result
    return result
};


   var groupAnagramsTest = function(strs) {

    const groups = {};

    for (let i = 0; i < strs.length; i++){

      let sort = strs[i].split('').sort().join('');
      if (!groups[sort]) {
        groups[sort] = [strs[i]];
      } else {
        groups[sort].push(strs[i])
      }
      console.log(groups)
    }
    return Object.values(groups)
   };

   let strs = ["eat","tea","tan","ate","nat","bat"];
let strsTest = ["ddddddddddg","dgggggggggg"];
   //[["bat"],["nat","tan"],["ate","eat","tea"]]

  //  console.log(groupAnagramsTest(strs));


   var maxProduct = function(nums) {
    let curr;
    let product;
    for (let i = 0; i < nums.length; i++) {
      curr = Math.max(1, i);
      product = Math.max(curr, curr * i + 1);
      console.log(curr, product)
    }
    return product
  };

  // let numsProd = [2,3,-2,4];
  // console.log(maxProduct(numsProd)) //6


  // you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solutionTop(A, B, P) {
  // write your code in JavaScript (Node.js 8.9.4)
  // handle edge cases
  if (!A || !B || !P) return 'not valid input';
  if (typeof P !== 'string') return 'not valid input';
  // create auxilary obj dict to store names and phone numbers that match
  const dict = {};
  // loop over arrao of numbers
  for (let i = 0; i < B.length; i++) {
      //if a number contains substring P store it in dict with assosiated name
      if (B[i].includes(P)) dict[A[i]] = B[i];
  };
  // if object is empty return str if no the shortest key from the object 
  return (!Object.keys(dict).length) ? 'NO CONTACT' : Object.keys(dict).sort((a, b) => a.length - b.length)[0]
}

const A = ['sander', 'amy', 'ann', 'michael'];
const B = ['123456789', '234567890', '789123456', '123123123'];
// console.log(solutionTop(A, B, '1'))


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solutionTop1(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  //naive(readable) approach, will be dry with regex
  //handle edge cases 
  if (typeof S !== 'string') return 'not valid input'
  // create a result arr
  const result = [];
  // create variable counter to place dashes 
  let counter = 0;
  //loop over the input str
  for (let i of S) { 
      //check if element is a number
      if (Number(i) || i === '0') {
      // check if counter is 3 push dash and restart counter
      if (counter === 3) {
          result.push('-');
          counter = 0;
      }
      // push into result
      result.push(i);
      //increment counter
      counter+=1;
      };
  };
  //return result as a string
  // handle edge case 
  if (result[result.length-2] === '-') {
      //es6 swap
      [result[result.length-2], result[result.length-3]] = [result[result.length-3], result[result.length-2]];
  };
  return result.join('')
}   


function solve(N) {
  let binaryNum = N.toString(2);
  if (binaryNum.length % 2 === 1) binaryNum = ['0'].concat(...binaryNum.split(''));
  let result = [], swap = [];
  for (let i = binaryNum.length-1; i >= 0; i--) {
     if (swap.length === 2) {
         result.push(swap);
         swap = [];
     };
      swap.push(binaryNum[i])
  };
 const convertedBinaryNum = result.concat([swap]).reverse().flat().join('');
 return parseInt(convertedBinaryNum, 2)
}

//plese double check IDE array prototype .flat() reduce() map() filter() not supported, 
//es6 array swap and push() acting weird produce unexpected output,
console.log(solve(1))


class MyComponent extends React.Component {
  constructor(props) {
    // super(props); -> missing
    // this.clickHandler = this.clickHandler.bind(this); we have to bind an event listener to the scope
    // set the default internal state
    this.state = {
      clicks: 0
    };
  }

  componentDidMount() { 
    this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount() {
    this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
  }

  clickHandler() {
    this.setState({
      clicks: this.clicks + 1
    });
  }

  render() {
    let children = this.props.children;

    return (
      <div className="my-component" ref="myComponentDiv">
      <h2>My Component ({this.state.clicks}//}) clicks})</h2> // misplaced curly brace and parentese
      <h3>{this.props.headerText}</h3> 
    {children}
    </div>
    );
  }
} // -> extra curly brace here

//we could use inline styling or assign an Id attribute instead of class, 
//but since we are not allowed to change anything inside we`ll do the following
<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      body { color: #fffaeb; }

      div,
      p {
        padding: 2rem;
        margin: 2rem 0;
      }
    </style>

    <style type="text/css">
      .outer { background-color: #044e54; }
      .inner { background-color: #486581; }
      .target { background-color: #98aeeb; }

      .outer p { background-color: #5c0b33; }
      .inner p { background-color: #9b1b5a; }

      .outer p.target { background-color: #c42d78; }
      .inner p.target { background-color: #e668a7; }

      .outer .inner .target { background-color: #fab8d9; }
      .outer .inner p.target { background-color: #ffe0f0; } //-> this will be the actual color since it`s the most specific 
      .outer .inner p.target { background-color: hotpink; } // but if we repeat again with the same selectors it will apply as the latest rule
    </style>
  </head>
  <body>
    <div class="outer">
      Outer
      <div class="inner">
        Inner
        <p class="target">paragraph</p>
      </div>
    </div>
  </body>
</html>


//QUESTION SET 1:
 //1. Can you rewrite the following `App` component to be a functional component?


import React from "react";

export class App extends React.Component {
  state = {
    value: localStorage.getItem("info") || ""
  };
  componentDidUpdate() {
    localStorage.setItem("info", this.state.value);
  }
  onChange = (event: any) => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} type="text" onChange={this.onChange} />
        <p>{value}</p>
      </div>
    );
  }
}

//functional component
import React, { useState, useEffect } from 'react';

export const App = () => {
  const [value, setValue] = useState(localStorage.getItem('info') || '');
  
  useEffect(() => { 
    localStorage.setItem('info', value);
  }, [value]);

  const onChange = (event: any) => setValue(event.target.value);

  return (
    <div>
      <input value={value} type="text" onChange={onChange} />
      <p>{value}</p>
    </div>
  );
};
