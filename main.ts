let TenpExt = 0
radio.setGroup(1)
basic.forever(function () {
    TenpExt = input.temperature()
    TenpExt = TenpExt - 5
    basic.showNumber(TenpExt)
    radio.sendNumber(TenpExt)
})
