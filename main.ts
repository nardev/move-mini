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
    kitronik_servo_lite.stop()
})
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setBrightness(255)
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
