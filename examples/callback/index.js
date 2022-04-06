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


console.log("Start script")


function getCarsFromServer(callback) {
    if (typeof callback !== 'function') return;
    setTimeout(() => {
        callback(cars)
    }, 3000)
}

// data => cars 
getCarsFromServer((data) => {
    if (!Array.isArray(data)) return;
    data.map(car => console.log(car))
})


console.log("End script")
