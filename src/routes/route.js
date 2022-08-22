const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
//1
router.get('/movies', function (req, res){
    const movies = ['TS', 'INCD', 'RDB','FN']
    res.send(movies)
})
//2
router.get('/movies1/:indexNumber', function (req, res){
    const movies = ['TS', 'INCD', 'RDB','FN']
    let reqParams = req.params
     let num = reqParams.indexNumber
    res.send(movies[num])
})
//3
router.get('/movies2/:indexNumber', function (req, res){
    const movies = ['TS', 'RDB', 'INCD','FN']
    let reqParams = req.params
    let num = reqParams.indexNumber
    if(num>movies.length)
    res.send('Please enter a valid Number')
    else{
        res.send(movies[num])
    }
    
})
//4
router.get('/films', function (req, res){
    const films = [
        { "id":1,"name":"The shining"},
        { "id":2,"name":"incendies"},
        { "id":3,"name":"Rang De Basanti"},
        { "id":4,"name":"Finding Nemo "},
    ]
       
    res.send(films)
})
router.get('/films/:filmId', function (req, res){
    const films = [
        { "id":1,"name":"The shining"},
        { "id":2,"name":"incendies"},
        { "id":3,"name":"Rang De Basanti"},
        { "id":4,"name":" Finding Nemo"},
    ]
    let reqParams = req.params
    let num = reqParams.filmId
    console.log(num)
    films.forEach((i)=>{ 
        if(i.id==num)
        res.send(i.name)
         })
         
            res.send('Enter a Valid Number')
         
    res.send(films)
})





module.exports = router;