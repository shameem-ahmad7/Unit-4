// Scores object to keep track of each team's score
let scores = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0
  };
  
  // Opening Ceremony Function
  function OpeningCeremony(callback) {
    console.log("Opening Ceremony has started...");
    console.log("Initializing scores...");
    
    setTimeout(() => {
      console.log("Scores initialized:", scores);
      callback(Race100M);  // Passing next event as callback
    }, 1000);
  }
  
  // Race100M Function
  function Race100M(callback) {
    console.log("100m Race has started...");
    
    setTimeout(() => {
      let times = {
        red: Math.floor(Math.random() * 6) + 10,    // Random time between 10 and 15
        blue: Math.floor(Math.random() * 6) + 10,
        green: Math.floor(Math.random() * 6) + 10,
        yellow: Math.floor(Math.random() * 6) + 10
      };
      
      console.log("Race times:", times);
      
      // Sorting times to find positions
      let sortedTeams = Object.keys(times).sort((a, b) => times[a] - times[b]);
      
      scores[sortedTeams[0]] += 50; // 1st place
      scores[sortedTeams[1]] += 25; // 2nd place
  
      console.log("Updated scores after 100m Race:", scores);
      callback(LongJump);  // Passing next event as callback
    }, 3000);
  }
  
  // LongJump Function
  function LongJump(callback) {
    console.log("Long Jump has started...");
    
    setTimeout(() => {
      let colors = ["red", "blue", "green", "yellow"];
      let selectedColor = colors[Math.floor(Math.random() * colors.length)];  // Random color
  
      scores[selectedColor] += 150; // Award 150 points to random color
      console.log(`${selectedColor} team won the Long Jump!`);
      console.log("Updated scores after Long Jump:", scores);
      
      callback(HighJump);  // Passing next event as callback
    }, 2000);
  }
  
  // HighJump Function
  function HighJump(callback) {
    console.log("High Jump has started...");
    
    setTimeout(() => {
      let userColor = prompt("Which color team jumped the highest? (red/blue/green/yellow)");
  
      if (userColor && scores.hasOwnProperty(userColor.toLowerCase())) {
        scores[userColor.toLowerCase()] += 100;  // Award 100 points for highest jump
        console.log(`${userColor} team won the High Jump!`);
      } else {
        console.log("No valid input, no points awarded.");
      }
  
      console.log("Updated scores after High Jump:", scores);
      callback(AwardCeremony);  // Passing next event as callback
    }, 1000);
  }
  
  // Award Ceremony Function
  function AwardCeremony() {
    console.log("The Award Ceremony has begun...");
    
    let sortedScores = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    
    console.log(`1st place: ${sortedScores[0]} with ${scores[sortedScores[0]]} points`);
    console.log(`2nd place: ${sortedScores[1]} with ${scores[sortedScores[1]]} points`);
    console.log(`3rd place: ${sortedScores[2]} with ${scores[sortedScores[2]]} points`);
    console.log(`4th place: ${sortedScores[3]} with ${scores[sortedScores[3]]} points`);
  }
  
  // Starting the event with the Opening Ceremony
  OpeningCeremony(Race100M);
  