function pitagoras (c1: number, c2: number) {
    return Math.sqrt(c1 ** 2 + c2 ** 2)
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(pitagoras(3, 2))
})
