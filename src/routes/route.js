const express = require('express');
const abc = require('../introduction/intro')
const lodash = require('lodash')
 //const Tail = require('tail').Tail;
 const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
   // logger.welcome()
    let months = ['jan','feb','march','april','may','june','july','august','sept','oct','nov','dec']
    let abcd = lodash.chunk(months,3)
    console.log(abcd)
       
       let oddno = ['1','3','5','7','9','11','13','15','17','19']
        console.log(lodash.tail(oddno))
      //});
     let arr1 = lodash.union([1],[1,2],[1,2,3],[1,2,3,4],[1,2,3,4,5])
     console.log(arr1)

     let obj = lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]])
  console.log(obj)

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;