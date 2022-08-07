function trim(){
    let s="      Function Up     "
    console.log("String:",s)

}
function changetoLowerCase(){
    let s="Function Up"
    console.log("Lower Case:",s.toLowerCase())

}
function changetoUpperCase(){
    let s="Function Up"
    console.log( "Upper Case:",s.toUpperCase())

}
module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase
