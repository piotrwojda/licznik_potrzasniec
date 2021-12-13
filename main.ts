input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Cow)
    game.setScore(0)
    display.show(game.score())
    start_time = input.runningTime()
    timer = input.runningTime()
})
input.onGesture(Gesture.Shake, function () {
    if (timer < start_time + 3000) {
        game.addScore(1)
        display.show(game.score())
        basic.pause(10)
        timer += 100
    } else {
        basic.showIcon(IconNames.No)
    }
})
let timer = 0
let start_time = 0
let display: grove.TM1637 = null
game.setScore(0)
display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
basic.forever(function () {
	
})
