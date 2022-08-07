
const detail = "plutonium cohort"
function printDate(){
    console.log("today's date is : 08/08/2022",detail)
}
function printMonth(){
    console.log(" month is :  August",detail)
}
function getBatchInfo(){
    console.log("batch name: plutonium, week: 3, Day:7th, the topic being taught today is  plutonium the topic for today is Nodejs module system’",detail)
}
module.exports.xyz = printDate
module.exports.xyz1 = printMonth
module.exports.xyz2 = getBatchInfo