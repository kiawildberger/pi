var Gpio = require('pigpio').Gpio,
    ledRed = new Gpio(4, "oput"),
    ledGreen = new Gpio(17, "out"),
    ledBlue = new Gpio(27, "out");

ledBlue.digitalWrite(0)
ledGreen.digitalWrite(0)
ledRed.digitalWrite(0)

let args = process.argv
if(!args[2] && !args[3] && !args[4]) {
    args[2] = 50
    args[3] = 200
    args[4] = 100
}

ledRed.pwmWrite(args[2])
ledGreen.pwmWrite(args[3])
ledBlue.pwmWrite(args[4])