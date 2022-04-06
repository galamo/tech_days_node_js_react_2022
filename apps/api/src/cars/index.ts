import carsJson from "../data/index.json"
type Car = typeof carsJson[0]

export function getCarByName(cars: Array<Car>, name: string) {
    if (typeof name !== 'string' || !Array.isArray(cars)) return;
    const nameLowerCase = name.toLowerCase()
    return cars.find(car => car.Name.toLowerCase() === nameLowerCase)
}