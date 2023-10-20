let dffgshd = 0
function powller () {
    power.fullPowerOn(FullPowerSource.A)
    power.fullPowerOn(FullPowerSource.B)
    power.lowPowerEnable(LowPowerEnable.Prevent)
}
function rotato () {
    display.rotateTo(display.Direction.Normal)
}
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
control.inBackground(function () {
    rotato()
    powller()
})
