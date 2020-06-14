radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        kitronik_servo_lite.forward()
    } else if (receivedNumber == 2) {
        kitronik_servo_lite.right()
    } else if (receivedNumber == 3) {
        kitronik_servo_lite.backward()
    } else if (receivedNumber == 4) {
        kitronik_servo_lite.left()
    } else {
        kitronik_servo_lite.stop()
    }
})
input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    kitronik_servo_lite.driveForwards(100)
})
function flashlights () {
    for (let index = 0; index <= 10; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
    }
    strip.showRainbow(1, 360)
}
input.onButtonPressed(Button.AB, function () {
    kitronik_servo_lite.stop()
    flashlights()
})
input.onButtonPressed(Button.B, function () {
    basic.pause(1000)
    kitronik_servo_lite.driveBackwards(100)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setBrightness(150)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.pause(100)
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
strip.show()
basic.pause(100)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
strip.show()
basic.pause(100)
strip.showColor(neopixel.colors(NeoPixelColors.Purple))
strip.show()
basic.pause(100)
strip.showRainbow(1, 360)
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
