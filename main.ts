let untenGeklickt = 0
let obenGeklickt = 0
function untenNichtGedrueckt () {
    led.unplot(2, 4)
    untenGeklickt = 0
}
function untenGedrueckt () {
    led.plot(2, 4)
    untenGeklickt = 1
}
function obenNichtGedrueckt () {
    led.unplot(2, 0)
    obenGeklickt = 0
}
function obenGedrueckt () {
    led.plot(2, 0)
    obenGeklickt = 1
}
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        obenGedrueckt()
    } else {
        obenNichtGedrueckt()
    }
    if (input.buttonIsPressed(Button.B)) {
        untenGedrueckt()
    } else {
        untenNichtGedrueckt()
    }
})
