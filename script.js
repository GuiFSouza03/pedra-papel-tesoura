let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function playRound(playerChoice) {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  let result = '';

  document.getElementById('result').style.marginBottom = "10px";

  if (playerChoice === 1) {
    document.getElementById('player-choice').innerHTML = `<i class="fas fa-hand-scissors"></i>`;
  } else if (playerChoice === 2) {
    document.getElementById('player-choice').innerHTML = `<i class="fas fa-hand-paper"></i>`;
  } else {
    document.getElementById('player-choice').innerHTML = `<i class="fas fa-hand-rock"></i>`;
  }

  if (computerChoice === 1) {
    document.getElementById('computer-choice').innerHTML = `<i class="fas fa-hand-scissors"></i>`;
  } else if (computerChoice === 2) {
    document.getElementById('computer-choice').innerHTML = `<i class="fas fa-hand-paper"></i>`;
  } else {
    document.getElementById('computer-choice').innerHTML = `<i class="fas fa-hand-rock"></i>`;
  }

  if (playerChoice === computerChoice) {
    result = "Empate!";
    document.getElementById('player-choice').style.color = "orange";
    document.getElementById('computer-choice').style.color = "orange";
    document.getElementById('result').style.backgroundColor = "orange";
  } else if (
    (playerChoice === 1 && computerChoice === 2) ||
    (playerChoice === 2 && computerChoice === 3) ||
    (playerChoice === 3 && computerChoice === 1)
  ) {
    playerScore++;
    result = "Você ganhou esta rodada!";
    document.getElementById('player-choice').style.color = "green";
    document.getElementById('computer-choice').style.color = "red";
    document.getElementById('result').style.backgroundColor = "green";
  } else {
    computerScore++;
    result = "O computador ganhou esta rodada!";
    document.getElementById('player-choice').style.color = "red";
    document.getElementById('computer-choice').style.color = "green";
    document.getElementById('result').style.backgroundColor = "red";
  }

  rounds++;

  document.getElementById('player-score').innerHTML = `Jogador: ${playerScore}`;
  document.getElementById('computer-score').innerHTML = `Computador: ${computerScore}`;

  if (playerScore > computerScore) {
    document.getElementById('player-score').style.color = "green";
    document.getElementById('computer-score').style.color = "red";
  } else if (playerScore < computerScore) {
    document.getElementById('player-score').style.color = "red";
    document.getElementById('computer-score').style.color = "green";
  } else {
    document.getElementById('player-score').style.color = "black";
    document.getElementById('computer-score').style.color = "black";
  }

  if (playerScore === 3 || computerScore === 3) {
    if (playerScore === 3) {
      result = "Você venceu o jogo!";
      document.getElementById('result').style.backgroundColor = "green";
      document.getElementById('round').style.display = "none";
    } else {
      result = "O computador venceu o jogo!";
      document.getElementById('result').style.backgroundColor = "red";
      document.getElementById('round').style.display = "none";
    }
    document.getElementById('restart').style.display = "flex";
  }

  document.getElementById('result').innerHTML = result;
}

function restart() {
  location.reload();
}