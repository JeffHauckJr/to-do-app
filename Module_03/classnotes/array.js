//Array.find
    //finds the first element in an arraythat satisfies the callback function passed into it.

    // const arr = ['elijah', 'jeff', 'greg']
    //we want to find the first occurance of jeff in this array

    // const jeffExists = arr.find(function (element) {
        //have access to element in callback
    //     return element === 'jeff'
    // })
    // console.log(jeffExists)

    const people  = [
        {name: 'jane',
        age: 30 },
        {name: 'john',
        age: 30 },
        {name: 'joe',
        age: 30 },
    ]

    //Find the first joe
    const findJohn = people.find(function(person) {
        return person.name === 'john'
    })
    console.log(findJohn)
