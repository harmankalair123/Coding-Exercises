const morning = [
    { name: "Code in node.js", duration: 119},
    { name: "Some web development in React", duration: 125},
]

const afternoon = [
    { name: "Write up documentation", duration: 240},
    { name: "Continue with node service", duration: 190},
    { name: "Update the React front end", duration: 240},


]

const tasks = [morning, afternoon]

let cost = 0;
const hourly = 25


const dailyCost = tasks.reduce((accumulator, current) => accumulator.concat(current), []).filter((task) => {
     task.duration = task.duration / 60
     return task.duration >= 2
    }).map(task => cost = cost+ task.duration * hourly) // add task duration to the cost each time.



// console.log(dailyCost)
console.log(cost)



// *********************** Solution using if statement *************************//


// let cost = 0


// const dailyCost = tasks.reduce((accumulator, current) => accumulator.concat(current), [])


// dailyCost.map(task => {
//     task.duration = task.duration / 60
//     if (task.duration >= 2 ) {
//         cost = cost+ task.duration * 25 // add task duration to the cost each time.
//     }
    
// })
// console.log(cost)
// console.log(dailyCost)


