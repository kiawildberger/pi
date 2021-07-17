var Gpio = require('pigpio').Gpio,
    ledRed = new Gpio(4, "oput"),
    ledGreen = new Gpio(17, "out"),
    ledBlue = new Gpio(27, "out");

ledBlue.digitalWrite(0)
ledGreen.digitalWrite(0)
ledRed.digitalWrite(0)

let args = process.argv
console.log(args)

// ledRed.pwnWrite()