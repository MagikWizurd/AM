function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

var headsAmount = 0;
var tailsAmount = 0;

function flip() {
    let odds = Math.floor(Math.random() * 2); // Generate 0 or 1

    switch (odds) {
        case 0: 
            document.getElementById("coin").src="images/heads.png";
            headsAmount++;
            console.log("Heads count:", headsAmount);
            document.getElementById("heads").textContent="heads: " + headsAmount;
            break;
        case 1:
            document.getElementById("coin").src="images/tails.png";
            tailsAmount++;
            console.log("Tails count:", tailsAmount);
            document.getElementById("tails").textContent="tails: " + tailsAmount;
            break;
    }
}

function think(ans) {
    document.getElementById("prediction").textContent=ans;
}

function EightBall() {
    let odds = Math.floor(Math.random() * 2); // Generate 0 or 1

    switch (odds) {
        case 0: 
        document.getElementById("prediction").textContent="Thinking";
        sleep(1000).then(() => { document.getElementById("prediction").textContent="Yes";; });
            break;
        case 1:
            document.getElementById("prediction").textContent="Thinking";
            sleep(1000).then(() => { document.getElementById("prediction").textContent="No";; });
            break;
    }
}