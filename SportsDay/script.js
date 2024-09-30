let scores = {
    green: 0,
    red: 0,
    blue: 0,
    yellow: 0
};

function Opening() {
    console.log("Opening Ceremony has been started!");
    setTimeout(() => {
        Race100M();
    }, 2000);
}
Opening();

function Race100M() {
    console.log("Teams are--> Green, Red, Blue, Yellow");
    setTimeout(() => {
        console.log("100 Meter Race is started: ");
        setTimeout(() => {
            console.log("Initial Scores: ", scores);
            setTimeout(() => {
                getRaceWinner();
            }, 1000);
        }, 1000);
    }, 1000);
}

function getRaceWinner() {
    let x = prompt("Which team won the race? Green, Red, Blue, Yellow");
    if (x === "Green") {
        scores["green"] += 100;
    } else if (x === "Red") {
        scores["red"] += 100;
    } else if (x === "Blue") {
        scores["blue"] += 100;
    } else if (x === "Yellow") {
        scores["yellow"] += 100;
    } else {
        alert("Oops! You Selected Invalid Team");
        // Reload the page to restart the program
        location.reload();
        return; // Ensure no further code runs after reloading
    }
    console.log("Final Scores after the race: ", scores);
    setTimeout(() => {
        HighJump();
    }, 2000);
}

function HighJump() {
    console.log("It's time for Long Jump! ");
    setTimeout(() => {
        console.log("Current Scores: ", scores);
        setTimeout(() => {
            getHighJumpWinner();
        }, 1000);
    }, 1000);
}

function getHighJumpWinner() {
    let x = prompt("Which team won the High Jump? Green, Red, Blue, Yellow");
    if (x === "Green") {
        scores["green"] += 100;
    } else if (x === "Red") {
        scores["red"] += 100;
    } else if (x === "Blue") {
        scores["blue"] += 100;
    } else if (x === "Yellow") {
        scores["yellow"] += 100;
    } else {
        alert("Oops! You Selected Invalid Team");
        // Reload the page to restart the program
        location.reload();
        return; // Ensure no further code runs after reloading
    }
    console.log("Final Scores after the High Jump: ", scores);
    setTimeout(() => {
        LongJump();
    }, 2000);
}

function LongJump() {
    console.log("It's time for Long Jump! ");
    setTimeout(() => {
        console.log("Current Scores: ", scores);
        setTimeout(() => {
            getLongJumpWinner();
        }, 1000);
    }, 1000);
}

function getLongJumpWinner() {
    let x = prompt("Which team won the Long Jump? Green, Red, Blue, Yellow");
    if (x === "Green") {
        scores["green"] += 100;
    } else if (x === "Red") {
        scores["red"] += 100;
    } else if (x === "Blue") {
        scores["blue"] += 100;
    } else if (x === "Yellow") {
        scores["yellow"] += 100;
    } else {
        alert("Oops! You Selected Invalid Team");
        // Reload the page to restart the program
        location.reload();
        return; // Ensure no further code runs after reloading
    }
    console.log("Final Scores after the Long Jump: ", scores);
    setTimeout(() => {
        FinalScores(scores);
    }, 2000);
}

function FinalScores(scores) {
    console.log("Prize Ceremony has been Started");
    setTimeout(() => {
        let sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const prizeRankings = ["1st prize", "2nd prize", "3rd prize", "4th prize"];
    sortedScores.forEach(([color, score], index) => {
        console.log(`${prizeRankings[index]} goes to ${color} with a score of ${score}`);
    });
    }, 1000);
}
