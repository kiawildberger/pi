var Gpio = require('pigpio').Gpio,
    ledRed = new Gpio(4, {mode: Gpio.OUTPUT}),
    ledGreen = new Gpio(17, {mode: Gpio.OUTPUT}),
    ledBlue = new Gpio(27, {mode: Gpio.OUTPUT});

ledBlue.digitalWrite(0)
ledGreen.digitalWrite(0)
ledRed.digitalWrite(0)

let args = process.argv
args.shift().shift()
console.log(args)

// ledRed.pwnWrite()