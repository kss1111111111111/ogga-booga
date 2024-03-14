namespace SpriteKind {
    export const monster = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(mySprite, 16, 500)
})
info.onCountdownEnd(function () {
    game.setGameOverMessage(true, "YOU WON :D")
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "GAME OVER!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let mySprite: Sprite = null
game.showLongText("dont get caught", DialogLayout.Bottom)
tiles.setCurrentTilemap(tilemap`level1`)
let speed = 15
mySprite = Render.getRenderSpriteVariable()
Render.setViewMode(ViewMode.raycastingView)
let mySprite3 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
mySprite3.follow(mySprite, speed)
info.setLife(5)
info.startCountdown(150)
forever(function () {
    pause(5000)
    speed += 10
})
forever(function () {
    music.play(music.createSong(hex`0064000408020204001c00100500640000041e000004000000000000000000000000000a040004180000000200012010001200012020002200012030003200012005001c000f0a006400f4010a0000040000000000000000000000000000000002060000004000011d`), music.PlaybackMode.UntilDone)
})
