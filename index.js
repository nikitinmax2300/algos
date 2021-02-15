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
console.log(threeSum(nums), 0);


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
  console.log(obj, total)
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

console.log(totalSales(salesTeam)) //16+200+150+100 = 466