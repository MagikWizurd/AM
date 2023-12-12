document.addEventListener("keydown", playSound);

function playSound() {

    switch (event.key) {
        case "a":
            document.getElementById("boom").currentTime = 0
            document.getElementById("boom").play()

            break;
        case "s":
            document.getElementById("clap").currentTime = 0
            document.getElementById("clap").play()

            break;
        case "d":
            document.getElementById("hihat").currentTime = 0
            document.getElementById("hihat").play()

            break;
        case "f":
            document.getElementById("kick").currentTime = 0
            document.getElementById("kick").play()

            break;
        case "g":
            document.getElementById("openhat").currentTime = 0
            document.getElementById("openhat").play()

            break;
        case "h":
            document.getElementById("ride").currentTime = 0
            document.getElementById("ride").play()
            break;
        case "j":
            document.getElementById("snare").currentTime = 0
            document.getElementById("snare").play()
            break;
        case "k":
            document.getElementById("tink").currentTime = 0
            document.getElementById("tink").play()
            break;
        case "l":
            document.getElementById("tom").currentTime = 0
            document.getElementById("tom").play()
            break;
    }
}