//array.filter will filter your array basef on the consition of the callback passed into it 
//Note; Array.filter returns a new array and does not modify the existing array

//array.filter(funciton(element) {})
const sports = [
    {  },
    { },
    { },
    { },
]

const teamSports = sports.filter(function(element) {
    return element.team
})

console.log(teamSports)