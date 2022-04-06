# React And Node
### Clone Git repo
- `git clone https://github.com/galamo/tech_days_node_js_react_2022.git`
# Node
- [download & install nodejs](https://nodejs.org/en/download/)
### Run Javascript in your local machine
1. open CMD - command line
2. type `node -v`
3. type `node` and press enter

### Async programming
1. Callbacks
2. Promises
3. Async await



# apps
# dev-apps
# docs
# examples
## Backend Api - Node.js

#### package.json
##### install globals
- `npm install -g typescript -g nodemon -g concurrently`

- dependencies 
```json
{
    "concurrently": "^6.2.0",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "joi": "^17.4.0",
    "mysql": "^2.18.1",
    "nodemon": "^2.0.7",
    "ts-node": "^10.0.0",
    "typescript": "^4.3.2",
    "winston": "^3.3.3"
}
```
- devDependencies
```json
{
     "@types/express": "^4.17.12",
     "@types/node": "^15.12.2",
     "@types/joi": "^17.2.3"
}  
```

### Typescript setup
1. tsconfig.json
```json
{
    "compilerOptions": {
        "module": "commonjs",
        "outDir": "dist",
        "target": "ES2015",
        "esModuleInterop": true,
        "resolveJsonModule": true,
        "baseUrl": "src"
    },
    "include": [
        "./src"
    ],
    "exclude": [
        "node_modules"
    ]
}
```



### SSL
- Private Key
```txt
-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----
```

- Certificate 
```text
-----BEGIN CERTIFICATE-----
MIIFuDCCA6ACCQC1jz7L6YPERTANBgkqhkiG9w0BAQsFADCBnTELMAkGA1UEBhMC
aWwxFDASBgNVBAgMC2RldmdlZWt3ZWVrMRAwDgYDVQQHDAd0ZWxhdml2MRQwEgYD
VQQKDAtkZXZnZWVrd2VlazEUMBIGA1UECwwLZGV2Z2Vla3dlZWsxFDASBgNVBAMM
C2RldmdlZWt3ZWVrMSQwIgYJKoZIhvcNAQkBFhVkZXZnZWVrd2Vla0BnbWFpbC5j
b20wHhcNMjEwNjI2MjExMzUyWhcNMjIwNjI2MjExMzUyWjCBnTELMAkGA1UEBhMC
aWwxFDASBgNVBAgMC2RldmdlZWt3ZWVrMRAwDgYDVQQHDAd0ZWxhdml2MRQwEgYD
VQQKDAtkZXZnZWVrd2VlazEUMBIGA1UECwwLZGV2Z2Vla3dlZWsxFDASBgNVBAMM
C2RldmdlZWt3ZWVrMSQwIgYJKoZIhvcNAQkBFhVkZXZnZWVrd2Vla0BnbWFpbC5j
b20wggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQCsYZbJxJLJKGSlT0z0
eTlyorq3p9m91UIPUUEEdjVJuyAC4JBG5WXOPu7lypbHsp/UMyreJ76oQZvJKkf/
56Zdd4TklDlB9E8i+Zh7nx25FlJ0IuWxwl/1qXSTks9Sj4sqNmm8XX0w8OyD3+yN
8wIBaqC7zDrjpZEj+IDvp1h/VaXQZp/M9JVIgGxMYqoUjSGdSEelBgSxApdssJc9
GOM5KxkDfwNHWUBBXWUPqW2CDhpfyUX69KS+hznj1KpIJt5dIL8RWxHiGweSwpY0
Y4Izs142DQE0F4/pAtb1nPwh3/gpX629li46vDiLZnGga5MwKN2N6EnhXAVolp1e
vzNTva/vuZSpgjSJKyJ+EqHGAA2oL6iFm/WPI75hYC4t//XqM0P22V//zodQWdm6
uJ3Tcb7lRZWRCkJaKObu3gyRCNt0Xg37z4oQViscw0L+0FpIfrFzAXQjAlqWvMwA
qkyVSnJAJIse6JqWZGzOEHSiFSFVmRccdrA6lHl5E3+G+1Ov6pHCJPI+rTYHdREt
m6XYeVnWm1Z+eSS82A6tSqIvT2+b3/ahMIws8CFGGIUSeaUeAkTorMYgxpzgWvUy
ZbocP/02qCd7Wt9IsoZ7nCZWCWFYL3hxhR5ZQaLzpdQ8qqr0vkpj6Xw5YoSJXsDK
lakOmZ55jp65DuqYF79CuaQlvQIDAQABMA0GCSqGSIb3DQEBCwUAA4ICAQAgcRUM
WKCRqf4Vl9VS5ZvtHx4RSiC2j1U6mrRukPWs4T6ajnUPSTfjScXNc75JPgRhVuAp
JCqZVfaH7Yt+LUMETEUTmYJ2ro5VEvllD9NyGitH5YjkaIYApy4hxOPKBggs+607
BEKqZ02i91Qza2efsx7KXIpe3iSozPRc72IcK7pdOB4qjQQ7+vK065TJkkipXRiT
vo0XEbUG28pG+o54/aSVXpY+kYBtxLAMDM3/U9TPICTbCTFh5n7feGQjiv/KyQgG
BS8R3yfkvcFJMg9LIgAArq7/Ge4tgJNzI1YMWqZg3ZP+5eTAQLaDAgny2nXgg7Ad
TUzh4ZPBNmTYCwGtkAUc5aJ5m4TDko7eONO1Fsn6ypQBv9ekZv00NVdRcyCKmhJe
NvcZjsC/7WtmA0iCBUKg6uPUhrMzKS1vdkxDSybonbuuyaS2jckf2Ve02hc2uiTN
iVx1TbKtBF635D3SV8qKpWPxHM3Kf3XRH/HrQkyA8WOKccUy6Wnb5Km18z5+Kvad
WjVhQs1suGj1g8G83Mdcghg8EvtbyX/LlSUCsY/UqPizLdjmV5rvXBl6fFLP0xAO
le2bi3HVf8GbtjuBaaaNaRdsT8d/AdCnS0n+80/uMvlLYQc1Ov7hB1hJlzgttoGX
qXjhMy9pA0hPf3yY7Q2V8fVKhfrmo+qGQv5DiA==
-----END CERTIFICATE-----


```
### Express entry point
```
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

```
### Express Middleware

```
app.use(handler)

function handler(req,res,next){
    next();
}
```
### Express Router


```
var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Cars Home Page')
})


```
### Entry points
- GET /cars
- GET /cars?id=<CarId>
- POST /car
- GET /countries ( go to another rest api )
    

## Client - React

#### install globals
`npm install -g create-react-app`
#### creating react applicaiton
`npx create-react-app cars-client --template typescript`


### Creating a simple function component
```js
function Car Page(){
    return (<div> <h1> Car Page </h1> </div>)
}

```

### Creating a simple function component
```js
function CarPage(){
    return (<div> <h1> Car Page </h1> </div>)
}

```

### Sending Props
```js
function Car(props){
    return (<div> {props.carName} </div>)
}

```

#### Project
1. React Cli 
2. Project structure
3. Component based
4. Containers / Pages
5. Hooks

### MongoDb - Database 

- Running mongoDB on docker
- [download & install](https://docs.docker.com/desktop/windows/install/) docker on your local machine 
1. `cd mongo folder`
2. `docker-compose up`


#### Resources & Data

1. Countries API: https://restcountries.com/v3.1/all
2. Cars Json:
```js

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
    },
    {
        "Name": "plymouth satellite",
        "Miles_per_Gallon": 18,
        "Cylinders": 8,
        "Displacement": 318,
        "Horsepower": 150,
        "Weight_in_lbs": 3436,
        "Acceleration": 11,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "amc rebel sst",
        "Miles_per_Gallon": 16,
        "Cylinders": 8,
        "Displacement": 304,
        "Horsepower": 150,
        "Weight_in_lbs": 3433,
        "Acceleration": 12,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "ford torino",
        "Miles_per_Gallon": 17,
        "Cylinders": 8,
        "Displacement": 302,
        "Horsepower": 140,
        "Weight_in_lbs": 3449,
        "Acceleration": 10.5,
        "Year": "1970-01-01",
        "Origin": "USA"
    }
]

```


# running the api
1. git pull
2. run `npm install` inside apps/api
3. run `npm run all`