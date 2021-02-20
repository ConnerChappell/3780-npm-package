# DGM-3780 NPM Package

Each function in this NPM package performas a simple conversion of metric to imperial 

## Usage

#### Convert Meters to Yards
```javascript
function metersToYards(meters) {
    let yards = meters * 1.0936
    return parseFloat(yards.toFixed(4))
}

metersToYards(200) // 200 meters is equal to 218.72 yards
```

#### Convert Celsius to Fahrenheit
```javascript
function celsisusToFahrenheit(celsius) {
    let fahreneheit = (celsius * 1.8) + 32
    return fahreneheit
}

celsisusToFahrenheit(35) // 35 degrees celsius is 95 degrees fahrenheit
```

#### Convert Centimeters to Feet
```javascript
function centimetersToFeet(cm) {
    let ft = cm * 0.032808
    return parseFloat(ft.toFixed(4))
}

centimetersToFeet(150) // 150 centimeters is equal to 4.9212 feet
```

#### Convert Kilograms to Pounds
```javascript
function kilogramsToPounds(kg) {
    let lbs = kg * 2.2046
    return parseFloat(lbs.toFixed(4))
}

kilogramsToPounds(50) // 50 kilograms is equal to 110.23 pounds
```

#### Convert Kilometers per Hour to Miles per Hour
```javascript
function kilometershourToMileshour(kph) {
    let mph = kph / 1.60934
    return parseFloat(mph.toFixed(4))
}

kilometershourToMileshour(60) // 60 kilometers per hour is equal to 37.2824 miles per hour
```