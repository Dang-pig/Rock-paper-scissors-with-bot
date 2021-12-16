let plScore = 0
let botScore = 0
display()
function display() {
    document.getElementById("playerScore").innerText = " " + plScore
    document.getElementById("botScore").innerText = " " + botScore
}
function setName() {
    if (document.getElementById("name").value == "") {
        document.getElementById("name").style = "width: 300px; border-color: red; border-width: 2px";
        document.getElementById("name").placeholder = "Please enter a name";
    } else {
        document.getElementById("playerName").innerText = document.getElementById("name").value
        document.getElementById("main").style.display = "block";
    }
}
function displChoice(pl, bot) {
    let plCh = document.getElementById("plChoice")
    let botCh = document.getElementById("botChoice")
    pl == 0 ? plCh.innerText = "You choose rock!" : pl == 1 ? plCh.innerText = "You choose paper!" : plCh.innerText = "You choose scissors"
    bot == 0 ? botCh.innerText = "Bot choose rock!" : bot == 1 ? botCh.innerText = "Bot choose paper!" : botCh.innerText = "Bot choose scissors"
}
function disWin(winner) {
    document.getElementById("winner").innerText = winner + " won!"
}
function seLect(pl) {
    let bot = Math.round(Math.random() * 2)
    displChoice(pl, bot)
    if (bot == pl) {
        botScore++
        plScore++
        document.getElementById("winner").innerText = "Draw!"
    }
    else {
        if (bot == 0) {
            if (pl == 1) {
                plScore++
                disWin("You")
            }
            else {
                botScore++
                disWin("The bot")
            }
        }
        else if (bot == 1) {
            if (pl == 0) {
                botScore++
                disWin("The bot")
            }
            else {
                plScore++
                disWin("You")
            }
        }
        else {
            if (bot == 2) {
                if (pl == 0) {
                    plScore++
                    disWin("You")
                }
                else {
                    botScore++
                    disWin("The bot")
                }
            }
        }
    }
    display()
}