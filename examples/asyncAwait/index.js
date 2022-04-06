
const cars = [{
    "Name": "chevrolet chevelle malibu",
    "Miles_per_Gallon": 18,
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Acceleration": 12,
    "Year": "1970-01-01",
    "Origin": "USA"
},
{
    "Name": "buick skylark 320",
    "Miles_per_Gallon": 15,
    "Cylinders": 8,
    "Displacement": 350,
    "Horsepower": 165,
    "Weight_in_lbs": 3693,
    "Acceleration": 11.5,
    "Year": "1970-01-01",
    "Origin": "USA"
}]



const Types = {
    number: 'number'
}

function getCarsFromServer(hp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof hp !== Types.number) {
                reject("Invalid Parameter")
            } else {
                resolve(cars.filter(car => car.Horsepower > hp))
            }
        }, 4000)
    })
}

// resolve => then
// reject => catch
// async await 
async function main() {
    console.log("main started ")
    const result = await getCarsFromServer(120)
    // console.log(result)
    console.log("Real end of script")
}

console.log("Start script")
main()
main()
main()
console.log("End script")












