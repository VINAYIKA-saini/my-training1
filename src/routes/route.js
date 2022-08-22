const express = require('express');
const router = express.Router();

router.get('/array', function (req, res) {
   
    let arr= [1,2,3,5,6,7] 
	   ///LOGIC WILL GO HERE 
      //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array

       let sumArray=0;
       let x=arr.length;
       let n=arr[x-1]
       let sumNumbers=(n*(n+1)/2)
       for(let i=0;i<x;i++)
       {
        sumArray=sumArray+arr[i];
       }
       let missingNumber=sumNumbers-sumArray
	   res.send('The Missing Number is: '+ missingNumber);
    
})
module.exports = router;
