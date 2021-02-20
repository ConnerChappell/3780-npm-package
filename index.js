module.exports = function metersToYards(meters) {
    let yards = meters * 1.0936
    return parseFloat(yards.toFixed(4))
}

module.exports = function celsisusToFahrenheit(celsius) {
    let fahreneheit = (celsius * 1.8) + 32
    return fahreneheit
}

module.exports = function centimetersToFeet(cm) {
    let ft = cm * 0.032808
    return parseFloat(ft.toFixed(4))
}

module.exports = function kilogramsToPounds(kg) {
    let lbs = kg * 2.2046
    return parseFloat(lbs.toFixed(4))
}

module.exports = function kilometershourToMileshour(kph) {
    let mph = kph / 1.60934
    return parseFloat(mph.toFixed(4))
}