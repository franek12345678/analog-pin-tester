let dffgshd = 0
basic.forever(function () {
    dffgshd = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    dffgshd,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showNumber(dffgshd)
    }
})
