input.onButtonPressed(Button.A, function () {
    if (spriteGame == false) {
        if (rainbow == false) {
            rainbow = true
            strip.showRainbow(1, 360)
            strip.show()
        } else {
            rainbow = false
            strip.clear()
            strip.show()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (spriteGame == true) {
        if (sprite.get(LedSpriteProperty.X) == 2) {
            game.addScore(1)
            strip.setPixelColor(strip.length() - stripPos, neopixel.colors(NeoPixelColors.Green))
            strip.show()
            stripPos = stripPos - 1
            speed += -10
        } else {
            game.addScore(-1)
            strip.setPixelColor(strip.length() - stripPos, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            stripPos = stripPos - 1
        }
        if (stripPos == 0) {
            game.gameOver()
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (rainbow == false) {
        if (spriteGame == false) {
            spriteGame = true
            speed = 500
        } else {
            spriteGame = false
            strip.clear()
            strip.show()
            sprite.delete()
        }
    }
})
let speed = 0
let stripPos = 0
let sprite: game.LedSprite = null
let spriteGame = false
let strip: neopixel.Strip = null
let rainbow = false
rainbow = false
strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
strip.setBrightness(100)
strip.clear()
strip.show()
basic.forever(function () {
    if (rainbow == true) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
    if (spriteGame == true) {
        sprite = game.createSprite(2, 2)
        stripPos = strip.length()
        while (spriteGame == true) {
            sprite.move(1)
            sprite.ifOnEdgeBounce()
            basic.pause(speed)
        }
    }
})
